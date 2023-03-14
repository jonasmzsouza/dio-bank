import { EntityManager } from "typeorm";
import { User } from "../entitites/User";
import { getMockEntityManager } from "../__mocks__/mockEntityManager.mock";
import { UserRepository } from "./UserRepository";

describe("UserRepository", () => {
  let userRepository: UserRepository;
  let managerMock: Partial<EntityManager>;

  const mockUser: User = {
    id_user: "1",
    name: "user",
    email: "user@email.com",
    password: "123456",
  };

  beforeAll(async () => {
    managerMock = await getMockEntityManager({
      saveReturn: mockUser,
    });
    userRepository = new UserRepository(managerMock as EntityManager);
  });

  it("should register a new user in the database", async () => {
    const response = await userRepository.createUser(mockUser);
    expect(managerMock.save).toHaveBeenCalled();
    expect(response).toMatchObject(mockUser);
  });
});
