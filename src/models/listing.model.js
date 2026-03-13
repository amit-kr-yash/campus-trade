import { request } from "express"
import mongoose from "mongoose"

const listingSchema = mongoose.Schema({
    itemName : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true,
        enum : ['Book', 'Engineering', 'Stationery', 'Electronics', 'Sports', 'Equipment', 'Clothing', 'Other']
    },
    description : {
        type : String,
        required : true
    },
    condition : {
        type : String,
        required : true,
        enum : ['As New', 'Good', 'Poor']
    },
    price : {
        type : Number,
        required : true
    },
    imageName : {
        type : String,
        required : true
    },
    status : {
        type : String,
        required : true,
        enum : ['Available', 'Sold']
    },
    owner : {
        type : mongoose.Types.ObjectId,
        required : true,
        ref : 'User'
    }
},{timeStamps : true})

const Listing = mongoose.model('Listing', listingSchema);

export default Listing