#!/bin/env python3
# -*- coding: utf-8 -*-
# version: Python3.X
""" generate skills.js for html
"""
import json
import os

__author__ = '__L1n__w@tch'

if __name__ == "__main__":
    json_path = os.path.join(os.path.dirname(__file__), "skills.json")
    js_path = os.path.join(os.path.dirname(__file__), "docs", "skills.js")

    # Read JSON file
    with open(json_path, 'r', encoding='utf-8') as json_file:
        data = json.load(json_file)

    js_content = f"var pubs = {json.dumps(data, indent=2)};\n"

    # Write to script.js
    with open(js_path, 'w', encoding='utf-8') as js_file:
        js_file.write(js_content)
    print("JSON data has been written to script.js")
