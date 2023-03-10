import { Request, Response } from "express";
import { UserService } from "../services/UserService";

export class UserController {
  userService: UserService;

  constructor(userService = new UserService()) {
    this.userService = userService;
  }

  createUser = (request: Request, response: Response) => {
    const user = request.body;

    if (!user.name) {
      return response
        .status(400)
        .json({ message: "Bad request: required name" });
    }

    if (!user.email) {
      return response
        .status(400)
        .json({ message: "Bad request: required email" });
    }

    this.userService.createUser(user.name, user.email);
    return response.status(201).json({ message: "User was created" });
  };

  deleteUser = (request: Request, response: Response) => {
    const user = request.body;

    if (!user.name) {
      return response.status(400).json({ message: "Bad request: required id" });
    }

    this.userService.deleteUser(user.name, user.email);
    return response.status(200).json({ message: "User has been deleted" });
  };

  getAllUsers = (request: Request, response: Response) => {
    const users = this.userService.getAllUsers();
    return response.status(200).json(users);
  };
}
