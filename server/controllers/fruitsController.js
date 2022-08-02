import asyncHandler from 'express-async-handler';
import Fruit from '../models/Fruits.js';
// import util from 'util';
import mailer from '../services/mailer.js';

const getAllFruits = asyncHandler(async (req, res) => {
    const fruits = await Fruit.find({ itemType: 'Fruit' });
    // console.log(util.inspect(fruits, false, null, true));
    res.json(fruits);
});

const getAllVeggies = asyncHandler(async (req, res) => {
    const veggies = await Fruit.find({ itemType: 'Veggie' });
    // console.log(util.inspect(veggies, false, null, true));
    res.json(veggies);
});

const getAllBaskets = asyncHandler(async (req, res) => {
    const baskets = await Fruit.find({ itemType: 'Basket' });
    // console.log(util.inspect(baskets, false, null, true));
    res.json(baskets);
});

const getAllInSeason = asyncHandler(async (req, res) => {
    const inSeason = await Fruit.find({ itemType: 'InSeason' });
    // console.log(util.inspect(inSeason, false, null, true));
    res.json(inSeason);
});

const getFruitById = asyncHandler(async (req, res) => {
    const fruit = await Fruit.findById(req.params.id);

    if (fruit) {
        res.json([fruit]);
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
        // console.log(updatedFruit.countInStock);
        if (updatedFruit.countInStock == 0) {
            // console.log(`Your ${fruit.name} stock is now 0`);
            mailer(fruit.name);
        }
        res.json(updatedFruit);
    } else {
        res.status(404);
        throw new Error('Fruit not found');
    }
});

export {
    getAllFruits,
    getAllVeggies,
    getAllBaskets,
    getAllInSeason,
    getFruitById,
    updateFruit,
};
