import { UserController } from "./UserController";
import { UserService } from "../services/UserService";
import { Request } from "express";
import { makeMockResponse } from "../__mocks__/mockResponse.mock";

describe("UserController", () => {
  const mockUserService: Partial<UserService> = {
    createUser: jest.fn(),
    getAllUsers: jest.fn(),
    deleteUser: jest.fn(),
  };
  const userController = new UserController(mockUserService as UserService);

  it("deve adicionar um novo usuário", () => {
    const mockRequest = {
      body: {
        name: "Jonas",
        email: "jonas@email.com",
      },
    } as Request;
    const mockReponse = makeMockResponse();
    userController.createUser(mockRequest, mockReponse);
    expect(mockReponse.state.status).toBe(201);
    expect(mockReponse.state.json).toMatchObject({ message: "User was created" });
  });

  it("deve retornar uma resposta de erro caso o usuario não informe o nome", () => {
    const mockRequest = {
      body: {
        name: "",
        email: "jonas@email.com",
      },
    } as Request;
    const mockReponse = makeMockResponse();
    userController.createUser(mockRequest, mockReponse);
    expect(mockReponse.state.status).toBe(400);
    expect(mockReponse.state.json).toMatchObject({
      message: "Bad request: required name",
    });
  });

  it("deve retornar uma resposta de erro caso o usuario não informe o email", () => {
    const mockRequest = {
      body: {
        name: "Jonas",
        email: "",
      },
    } as Request;
    const mockReponse = makeMockResponse();
    userController.createUser(mockRequest, mockReponse);
    expect(mockReponse.state.status).toBe(400);
    expect(mockReponse.state.json).toMatchObject({
      message: "Bad request: required email",
    });
  });

  it("deve verificar se função getAllUsers está sendo chamada", () => {
    const mockRequest = {} as Request;
    const mockReponse = makeMockResponse();
    userController.getAllUsers(mockRequest, mockReponse);
    expect(mockReponse.state.status).toBe(200);
  });

  it("deve deletar um usuário", () => {
    const mockRequest = {
      body: {
        name: "Jonas",
        email: "jonas@email.com",
      },
    } as Request;
    const mockReponse = makeMockResponse();
    userController.deleteUser(mockRequest, mockReponse);
    expect(mockReponse.state.status).toBe(200);
    expect(mockReponse.state.json).toMatchObject({ message: "User has been deleted" });
  });
});
