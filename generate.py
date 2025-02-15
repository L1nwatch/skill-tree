#!/bin/env python3
# -*- coding: utf-8 -*-
# version: Python3.X
""" generate skills.js for html
"""
import json
import os

__author__ = '__L1n__w@tch'


def generate_skills():
    json_path = os.path.join(os.path.dirname(__file__), "skills.json")
    js_path = os.path.join(os.path.dirname(__file__), "docs", "skills-hub", "skills.js")

    # Read JSON file
    with open(json_path, 'r', encoding='utf-8') as json_file:
        data = json.load(json_file)

    js_content = f"var pubs = {json.dumps(data, indent=2)};\n"

    # Write to script.js
    with open(js_path, 'w', encoding='utf-8') as js_file:
        js_file.write(js_content)
    print("JSON data has been written to script.js")


def generate_projects():
    json_file = os.path.join(os.path.dirname(__file__), "projects.json")
    js_file = os.path.join(os.path.dirname(__file__), "docs", "projects_info.js")
    with open(json_file, 'r') as f:
        projects = json.load(f)

    js_content = "const projects_info = " + json.dumps(projects, indent=4) + ";"

    with open(js_file, 'w') as f:
        f.write(js_content)

    print("JSON data has been written to projects_info.js")


if __name__ == "__main__":
    generate_skills()
    generate_projects()
