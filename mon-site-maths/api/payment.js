import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Méthode non autorisée",
    });
  }

  try {
    const { amount, productName } = req.body;

    const response = await axios.post(
      "https://api-checkout.cinetpay.com/v2/payment",
      {
        apikey: process.env.CINETPAY_API_KEY,
        site_id: process.env.CINETPAY_SITE_ID,

        transaction_id: "TX-" + Date.now(),

        amount,
        currency: "XOF",

        description: productName,

        channels: "ALL",

        customer_name: "Étudiant",
        customer_surname: "2GE",

        customer_email:
          "student@2ge-learning.com",

        customer_phone_number:
          "90000000",

        customer_address: "Lome",
        customer_city: "Lome",
        customer_country: "TG",

        notify_url:
          "https://2ge-math151-site.vercel.app",

        return_url:
          "https://2ge-math151-site.vercel.app",
      }
    );

    return res.status(200).json(response.data);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Erreur création paiement",
    });
  }
}