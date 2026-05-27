import "dotenv/config"
import Stripe from "stripe";

const stripe = new Stripe(process.env.SECRET_KEY);

export async function paymentController(req, res) {
  try {
    const { amount } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,
      currency: "usd",
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
}