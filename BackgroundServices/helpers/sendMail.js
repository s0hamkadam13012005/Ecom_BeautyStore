import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();


// Create a single reusable transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  requireTLS: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

const sendMail = async (messageOption) => {
  try {
    await transporter.verify();
    const info = await transporter.sendMail(messageOption);
    console.log("✅ Email sent successfully:", info.response);
  } catch (err) {
    console.error("❌ Error sending email:", err);
  }
};

export default sendMail;
