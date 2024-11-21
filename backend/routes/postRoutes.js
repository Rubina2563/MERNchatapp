import express from "express";
import {
createPost,
deletePost,
getPost,
likeUnlikePost,
 replyToPost,
getFeedPosts,
//   getUserPosts,
} from "../controllers/postController.js";

import protectRoute from "../middlewares/protectRoutes.js";

const router = express.Router();

router.get("/feed", protectRoute, getFeedPosts);
router.get("/:id", getPost);
router.post("/create", protectRoute, createPost);
router.delete("/:id", protectRoute, deletePost);
router.put("/like/:id", protectRoute, likeUnlikePost);
// router.get("/user/:username", getUserPosts);
 router.put("/reply/:id", protectRoute, replyToPost);

export default router;
