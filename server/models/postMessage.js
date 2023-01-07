import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title:String,
    message : String,
    creator :String,
    tags:[String],
    selectedFile : String,
    likeCount:{
        type : Number,
        default:0,
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