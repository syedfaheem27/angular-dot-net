interface users {
  username: string;
  password: string;
  role: string;
}

const getUsers = async () => {
  const data = await fetch('http://localhost:3000/users');
  const users: users[] = await data.json();

  return users;
};

export const authenticateUser = async (user: {
  username: string;
  password: string;
}): Promise<boolean> => {
  const users = await getUsers();

  const obj = users.find(
    (u) => user.username === u.username && user.password === u.password
  );

  if (!obj) return false;

  return true;
};