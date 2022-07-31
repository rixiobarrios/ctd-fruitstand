import express from 'express';
import {
    getAllFruits,
    getAllVeggies,
    getFruitById,
    updateFruit,
} from '../controllers/fruitsController.js';

const router = express.Router();

router.route('/').get(getAllFruits);
router.route('/veggies').get(getAllVeggies);
router.route('/:id').get(getFruitById).put(updateFruit);

export default router;
