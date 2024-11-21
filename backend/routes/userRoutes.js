import express from "express";
import {
 followUnFollowUser,
getUserProfile,
  loginUser,
logoutUser,
  signupUser,
 updateUser,
 // getSuggestedUsers,
 // freezeAccount,
} from "../controllers/userController.js";

import protectRoute from "../middlewares/protectRoutes.js";

const router = express.Router();

router.post("/signup", signupUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/follow/:id", protectRoute, followUnFollowUser); // Toggle state(follow/unfollow)
router.put("/update/:id", protectRoute, updateUser);
router.get("/profile/:username", getUserProfile);
// router.get("/suggested", protectRoute, getSuggestedUsers);
// router.post("/follow/:id", protectRoute, followUnFollowUser); // Toggle state(follow/unfollow)
// router.put("/freeze", protectRoute, freezeAccount);

export default router;
