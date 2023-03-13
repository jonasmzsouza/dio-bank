import { Request, Response } from "express";
import { UserService } from "../services/UserService";

export class UserController {
  userService: UserService;

  constructor(userService = new UserService()) {
    this.userService = userService;
  }

  createUser = (request: Request, response: Response) => {
    const user = request.body;

    if (!user.name || !user.email || !user.password) {
      return response
        .status(400)
        .json({ message: "Bad request: all fields are mandatory" });
    }

    this.userService.createUser(user.name, user.email, user.password);
    return response.status(201).json({ message: "User was created" });
  };

  deleteUser = (request: Request, response: Response) => {
    // const user = request.body;

    // if (!user.id_user) {
    //   return response.status(400).json({ message: "Bad request: all fields are mandatory" });
    // }

    // this.userService.deleteUser(user.name, user.email);
    return response.status(200).json({ message: "User has been deleted" });
  };

  getUser = (request: Request, response: Response) => {
    return response.status(200);
  };

  getAllUsers = (request: Request, response: Response) => {
    const users = this.userService.getAllUsers();
    return response.status(200).json(users);
  };
}
