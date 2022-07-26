import asyncHandler from 'express-async-handler';
import Fruit from '../models/Fruits.js';
import util from 'util';

const getAllFruits = asyncHandler(async (req, res) => {
    const fruits = await Fruit.find();
    console.log(util.inspect(fruits, false, null, true));
    res.json(fruits);
});

export { getAllFruits };
