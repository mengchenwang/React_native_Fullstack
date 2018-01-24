import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import router from './router';

const app = express();

app.use(bodyParser.json())
   .use(morgan('combined'))
   .use('/v1', router);

const port = process.env.PORT || 3001;

const server = app.listen(port, () => {
  console.log(`Listening at: ${port}`);
});
