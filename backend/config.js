import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: process.env.PORT,
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb+srv://testinguser:testinguser@rest-x74aa.mongodb.net/amazon?retryWrites=true&w=majority',
  JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret',
  PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || 'sb',
};
