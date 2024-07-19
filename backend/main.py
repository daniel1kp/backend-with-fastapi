# backend/main.py
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from random import randint
from typing import List

app = FastAPI()


@app.get("/")
def hello_world():
    pass


# Get candies


# Lick candies


# Bite Candies
