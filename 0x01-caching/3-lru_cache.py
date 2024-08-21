#!/usr/bin/env python3
""" LRU Caching """
from base_caching import BaseCaching


class LRUCache(BaseCaching):
    """ LRU cache system that inherits from BaseCaching and is a caching system
    Retrieves items in the order they were last accessed
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
        if key in self.order:
            self.order.remove(key)
        self.order.append(key)

    def get(self, key):
        """Retrieves an item by key"""
        if key in self.order:
            self.order.remove(key)
        if key in self.cache_data:
            self.order.append(key)
        return self.cache_data.get(key, None)
