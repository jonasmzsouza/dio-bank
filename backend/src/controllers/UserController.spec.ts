import { UserController } from "./UserController";
import { Request } from "express";
import { makeMockResponse } from "../__mocks__/mockResponse.mock";
import { makeMockRequest } from "../__mocks__/mockRequest.mock";

const mockUserService = {
  createUser: jest.fn(),
  getUser: jest.fn(),
};

jest.mock("../services/UserService", () => {
  return {
    UserService: jest.fn().mockImplementationOnce(() => {
      return mockUserService;
    }),
  };
});

describe("UserController", () => {
  const userController = new UserController();
  const mockResponse = makeMockResponse();

  it("should add a new user", () => {
    const mockRequest = {
      body: {
        name: "user",
        email: "user@email.com",
        password: "123456",
      },
    } as Request;
    userController.createUser(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(201);
    expect(mockResponse.state.json).toMatchObject({
      message: "User was created",
    });
  });

  it("should return an error response if the user does not provide the name ", () => {
    const mockRequest = {
      body: {
        name: "user",
        email: "",
        password: "123456",
      },
    } as Request;
    userController.createUser(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(400);
    expect(mockResponse.state.json).toMatchObject({
      message: "Bad request: all fields are mandatory",
    });
  });

  it("should return an error response if the user does not provide the email address", () => {
    const mockRequest = {
      body: {
        name: "",
        email: "user@email.com",
        password: "123456",
      },
    } as Request;
    userController.createUser(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(400);
    expect(mockResponse.state.json).toMatchObject({
      message: "Bad request: all fields are mandatory",
    });
  });

  it("should return an error response if the user does not provide the password", () => {
    const mockRequest = {
      body: {
        name: "user",
        email: "user@email.com",
        password: "",
      },
    } as Request;
    userController.createUser(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(400);
    expect(mockResponse.state.json).toMatchObject({
      message: "Bad request: all fields are mandatory",
    });
  });

  it("should delete a user", () => {
    const mockRequest = {
      body: {
        name: "user",
        email: "user@email.com",
      },
    } as Request;
    userController.deleteUser(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(200);
    expect(mockResponse.state.json).toMatchObject({
      message: "User has been deleted",
    });
  });

  it("should return the user when informing the userId", () => {
    const mockRequest = makeMockRequest({
      params: {
        userId: "123456",
      },
    });
    userController.getUser(mockRequest, mockResponse);
    expect(mockUserService.getUser).toHaveBeenCalledWith("123456");
    expect(mockResponse.state.status).toBe(200);
  });
});
