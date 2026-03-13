import express from 'express'
const router = express.Router();

import {addListing, getListing} from '../controllers/listing.controller.js'
import upload from "../middlewares/fileUpload.middleware.js";

router.post('/',addListing)
router.get('/', getListing)



export default router;