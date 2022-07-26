import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FruitTile = ({ props }) => {
    const [fruit, setFruit] = useState([]);

    useEffect(() => {
        setFruit({ ...props });
    }, [props]);

    const fruitPUT = async (e) => {
        e.preventDefault();
        console.log(e.target.value);
        const body = {};
        if (e.target.value === 'add') {
            body.countInStock = fruit.countInStock + 1;
        } else if (e.target.value === 'eat') {
            body.countInStock = fruit.countInStock - 1;
        }
        const id = fruit._id;
        console.log(id, body);
        const res = await axios.put(
            `http://localhost:1337/api/fruits/${id}/`,
            body
        );
        console.log(res.data.countInStock);
        setFruit({ ...res.data });
        if (res.data.countInStock === 0) {
            e.target.disabled = true;
            alert('out of stock');
        }
    };

    return (
        <div>
            <img src={fruit.image} alt={fruit.name} />
            <h2>{fruit.name}</h2>
            <h3>Count: {fruit.countInStock}</h3>
            <button value="add" onClick={fruitPUT}>
                Add
            </button>
            <button value="eat" onClick={fruitPUT}>
                Eat
            </button>
        </div>
    );
};

export default FruitTile;
