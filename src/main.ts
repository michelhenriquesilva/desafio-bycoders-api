import cors from "cors";
import * as dotenv from "dotenv";
import express from 'express';
import fileUpload from 'express-fileupload';
import routes from './routes'

dotenv.config()

const app = express();
const port = 9000;

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(fileUpload())
app.use(cors())

app.use(routes);

app.listen(port, () => {
  return console.log(`Servidor is running at http://localhost:${port}`);
});