import { User } from '../interfaces/user.interface';

interface CreateUser extends User {
  isActive: boolean;
}

export const createUser = async (user: CreateUser) => {
  await fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
};
