// 404 Error Handler Middleware
const notFoundHandler = (req, res, next) => {
  const error = new Error(`Route not found - ${req.originalUrl}`);
  error.statusCode = 404;
  next(error);
};

// Global Error Handler Middleware
const errorHandler = (err, req, res, next) => {
  // Log the error for debugging
  console.error('Error:', err.message);
  console.error('Stack:', err.stack);

  // Set default status code
  const statusCode = err.statusCode || err.status || 500;
  
  // Set default error message
  const message = err.message || 'Internal Server Error';

  // Send error response
  res.status(statusCode).json({
    success: false,
    error: {
      message: message,
      // Only include stack trace in development
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    }
  });
};



module.exports = { notFoundHandler, errorHandler };