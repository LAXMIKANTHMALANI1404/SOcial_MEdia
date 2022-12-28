import postMessage from "../models/postMessage.js";

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
 }
}