import { User, UserService } from "./UserService";

describe("UserService", () => {
  const mockDb: User[] = [];
  const userService = new UserService(mockDb);

  it("deve adicionar um novo usuário", () => {
    const mockConsole = jest.spyOn(global.console, "log");
    userService.createUser("Jonas", "jonas@email.com");
    expect(mockConsole).toHaveBeenCalledWith("DB", mockDb);
  });
});
