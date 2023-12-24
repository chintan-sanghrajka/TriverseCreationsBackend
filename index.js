import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRouter from "./router/contact.router";

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log("Listening on port: ", PORT);
});

app.use(contactRouter);
