// controllers/chatController.js
const ChatModel = require('../models/chatModel');

const chatController = {
  handleChat: (req, res) => {
    const userMessage = req.body.message;
    const aiResponse = ChatModel.getResponse(userMessage);

    // Send the response back to the client
    res.json({ response: aiResponse });
  }
};

module.exports = chatController;
