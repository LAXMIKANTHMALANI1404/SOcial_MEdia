import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title:String,
    message : String,
    creator :String,
    creatorId:String,
    tags:[String],
    selectedFile : String,
    likes:{
        type : [String],
        default:[],
    },
    createdAt : {
        type : Date,
        default : new Date,
    },
    // { typeKey: '$type' }
},
    // { typeKey: '$type' }
    ); 

const postMessage=mongoose.model('postMessage',postSchema);

export default postMessage;