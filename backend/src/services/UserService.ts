export interface User {
  name: string;
  email: string;
}

const db = [
  {
    name: "Maria",
    email: "maria@email.com",
  },
];

export class UserService {
  db: User[];

  constructor(database = db) {
    this.db = database;
  }

  createUser = (name: string, email: string) => {
    const user = {
      name,
      email,
    };
    this.db.push(user);
    console.log("DB", this.db);
  };

  deleteUser = (name: string, email: string) => {
    const user = {
      name,
      email,
    };
    let userIndex = this.db.indexOf(user);
    this.db.slice(userIndex, userIndex);
    console.log("DB", this.db);
  };

  getAllUsers = () => {
    return this.db;
  };
}
