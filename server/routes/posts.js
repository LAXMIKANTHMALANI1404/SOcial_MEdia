import express from 'express';

const router=express.Router();
import { getPosts,postCreate,updatePost,deletePost,likePost} from '../controllers/posts.js';
router.get('/',getPosts);
router.post('/',postCreate);
router.patch('/:id',updatePost)
router.delete('/:id',deletePost);
router.patch('/:id/likePost',likePost);
export default router;