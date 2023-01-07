import postMessage from "../models/postMessage.js";
import { mongo, Mongoose } from 'mongoose';

import mongoose from 'mongoose';
const ObjectId=mongoose.Types.ObjectId;
export const getPosts=async (req,res)=>{
   try{
    const postMessages=await postMessage.find();
    res.status(200).json(postMessages);
   }
   catch(error){
    res.status(404).json({message:error.message}); 
   }
}

export const postCreate=async (req,res)=>{
   // console.log("pls help me");
 const msg=req.body;
 const newPost=new postMessage(msg);
 console.log(newPost);
 try{
    await newPost.save();
    res.send(newPost);
    res.status(201);

 }
 catch(error){
    res.status(409).json({message:error.message});
    console.log(error.message);
 }
}

export const updatePost=async(req,res)=>{
const {id:_id}=req.params;
const post=req.body;
if(!(ObjectId.isValid(_id))){
   return res.status(404).send('No post with that id');
}
const updatedPost=await postMessage.findByIdAndUpdate(_id,{...post,_id},{new:true});
res.json(updatedPost);
}