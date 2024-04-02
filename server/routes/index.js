import express from "express";
import { login } from "../controllers/auth.js";
import {
    getUser,
    getUserFriends,
    addRemoveFriend,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";

export const router1 = express.Router();
export const router2 = express.Router();
export const router3 = express.Router();


router1.post("/login", login);

/* READ */
router2.get("/:id", verifyToken, getUser);
router2.get("/:id/friends", verifyToken, getUserFriends);

/* UPDATE */
router2.patch("/:id/:friendId", verifyToken, addRemoveFriend);


/* READ */
router3.get("/", verifyToken, getFeedPosts);
router3.get("/:userId/posts", verifyToken, getUserPosts);

/* UPDATE */
router3.patch("/:id/like", verifyToken, likePost);



