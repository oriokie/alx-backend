import kue from 'kue';

const queue = kue.createQueue();
const blacklistedNumbers = ['4153518780', '4153518781'];

function sendNotification(phoneNumber, message, job, done) {
  const isBlacklisted = blacklistedNumbers.includes(phoneNumber);
  job.progress(0, 100);
  if (isBlacklisted) {
    return done(new Error(`Phone number ${phoneNumber} is blacklisted`));
  }

  console.log(`Sending notification to ${phoneNumber}, with message: ${message}`);

  job.progress(50, 100);

  done();
}

queue.process('push_notification_code_2', (job, done) => {
  const { phoneNumber, message } = job.data;

  sendNotification(phoneNumber, message, job, done);
});
