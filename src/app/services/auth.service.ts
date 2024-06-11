import { User } from '../interfaces/user.interface';

const getUsers = async () => {
  const data = await fetch('http://localhost:3000/users');
  const users: User[] = await data.json();

  return users;
};

export const authenticateUser = async (user: {
  username: string;
  password: string;
}): Promise<{
  isAuthenticated: boolean;
  user?: User;
}> => {
  const users = await getUsers();

  const obj = users.find(
    (u) => user.username === u.username && user.password === u.password
  );

  if (!obj)
    return {
      isAuthenticated: false,
    };

  return {
    isAuthenticated: true,
    user: obj,
  };
};
