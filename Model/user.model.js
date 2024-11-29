import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // plaintext for simplicity
});

const User = mongoose.model('User', userSchema);
export default User;
