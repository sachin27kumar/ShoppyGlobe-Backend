ShoppyGlobe Backend
The backend service for the **ShoppyGlobe** e-commerce application. This project manages user authentication, product
information, cart functionalities, and other e-commerce-related services. Built using **Node.js**, **Express**, and
**MongoDB**, it provides APIs for the ShoppyGlobe frontend.
---
## Features
- **User Authentication**: Register and login with secure password hashing.
- **Product Management**: Add, fetch, and view product details.
- **Cart Management**: Add, update, and remove items from the cart.
- **Middleware**: Authentication middleware for protected routes.
- **RESTful APIs**: CRUD operations for seamless integration with frontend.
---
## Installation
1. Clone the repository:
```bash
git clone https://github.com/your-username/ShoppyGlobe-Backend.git
```
2. Navigate to the project directory:
```bash
cd ShoppyGlobe-Backend
```
3. Install dependencies:
```bash

npm install
```
4. Create a `.env` file in the root directory and configure your environment variables:
```env
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-jwt-secret
PORT=5000
```
5. Start the development server:
```bash
npm start
```
---
## API Endpoints
### Authentication Routes
| Method | Endpoint | Description |
|--------|-------------------|-------------------------|
| POST | `/api/register` | Register a new user |
| POST | `/api/login` | Login with credentials |
### Product Routes
| Method | Endpoint | Description |
|--------|------------------------|---------------------------------|
| POST | `/api/product` | Add a new product |
| GET | `/api/products` | Fetch all products |
| GET | `/api/products/:id` | Fetch product details by ID |

### Cart Routes (Protected)
| Method | Endpoint | Description |
|--------|------------------|------------------------------------|
| POST | `/api/cart` | Add an item to the cart |
| PUT | `/api/cart/:id` | Update an item in the cart |
| DELETE | `/api/cart/:id` | Remove an item from the cart |
---
## Project Structure
```
ShoppyGlobe-Backend/
■■■ controllers/
■ ■■■ auth.controller.js
■ ■■■ cart.controller.js
■ ■■■ products.controller.js
■■■ middlewares/
■ ■■■ authMiddleware.js
■■■ models/
■ ■■■ product.model.js
■■■ routes/
■ ■■■ auth.routes.js
■ ■■■ cart.routes.js
■ ■■■ products.routes.js
■■■ Server.js
■■■ package.json
■■■ .env
```
---

## Technologies Used
- **Node.js**: Runtime environment for building server-side applications.
- **Express.js**: Web framework for creating RESTful APIs.
- **MongoDB**: Database for storing product, cart, and user data.
- **Mongoose**: ODM library for MongoDB and Node.js.
- **JWT**: Authentication using JSON Web Tokens.
- **Nodemon**: Development tool for auto-restarting the server on changes.
---
## How to Contribute
1. Fork the repository.
2. Create a new branch:
```bash
git checkout -b feature-name
```
3. Make your changes and commit:
```bash
git commit -m "Add new feature"
```
4. Push to your branch:
```bash
git push origin feature-name
```
5. Create a Pull Request on GitHub.
---
## License

This project is licensed under the [MIT License](LICENSE).
---
## Contact
For any queries or issues, feel free to reach out at sachin27sheoran@gmail.com.
