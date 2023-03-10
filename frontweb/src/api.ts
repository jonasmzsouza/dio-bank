const account = {
  email: "user@email.com",
  password: "123456",
  name: "User",
  balance: 2000.0,
  id: "1",
};

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(account);
  }, 3000);
});
