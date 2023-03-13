import { UserService } from "./UserService";

jest.mock("../repositories/UserRepository");
jest.mock('../database', () => {
  initialize: jest.fn()
})

const mockUserRepository = require("../repositories/UserRepository");

describe("UserService", () => {
  const userService = new UserService(mockUserRepository);

  it("should add a new user", async () => {
    mockUserRepository.createUser = jest.fn().mockImplementation(() =>
      Promise.resolve({
        id_user: "123456",
        name: "Jonas",
        email: "jonas@email.com",
        password: "123456",
      })
    );
    const response = await userService.createUser(
      "Jonas",
      "jonas@email.com",
      "123456"
    );
    expect(mockUserRepository.createUser).toHaveBeenCalled();
    expect(response).toMatchObject({
      id_user: "123456",
      name: "Jonas",
      email: "jonas@email.com",
      password: "123456",
    });
  });
});
