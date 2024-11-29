import User from "../Model/user.model.js";
import { generateToken } from "../Utiles/jwt.js";

export async function register(req, res) {
    try {
        const { username, password } = req.body;

        // Check if the user already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username already taken' });
        }

        // Create and save the new user
        const newUser = new User({ username, password });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export async function login(req, res) {
    try {
        const { username, password } = req.body;

        // Validate user credentials
        const user = await User.findOne({ username });
        if (!user || user.password !== password) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // Generate a JWT token
        const token = generateToken(user);

        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
