import { User } from '../interfaces/user.interface';

export const createUser = async (user: User) => {
  await fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
};
