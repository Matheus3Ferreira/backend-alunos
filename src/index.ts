import "reflect-metadata";
import { createConnection } from 'typeorm'
import * as express from "express";
import routes from "./routes";

const app = express()
createConnection()

app.use(express.json())
app.use(routes)

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`)
})