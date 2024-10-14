const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51Q3dVi015cpWcgpjP6s4YnvLPw97EIdRk8sh4ynUw0bxlf4Z3m0KnKL4ER0tgrlBBDJ0Z5T37dlyOZaar5qNqggL00TiaBCGbk"
);

//- API

//- APP Config
const app = express();

//- Middlewares
app.use(cors({ orgin: true }));
app.use(express.json());

// - API Routes
app.get("/", (req, res) => res.status(200).send("Hello World!"));

app.post("payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("Payment request received", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "zar",
  });
  //If okay created
  res.status(201).send({ clientSecret: paymentIntent.client_secret });
});

// - Listen Commands
exports.api = functions.https.onRequest(app);
