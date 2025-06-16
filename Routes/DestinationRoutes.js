import express from 'express';
const router = express.Router();


import { getDestinations } from '../Controlllers/DestinationController.js';



router.get('/destination',getDestinations);


export default router ;