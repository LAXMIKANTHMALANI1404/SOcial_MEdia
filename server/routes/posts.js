import express from 'express';

const router=express.Router();
import { getPosts,postCreate} from '../controllers/posts.js';
router.get('/',getPosts);
router.post('/',postCreate);
export default router;