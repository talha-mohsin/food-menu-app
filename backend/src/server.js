import express from "express";
import cors from "cors";
import Stripe from "stripe";
import { paymentController } from "./controller/payment.js";
import "dotenv/config"

const app = express();

app.use(cors());
app.use(express.json());


app.post("/payment", paymentController);

app.listen(5000, () => {
  console.log("Server running");
});
