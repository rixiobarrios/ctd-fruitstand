import React, { useState } from 'react';
import axios from 'axios';

const FruitTile = ({ fruit }) => {
    const eatFruit = async (e) => {
        e.preventDefault();
        const id = fruit._id;
        const body = { countInStock: fruit.countInStock - 1 };
        console.log(id, body);
        const res = await axios.put(
            `http://localhost:1337/api/fruits/${id}/`,
            body
        );
        console.log(res.data);
    };

    return (
        <div>
            <img src={fruit.image} alt={fruit.name} />
            <h2>{fruit.name}</h2>
            <h3>Count: {fruit.countInStock}</h3>
            <button>Add</button>
            <button id={`${fruit._id}`} onClick={eatFruit}>
                Eat
            </button>
        </div>
    );
};

export default FruitTile;
