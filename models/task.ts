import { model, models, Schema } from "mongoose";

const TaskSchema=new Schema({
    title:{type:String,required:true},
    completed:{type:Boolean,default:false},
    description:{type:String}
})
export default models.Task || model("Task",TaskSchema)