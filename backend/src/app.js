// App configuration part
const express = require("express");
const cors = require("cors");
const taskRoutes = require("./routes/tasks.routes");
const { errorHandler, notFoundHandler } = require("./errorHandler");

const app = express();

app.use(cors());
app.use(express.json());

// Health check endpoint 
app.get("/", (req, res) => {
  res.json({ message: "Task Manager API is running" });
});

app.use("/api/tasks", taskRoutes);

// 404 handler
app.use(notFoundHandler);

// Global error handler
app.use(errorHandler);

module.exports = app;
