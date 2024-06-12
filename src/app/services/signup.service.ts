import { User } from '../interfaces/user.interface';

export const createUser = async (user: User) => {
  //On signup setting the isLoggedIn to false
  user.isLoggedIn = false;


  await fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
};
