import express from 'express';

const router=express.Router();
import { getPosts,postCreate,updatePost} from '../controllers/posts.js';
router.get('/',getPosts);
router.post('/',postCreate);
router.patch('/:id',updatePost)
export default router;