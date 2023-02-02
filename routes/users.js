import express from "express";
import {
  getUser,
  getUserFrieds,
  addRemoveFriend,
} from "../controller/users.js";
import { verifyToken } from "../middleware/auth.js";
