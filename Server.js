require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3001; // Use environment variable or default

app.use(express.json()); // Use built-in middleware
app.use(cors());

console.log(process.env); // Be careful with this as it will print all environment variables

console.log(process.env.EMAIL_USER, process.env.EMAIL_PASS);

const fs = require('fs');
const path = require('path');
const envPath = path.join(__dirname, '..', '.env'); // Adjust the path as necessary
fs.readFile(envPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading .env file', err);
  } else {
    console.log('.env content:', data);
  }
});

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;
  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER, // Send to your own email
    subject: 'New Contact Form Submission',
    html: `<p>You have a new submission with the following details:</p><ul><li>Name: ${name}</li><li>Email: ${email}</li><li>Message: ${message}</li></ul>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Send Mail Error:', error);
      return res.status(500).send({ message: 'Error sending email', error });
    }
    res.status(200).send({ message: 'Email successfully sent', info });
  });
});

app.get('/api/reviews', async (req, res) => {
  const placeId = "YOUR_PLACE_ID"; // Replace with your place ID
  const apiKey = process.env.GOOGLE_API_KEY; // Store your API key in .env
  const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&fields=reviews&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    res.json(response.data.result.reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).send({ message: 'Error fetching reviews', error });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
