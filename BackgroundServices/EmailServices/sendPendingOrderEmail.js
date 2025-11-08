import ejs from "ejs";
import dotenv from "dotenv";
import sendMail from "../helpers/sendMail.js";
import Product from "../models/product.model.js";
import User from "../models/user.model.js";

dotenv.config();

const renderTemplate = (filePath, data) => {
  return new Promise((resolve, reject) => {
    ejs.renderFile(filePath, data, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};

const sendPromotionalEmail = async () => {
  const users = await User.find();
  const products = await Product.aggregate([{ $sample: { size: 5 } }]);

  if (products.length > 0) {
    for (let user of users) {
      try {
        const html = await renderTemplate("template/promotion.ejs", { products });
        const messageOption = {
          from: process.env.EMAIL,
          to: user.email,
          subject: "Products for the month",
          html,
        };
        await sendMail(messageOption);
      } catch (err) {
        console.log("Error sending email:", err);
      }
    }
  }
};

export default sendPromotionalEmail;
