// // server.js
// const express = require('express');
// const cors = require('cors');

// const app = express();
// const PORT = 5000; // Define the port number

// // Enable CORS and parse JSON bodies
// app.use(cors());
// app.use(express.json());

// // Define a mock endpoint for AI responses
// app.post('/chat', (req, res) => {
//   const userMessage = req.body.message.toLowerCase();
//   let aiResponse = "I'm not sure about that. Can you please specify?";

//   // Mock responses based on user input
//   switch (userMessage) {
//     case 'hi':
//     case 'hello':
//       aiResponse = "Hello! How can I help you today?";
//       break;
//     case 'tell me about diamonds':
//     case 'tell me about diamonds.': // added this line to handle the period
//       aiResponse = "Diamonds are a girl's best friend! They are timeless and elegant.";
//       break;
//     case 'what about gold jewelry?':
//       aiResponse = "Gold jewelry is classic and versatile. It never goes out of style.";
//       break;
//     case 'can you tell me about silver?':
//       aiResponse = "Silver jewelry is a great choice for those who love a more understated look.";
//       break;
//     case 'bye':
//     case 'goodbye':
//       aiResponse = "Thank you for chatting! Have a great day!";
//       break;
//     default:
//       aiResponse = "I'm not sure about that. Can you please specify? or Please check for typo or punctuation marks!";
//   }

//   // Send the response back to the client
//   res.json({ response: aiResponse });
// });

// // Start the server and keep it running
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });


// server.js
const express = require('express');
const cors = require('cors');
const chatRoutes = require('./routes/chatRoutes');

const app = express();
const PORT = 5000; // Define the port number

// Enable CORS and parse JSON bodies
app.use(cors());
app.use(express.json());

// Use chat routes
app.use('/chat', chatRoutes);

// Start the server and keep it running
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
