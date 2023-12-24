import express from "express";
import { sendEmail } from "./../controller/contact.controller.js";

const contactRouter = express.Router();

contactRouter.post("/contact-us-mail", sendEmail);

export default contactRouter;
