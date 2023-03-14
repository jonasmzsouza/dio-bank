import { UserService } from "./UserService";
import * as jwt from "jsonwebtoken";

jest.mock("../repositories/UserRepository");
jest.mock("../database", () => {
  initialize: jest.fn();
});
jest.mock("jsonwebtoken");

const mockUserRepository = require("../repositories/UserRepository");

describe("UserService", () => {
  const userService = new UserService(mockUserRepository);
  const mockUser = {
    id_user: "123456",
    name: "user",
    email: "user@email.com",
    password: "123456",
  };

  it("should add a new user", async () => {
    mockUserRepository.createUser = jest
      .fn()
      .mockImplementation(() => Promise.resolve(mockUser));
    const response = await userService.createUser(
      "user",
      "user@email.com",
      "123456"
    );
    expect(mockUserRepository.createUser).toHaveBeenCalled();
    expect(response).toMatchObject(mockUser);
  });

  it("should return a user token", async () => {
    jest
      .spyOn(userService, "getAuthenticatedUser")
      .mockImplementation(() => Promise.resolve(mockUser));
    jest.spyOn(jwt, "sign").mockImplementation(() => "token");
    const token = await userService.getToken("user@email.com", "123456");
    expect(token).toBe("token");
  });

  it("should return an error if the user is not found", async () => {
    jest
      .spyOn(userService, "getAuthenticatedUser")
      .mockImplementation(() => Promise.resolve(null));
    await expect(
      userService.getToken("invalid@email.com", "123456")
    ).rejects.toThrowError(new Error("Email/password invalid!"));
  });
});
