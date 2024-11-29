import { verifyToken } from "../Utiles/jwt.js";

export function authenticate(req, res, next) {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        const decoded = verifyToken(token);
        req.user = decoded; // Attach the decoded user info to the request object
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid or expired token' });
    }
}
