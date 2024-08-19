#!/usr/bin/env python3
"""
Simple helper function
"""
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """ Returns a tuple containing the start index and end index for the
        given page and page_size

        Args:
            page: int
            page_size: int

        Returns:
            Tuple[start index, end index]
    """
    start_index = (page - 1) * page_size
    end_index = page * page_size
    return (start_index, end_index)
