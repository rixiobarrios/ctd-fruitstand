import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FruitTile = ({ props }) => {
    const [fruit, setFruit] = useState([]);

    useEffect(() => {
        setFruit({ ...props });
    }, [props]);

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
        setFruit({ ...res.data });
        console.log(fruit);
    };

    const addFruit = async (e) => {
        e.preventDefault();
        const id = fruit._id;
        const body = { countInStock: fruit.countInStock + 1 };
        console.log(id, body);
        const res = await axios.put(
            `http://localhost:1337/api/fruits/${id}/`,
            body
        );
        console.log(res.data);
        setFruit({ ...res.data });
        console.log(fruit);
    };

    return (
        <div>
            <img src={fruit.image} alt={fruit.name} />
            <h2>{fruit.name}</h2>
            <h3>Count: {fruit.countInStock}</h3>
            <button onClick={addFruit}>Add</button>
            <button onClick={eatFruit}>Eat</button>
        </div>
    );
};

export default FruitTile;
