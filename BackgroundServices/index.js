import express from 'express';
import dotenv from 'dotenv';
import cron from 'node-cron';
import dbConnection from './utils/db.js';
import sendWelcomeEmail from './EmailServices/sendWelcomeEmail.js';
import sendPendingOrderEmail from './EmailServices/sendPendingOrderEmail.js';
import sendDeliveredOrderEmail from './EmailServices/sendDeliveredOrderEmail.js';
import sendPromotionalEmail from './EmailServices/sendPromotionalEmail.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Define your background job scheduler
const services = () => {
  // Runs every second — adjust timing if needed
  cron.schedule('* * * * * *', async () => {
    console.log('⏰ Running scheduled tasks...');
    await sendWelcomeEmail();
    await sendPendingOrderEmail();
    await sendDeliveredOrderEmail();
  });
};

const promotion = () =>{
  cron.schedule('30 5  * * 5 ',() => {
    sendPromotionEmail();
  })
}



// Start services + connect DB
services();

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  dbConnection();
});
