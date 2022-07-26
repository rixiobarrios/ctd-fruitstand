import asyncHandler from 'express-async-handler';
import Fruit from '../models/Fruits.js';
import util from 'util';

const getAllFruits = asyncHandler(async (req, res) => {
    const fruits = await Fruit.find();
    console.log(util.inspect(fruits, false, null, true));
    res.json(fruits);
});

const getFruitById = asyncHandler(async (req, res) => {
    const fruit = await Fruit.findById(req.params.id);

    if (fruit) {
        res.json(fruit);
    } else {
        res.status(404);
        throw new Error('Fruit not found');
    }
});

const updateFruit = asyncHandler(async (req, res) => {
    const { countInStock } = req.body;
    const fruit = await Fruit.findById(req.params.id);
    if (fruit) {
        fruit.countInStock = countInStock;
        const updatedFruit = await fruit.save();
        res.json(updatedFruit);
    } else {
        res.status(404);
        throw new Error('Fruit not found');
    }
});

export { getAllFruits, getFruitById, updateFruit };
