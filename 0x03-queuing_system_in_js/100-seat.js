import express from 'express';
import redis from 'redis';
import kue from 'kue';
import { promisify } from 'util';

const app = express();
const PORT = 1245;

// Create a Redis client
const redisClient = redis.createClient();
const getAsync = promisify(redisClient.get).bind(redisClient);
const setAsync = promisify(redisClient.set).bind(redisClient);

// Create a Kue queue
const queue = kue.createQueue();

// Initialize available seats
const INITIAL_SEATS = 50;
const SEAT_KEY = 'available_seats';
await setAsync(SEAT_KEY, INITIAL_SEATS);

let reservationEnabled = true;

// Function to reserve seats
const reserveSeat = async (number) => {
  await setAsync(SEAT_KEY, number);
};

// Function to get current available seats
const getCurrentAvailableSeats = async () => {
  const availableSeats = await getAsync(SEAT_KEY);
  return parseInt(availableSeats, 10);
};

// Route to get the number of available seats
app.get('/available_seats', async (req, res) => {
  const availableSeats = await getCurrentAvailableSeats();
  res.json({ numberOfAvailableSeats: String(availableSeats) });
});

// Route to reserve a seat
app.get('/reserve_seat', async (req, res) => {
  if (!reservationEnabled) {
    return res.json({ status: 'Reservation are blocked' });
  }

  const job = queue.create('reserve_seat', {}).save((err) => {
    if (!err) {
      return res.json({ status: 'Reservation in process' });
    }
    return res.json({ status: 'Reservation failed' });
  });
});

// Process the queue
queue.process('reserve_seat', async (job, done) => {
  try {
    const availableSeats = await getCurrentAvailableSeats();
    if (availableSeats <= 0) {
      reservationEnabled = false;
      return done(new Error('Not enough seats available'));
    }

    // Decrease available seats by 1
    await reserveSeat(availableSeats - 1);
    done();
  } catch (error) {
    done(error);
  }
});

// Route to process the queue
app.get('/process', async (req, res) => {
  res.json({ status: 'Queue processing' });
  queue.process('reserve_seat', async (job, done) => {
    const availableSeats = await getCurrentAvailableSeats();
    if (availableSeats <= 0) {
      reservationEnabled = false;
      console.log(`Seat reservation job ${job.id} failed: Not enough seats available`);
      return done(new Error('Not enough seats available'));
    }

    await reserveSeat(availableSeats - 1);
    console.log(`Seat reservation job ${job.id} completed`);
    done();
  });
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
