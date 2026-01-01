import mongoose from "mongoose";
export async function connectDB() {
    if(mongoose.connection.readyState===1){
        return;
    }
    try{
        await mongoose.connect(process.env.MONGO_URI!)
        console.log("Mongodb connected")
    }
    catch(err){
        console.log(err)
    }
}
const MONGO_URI=process.env.MONGO_URI!;
if(!MONGO_URI) throw new Error("Please add Mongo_uri")