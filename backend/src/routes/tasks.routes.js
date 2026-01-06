// API endpoints for task management
const express = require("express");
const router = express.Router();
const controller = require("../controllers/tasks.controller");

router.get("/", controller.getTasks);
router.post("/", controller.createTask);
router.patch("/:id/complete", controller.markCompleted);

module.exports = router;
