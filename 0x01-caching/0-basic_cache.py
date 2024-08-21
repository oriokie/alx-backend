#!/usr/bin/env python3
""" Basic dictionary"""
from base_caching import BaseCaching


class BasicCache(BaseCaching):
    """
    BasicCache: class that inherits from BaseCaching and is a caching system
    Retrieves items from a dictionary
    """

    def put(self, key, item):
        """
        Add an item in the cache
        """
        if key is None or item is None:
            return
        self.cache_data[key] = item

    def get(self, key):
        """Retrieves the item from the cache using the key"""
        return self.cache_data.get(key, None)
