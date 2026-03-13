import Listing from './../models/listing.model.js'

async function addListing(req,res){
    try {
        let prod = req.body;
        prod = Listing.create(prod)
        res.status(201).send(prod)
    } catch (error) {
        console.log("Error listing product : ", error)
        res.status(400).send({"message":"Listing of product not done", "error" : error.message})
    }
}

async function getListing(req,res) {
    try {
        const products = Listing.find();
        res.status(200).send(products)
    } catch (error) {
        console.log("Error getting listings : ", error)
        res.status(400).send({"message":"Listings not found", "error" : error.message})
    }
}

export {
    addListing,
    getListing
}