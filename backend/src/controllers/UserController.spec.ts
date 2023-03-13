import { UserController } from "./UserController";
import { Request } from "express";
import { makeMockResponse } from "../__mocks__/mockResponse.mock";

const mockUserService = {
  createUser: jest.fn(),
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

  it("should add a new user", () => {
    const mockRequest = {
      body: {
        name: "Jonas",
        email: "jonas@email.com",
        password: "123456",
      },
    } as Request;
    const mockResponse = makeMockResponse();
    userController.createUser(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(201);
    expect(mockResponse.state.json).toMatchObject({
      message: "User was created",
    });
  });

  it("should return an error response if the user does not provide the name ", () => {
    const mockRequest = {
      body: {
        name: "Jonas",
        email: "",
        password: "123456",
      },
    } as Request;
    const mockResponse = makeMockResponse();
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
        email: "jonas@email.com",
        password: "123456",
      },
    } as Request;
    const mockResponse = makeMockResponse();
    userController.createUser(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(400);
    expect(mockResponse.state.json).toMatchObject({
      message: "Bad request: all fields are mandatory",
    });
  });

  it("should return an error response if the user does not provide the password", () => {
    const mockRequest = {
      body: {
        name: "Jonas",
        email: "jonas@email.com",
        password: "",
      },
    } as Request;
    const mockResponse = makeMockResponse();
    userController.createUser(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(400);
    expect(mockResponse.state.json).toMatchObject({
      message: "Bad request: all fields are mandatory",
    });
  });

  it("should delete a user", () => {
    const mockRequest = {
      body: {
        name: "Jonas",
        email: "jonas@email.com",
      },
    } as Request;
    const mockResponse = makeMockResponse();
    userController.deleteUser(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(200);
    expect(mockResponse.state.json).toMatchObject({
      message: "User has been deleted",
    });
  });
});
