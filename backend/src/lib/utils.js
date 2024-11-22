import jwt from "jsonwebtoken";
 export const generateAuthToken = (userId) => {
  const secret = process.env.ACCESS_TOKEN_SECRET; // Store your secret key in environment variables
  if (!secret) {
    throw new Error("JWT secret key is not set");
  }
  const token = jwt.sign({ _id: userId }, secret, { expiresIn: "1h" });
  return token;
};
