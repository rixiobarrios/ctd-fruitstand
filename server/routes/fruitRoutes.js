import express from 'express';
import { getAllFruits } from '../controllers/fruitsController.js';

const router = express.Router();

router.route('/').get(getAllFruits);

export default router;
