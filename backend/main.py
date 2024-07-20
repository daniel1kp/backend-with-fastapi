# backend/main.py
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from random import randint
from typing import List

app = FastAPI()

"""
Sample data

candy_set = {
    "id": 1,
    "candies": [
        {"id": 1, "size": 5},
        {"id": 2, "size": 5},
        {"id": 3, "size": 5},
        {"id": 4, "size": 5},
        {"id": 5, "size": 5},
        {"id": 6, "size": 5},
    ],

}
"""


@app.get("/")
def hello_world():
    pass


# Get candies


# Lick candies


# Bite Candies
