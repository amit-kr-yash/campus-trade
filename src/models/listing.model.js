import mongoose from "mongoose"

const listingSchema = mongoose.Schema({
    itemName : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    condition : {
        type : String,
        required : true
    },
})