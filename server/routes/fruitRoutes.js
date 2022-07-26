import express from 'express';
import {
    getAllFruits,
    getFruitById,
    updateFruit,
} from '../controllers/fruitsController.js';

const router = express.Router();

router.route('/').get(getAllFruits);
router.route('/:id').get(getFruitById).put(updateFruit);

export default router;
