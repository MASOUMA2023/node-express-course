const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()


// Middleware to authenticate token
const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];  // Extract token from "Bearer token"
  
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  
    // Verify the token
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;  // Store user data in req.user
      next();  // Call the next middleware or route handler
    } catch (error) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  };
  
  module.exports = { authenticateToken };