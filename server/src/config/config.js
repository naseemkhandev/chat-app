import dotenv from "dotenv";
dotenv.config();

const _config = {
  port: process.env.PORT || 8080,
  mongoUri: process.env.MONGO_URI,
  env: process.env.NODE_ENV,
  clientUrl: process.env.CLIENT_URL,
  jwtSecret: process.env.JWT_SECRET,
};

export const config = Object.freeze(_config);
