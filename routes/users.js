import route from 'color-convert/route';
import express from 'express';
import { v4 as uuidv4 } from 'uuid';

//Initialize Router
const router = express.Router();

const users = [
  // {
  //   firstName: "Erick",
  //   lastName: "Nuke",
  //   age: 41
  // },

  // {
  //   firstName: "Apple",
  //   lastName: "Nuke",
  //   age: 41
  // }
]


router.get('/', (req, res) => {


  res.send(users);
})



//Adding the users to the database
router.post('/', (req, res) => {


  const user = req.body;

  const userID = uuidv4();

  const userWithId = { ...user, id: userID };
  // console.log(req.body);
  users.push(userWithId);

  //This will send message to the users
  res.send(`New user with the name ${user.firstName} ${user.lastName} is added.`);

});

//: means can expext anything
// router.get('/:id', (req, res) => {

//   const { id } = req.params;

//   const foundUser = users.find((user) => user.id === id)
//   res.send(foundUser);
// })

// route.delete('./:id', (req, res) => {
//   const { id } = req.params;

//   users = users.filter((user) => user.id !== id);

//   res.send(`User with ID ${id} has been deleted.`);

// })

export default router;