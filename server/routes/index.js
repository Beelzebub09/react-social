import express from "express";
import { login } from "../controllers/auth.js";
import {
    getUser,
    getUserFriends,
    addRemoveFriend,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";

export const authRouter = express.Router();
export const userRouter = express.Router();
export const postRouter = express.Router();


authRouter.post("/login", login);

/* READ */
userRouter.get("/:id", verifyToken, getUser);
userRouter.get("/:id/friends", verifyToken, getUserFriends);

/* UPDATE */
userRouter.patch("/:id/:friendId", verifyToken, addRemoveFriend);


/* READ */
postRouter.get("/", verifyToken, getFeedPosts);
postRouter.get("/:userId/posts", verifyToken, getUserPosts);

/* UPDATE */
postRouter.patch("/:id/like", verifyToken, likePost);



