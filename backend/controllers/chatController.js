// controllers/chatController.js
const ChatModel = require('../models/chatModel');

const chatController = {
  handleChat: (req, res) => {
    const userMessage = req.body.message;
    const aiResponse = ChatModel.getResponse(userMessage);

    res.json({ response: aiResponse });
  }
};

module.exports = chatController;
