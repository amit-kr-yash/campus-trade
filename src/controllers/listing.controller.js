import Listing from './../models/listing.model.js'

async function addListing(req,res){
    try {
        let prod = req.body;
        prod.imageName = req.file.filename;
        prod = await Listing.create(prod)
        res.status(201).send(prod)
    } catch (error) {
        console.log("Error listing product : ", error)
        res.status(400).send({"message":"Listing of product not done", "error" : error.message})
    }
}

async function getListings(req,res) {
    try {
        const products = await Listing.find();
        res.status(200).send(products)
    } catch (error) {
        console.log("Error getting listings : ", error)
        res.status(400).send({"message":"Listings not found", "error" : error.message})
    }
}

async function getListing(req,res) {
    try {
        const product = await Listing.findById(req.params.id);
        res.status(200).send(product)
    } catch (error) {
        console.log("Error getting listings : ", error)
        res.status(400).send({"message":"Listing not found", "error" : error.message})
    }
}

async function updateListing(req,res) {
    try {
        let updatedProduct = req.body;
        updatedProduct = await Listing.findOneAndUpdate({_id:req.params.id},updatedProduct,{returnDocument : 'after'})
        res.status(200).send(updatedProduct);
    } catch (error) {
        console.log("Error updating listings : ", error)
        res.status(400).send({"message":"Updation not done", "error" : error.message})
    }
}

async function updateListingImage(req, res){
    try {
        
        let { id } = req.params
        let imageName = req.file.filename
        console.log(imageName)
        let event = await Listing.findOneAndUpdate({_id: id}, {imageName: imageName}, {returnDocument: 'after'})
        res.status(200).send(event)
    } catch (error) {
        console.log(error)
        res.status(500).send({"error": error.message})
    }
}


export {
    addListing,
    getListings,
    getListing,
    updateListing,
    updateListingImage
}