import express from 'express'
const router = express.Router();

import {addListing, getListings, getListing, updateListing, updateListingImage} from '../controllers/listing.controller.js'
import upload from "../middlewares/fileUpload.middleware.js";

router.post('/',upload.single("image"), addListing)
router.get('/', getListings)
router.get('/:id',getListing)
router.put('/:id',updateListing)
router.put("/update-image/:id", upload.single("image") , updateListingImage)



export default router;