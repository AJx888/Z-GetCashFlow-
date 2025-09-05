const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET);
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/cashflow', (req, res) => {
  res.json({
    netCashFlow: 17050,
    revenue: 45200,
    expenses: 28150
  });
});

app.post('/api/create-payment-intent', async (req, res) => {
  const { amount } = req.body;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount * 100,
    currency: 'usd',
  });
  res.send({ clientSecret: paymentIntent.client_secret });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
