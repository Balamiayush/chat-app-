import { generateAuthToken } from "../lib/utils.js";
import User from "../models/users.models.js";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
  const { fullName, password, email } = req.body;
  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create the new user
    const newUser = new User({ fullName, password: hashedPassword, email });

    // Save the user to the database
    await newUser.save();

    // Generate the token and set it in the response and cookie
    const token = await generateAuthToken(newUser._id, res);

    // Send success response with user ID and token
    res.json({ msg: "User registered successfully", _id: newUser._id, token });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // Compare the provided password with the stored hashed password
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // Generate a token and set it in the response and cookie
    const token = await generateAuthToken(user._id, res);

    // Send success response with user ID and token
    res.json({ msg: "User logged in successfully", _id: user._id, token });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error during login");
  }
};

export const logout = (req, res) => {
  try {
    res.status(200).json(req.user);
    
  } catch (error) {
    console.log("Error in checkAuth controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
