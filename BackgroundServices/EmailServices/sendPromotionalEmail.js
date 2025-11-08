import ejs from "ejs";
import dotenv from "dotenv";
import sendMail from "../helpers/sendMail.js";
import Product from "../models/product.model.js";
import User from "../models/user.model.js";

dotenv.config();

const sendPromotionalEmail = async () => {
  try {
    const users = await User.find();
    const products = await Product.aggregate([{ $sample: { size: 5 } }]);

    if (products.length === 0) {
      console.log("⚠️ No products found for promotion.");
      return;
    }

    for (let user of users) {
      ejs.renderFile(
        "templates/promotion.ejs",
        { products },
        async (err, data) => {
          if (err) {
            console.log("❌ EJS Render Error:", err);
            return;
          }

          const messageOption = {
            from: process.env.EMAIL,
            to: user.email,
            subject: "Products for the month",
            html: data,
          };

          try {
            await sendMail(messageOption);
            console.log(`✅ Sent promo email to ${user.email}`);
          } catch (error) {
            console.log("❌ Email send error:", error);
          }
        }
      );
    }
  } catch (error) {
    console.log("❌ Error in sendPromotionalEmail:", error);
  }
};

export default sendPromotionalEmail;
