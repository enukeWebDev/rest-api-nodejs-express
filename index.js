import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';

//Initialize the express application
const app = express();

const PORT = 5000;

//Initialize body-parser middleware
app.use(bodyParser.json());

app.use('/users', usersRoutes);

//Usually use for Home Page
app.get('/', (req, res) => {
  res.send('Homepage');
})

app.listen(PORT, () => console.log(`Listening to PORT - ${PORT}`));


