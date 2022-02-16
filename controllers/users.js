import { v4 as uuidv4 } from 'uuid';

let users = [];

export const getUsers = (req, res) => {
  res.send(users);
};

export const createUsers = (req, res) => {
  const user = req.body;
  const userID = uuidv4();
  const userWithId = { ...user, id: userID };
  users.push(userWithId);
  res.send(`New user with the name ${user.firstName} ${user.lastName} has been added.`);
};

export const getID = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id)
  res.send(foundUser);
};

export const deleteById = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(`User with ID ${id} has been deleted.`);
};

export const editById = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  const user = users.find((user) => user.id === id)

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;

  res.send(`User with ID ${id} has been update.`)
};
