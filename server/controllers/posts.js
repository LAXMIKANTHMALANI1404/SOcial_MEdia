import postMessage from "../models/postMessage.js";
import { mongo, Mongoose } from 'mongoose';

import mongoose from 'mongoose';
const ObjectId = mongoose.Types.ObjectId;
export const getPosts = async (req, res) => {
   try {
      const postMessages = await postMessage.find();
      res.status(200).json(postMessages);
   }
   catch (error) {
      res.status(404).json({ message: error.message });
   }
}

export const postCreate = async (req, res) => {
   console.log("hai",req.userId);
   // console.log("pls help me");
   const msg = {...req.body,creatorId:req.userId};
   const newPost = new postMessage(msg);
   console.log(newPost);
   try {
      await newPost.save();
      res.send(newPost);
      res.status(201);

   }
   catch (error) {
      res.status(409).json({ message: error.message });
      console.log(error.message);
   }
}

export const updatePost = async (req, res) => {
   const { id: _id } = req.params;
   const post = req.body;
   if (!(ObjectId.isValid(_id))) {
      return res.status(404).send('No post with that id');
   }
   const updatedPost = await postMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true });
   res.json(updatedPost);
}
export const deletePost = async (req, res) => {
   // console.log("hi");
   const { id: _id } = req.params;
   console.log(_id);
   if (!(ObjectId.isValid(_id))) {
      return res.status(404).send('No post with that id');
   }
   const post=await postMessage.findById(_id);
   if(post?.creatorId===req.userId){
   const deleted = await postMessage.findByIdAndDelete(_id);
   res.json({ message: "post successfully deleted" });}
   else{
      console.log("Not able to delete");
   }
}
export const likePost = async (req, res) => {
   // console.log(req.userId);
   const { id: _id } = req.params;
   if(!req.userId)return res.json({message:'unauthenticated'});

   const post = await postMessage.findById(_id);
   if (!(ObjectId.isValid(_id))) {
      return res.status(404).send('No post with that id');
   }
   const index=  post?.likes.findIndex((id)=>id===String(req.userId));
   // console.log(index);
   if(index===-1){
      post?.likes.push(req.userId);
   }
   else{
      post.likes=await post.likes.filter((id)=>id!== String(req.userId));
   }
//   if (post.likes.includes(req.user._id)) {
//       return res.status(
   const upd = await postMessage.findByIdAndUpdate(_id, post, { new: true });
   // console.log(upd);
   res.json({ message: upd });
}