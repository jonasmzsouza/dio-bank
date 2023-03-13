import { Router } from "express";
import { UserController } from "./controllers/UserController";

export const router = Router();

const userController = new UserController();

router.get("/users/:id", userController.getUser);
router.post("/users", userController.createUser);
router.get("/users", userController.getAllUsers);
router.delete("/users/:id", userController.deleteUser);
