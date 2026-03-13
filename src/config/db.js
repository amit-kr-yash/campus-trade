import mongoose from "mongoose";

const connectDb = async (url)=>{
    try {
        mongoose.connect(url)
        console.log("Mongo DB connected 🚀")
    } catch (error) {
        console.log("Error connecting DB ", error);
    }
}

export default connectDb;