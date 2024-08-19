# Pagination in API Design

## Resources

To get started with this project, make sure to review the following resources:

- [REST API Design: Pagination](https://www.sitepoint.com/paginating-real-time-data/)
- [HATEOAS](https://restfulapi.net/hateoas/)

## Learning Objectives

By the end of this project, you should be able to:

- **Paginate a dataset** using simple `page` and `page_size` parameters.
- **Paginate a dataset** with hypermedia metadata (HATEOAS).
- **Implement pagination** that is resilient to deletions in the dataset.

## Requirements

Please ensure your code meets the following requirements:

- All files will be interpreted/compiled on **Ubuntu 18.04 LTS** using `python3` (version 3.7).
- Every file should end with a new line.
- The first line of all your Python files must be `#!/usr/bin/env python3`.
- A `README.md` file, located at the root of the project folder, is mandatory.
- Your code must adhere to the `pycodestyle` style (version 2.5.\*).
- The length of your files will be tested using the `wc` command.
- All modules should have documentation (`python3 -c 'print(__import__("my_module").__doc__)'`).
- All functions should have documentation (`python3 -c 'print(__import__("my_module").my_function.__doc__)'`).
  - Documentation is not just a word; it should be a meaningful sentence explaining the purpose of the module, class, or method (the length of it will be verified).
- All functions and coroutines must be type-annotated.

## Setup: `Popular_Baby_Names.csv`

For this project, you will use the dataset `Popular_Baby_Names.csv`. Make sure to have this file in your project directory before you start.

This dataset will be used to demonstrate how to paginate a dataset in various ways, as described in the learning objectives.

---

## Author

Kenyansa Edwin Orioki
