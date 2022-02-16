import express from 'express';
import bodyParser from 'body-parser';

//Initialize the express application
const app = express();

const PORT = 5000;

//Initialize body-parser middleware
app.use(bodyParser.json());

app.listen(PORT, () => console.log(`Listening to PORT - ${PORT}`));


