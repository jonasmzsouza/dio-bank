import { Router } from "express";
import { LoginController } from "./controllers/LoginController";
import { UserController } from "./controllers/UserController";
import { verifyAuth } from "./midlleware/verifyAuth";

export const router = Router();

const loginController = new LoginController();
const userController = new UserController();

router.post("/users", userController.createUser);
router.get("/users/:userId", verifyAuth, userController.getUser);
router.delete("/users", userController.deleteUser);

router.post("/login", loginController.login);
