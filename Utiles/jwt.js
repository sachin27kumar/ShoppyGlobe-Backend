import jwt from 'jsonwebtoken';

const SECRET_KEY = "your-secret-key"; 

export function generateToken(user) {
    return jwt.sign({ id: user._id, username: user.username }, SECRET_KEY, { expiresIn: '15m' });
}

export function verifyToken(token) {
    return jwt.verify(token, SECRET_KEY);
}
