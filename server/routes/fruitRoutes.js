import express from 'express';
import {
    getAllFruits,
    getAllVeggies,
    getAllBaskets,
    getAllInSeason,
    getFruitById,
    updateFruit,
} from '../controllers/fruitsController.js';

const router = express.Router();

router.route('/fruits').get(getAllFruits);
router.route('/veggies').get(getAllVeggies);
router.route('/baskets').get(getAllBaskets);
router.route('/inSeason').get(getAllInSeason);
router.route('/:id').get(getFruitById).put(updateFruit);

export default router;
