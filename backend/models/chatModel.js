// models/chatModel.js
const fs = require('fs');
const path = require('path');

class ChatModel {
  static logToFile(message) {
    const logMessage = `${new Date().toISOString()} - ${message}\n`;
    const logFilePath = path.join(__dirname, 'log.txt');

    // Append the log message to the log.txt file
    fs.appendFile(logFilePath, logMessage, (err) => {
      if (err) {
        console.error('Error writing to log file:', err);
      }
    });
  }

  static getResponse(userMessage) {
    let aiResponse = "I'm not sure about that. Can you please specify?";

    switch (userMessage.toLowerCase()) {
      case 'hi':
      case 'hello':
        aiResponse = "Hello! How can I help you today?";
        break;
      case 'tell me about diamonds':
      case 'tell me about diamonds.':
        aiResponse = "Diamonds are a girl's best friend! They are timeless and elegant.";
        break;
      case 'what about gold jewelry?':
        aiResponse = "Gold jewelry is classic and versatile. It never goes out of style.";
        break;
      case 'can you tell me about silver?':
        aiResponse = "Silver jewelry is a great choice for those who love a more understated look.";
        break;
      case 'bye':
      case 'goodbye':
        aiResponse = "Thank you for chatting! Have a great day!";
        break;
      default:
        aiResponse = "I'm not sure about that. Can you please specify? or Please check for typo or punctuation marks!";
    }

    // Log the user message and AI response
    this.logToFile(`User: ${userMessage} | AI: ${aiResponse}`);

    return aiResponse;
  }
}

module.exports = ChatModel;
