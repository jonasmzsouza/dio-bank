import { login } from "./login";

describe("login", () => {
  const mockEmail = "user@email.com";
  const mockPassword = "123456";

  it("should display a welcome alert when email and password is valid", async () => {
    const response = await login(mockEmail, mockPassword);
    expect(response).toBeTruthy();
  });

  it("should display error when email or password is invalid", async () => {
    const response = await login("email@invalid.com", "123456");
    expect(response).toBeFalsy();
  });
});
