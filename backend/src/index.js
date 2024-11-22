import express from "express";
import authRoutes from "./routes/auth.route.js";
import connectDB from "./db/index.db.js";
const app = express();
import dotenv from "dotenv"
const PORT = process.env.PORT || 3002;  
dotenv.config({
  path: "./.env",
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.get('/',(req,res)=>{
  res.send("Hello world in root")
})
connectDB();
app.listen(process.env.PORT, () => {
  console.log("Server is running on port",process.env.PORT);
});
