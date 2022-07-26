import React from 'react';

const FruitTile = ({ fruit }) => {
    return (
        <div>
            <img src={fruit.image} />
            <h2>{fruit.name}</h2>
            <h3>Count: {fruit.countInStock}</h3>
        </div>
    );
};

export default FruitTile;
