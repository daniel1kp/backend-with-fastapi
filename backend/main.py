from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import random
from typing import List, Dict

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)

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

class Candy(BaseModel):
    id: int
    size: int

class CandySet(BaseModel):
    candies: List[Candy]

# List Candies

@app.get("/candies/{id}")
def get_candies(id: int):
    candy_set = [Candy(id=i, size=random.randint(1, 10)) for i in range(1, 11)]
    return {"candies": candy_set}

# Hello Name Example

@app.get("/hello/{name}")
def read_name(name: str):
    return {"message": f"Hello {name}"}

# Lick Candy

@app.get("/lick/{id}")
def get_candies(id: int):
    candies = candy_set_global[id]
    random_decrement =  random.randint(0,3)
    for candy in candies:
        candy.size -= random.decrement
        if candy.size < 0:
            candy.size = 0
    return{"candies":candies, id:id}

# Bite Candy

@app.get("/bite/{id}")
def get_candies(id: int):
    candies = candy_set_global[id]
    bite_amount = 2  
    for candy in candies:
        candy.size = max(0, candy.size - bite_amount)
    return {"candies": candies, "id": id}
