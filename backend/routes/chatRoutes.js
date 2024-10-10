// routes/chatRoutes.js
const express = require('express');
const chatController = require('../controllers/chatController');

const router = express.Router();

// Define the chat endpoint
router.post('/', chatController.handleChat);

module.exports = router;
