#!/usr/bin/env python3
""" FIFO caching """
from base_caching import BaseCaching


class FIFOCache(BaseCaching):
    """ FIFO cache system that inherits from BaseCaching
    and is a caching system
    Retrieves items in the order they were added
    """

    def __init__(self):
        """ Initiliaze
        """
        super().__init__()
        self.order = []

    def put(self, key, item):
        """ Add an item in the cache
        """
        if key is None or item is None:
            return
        if len(
                self.cache_data) >= BaseCaching.MAX_ITEMS \
                and key not in self.cache_data:
            discard = self.order.pop(0)
            del self.cache_data[discard]
            print("DISCARD: {}".format(discard))
        self.cache_data[key] = item
        self.order.append(key)

    def get(self, key):
        """Retrieves an item by key"""
        return self.cache_data.get(key, None)
