// server.js
const express = require('express');
const cors = require('cors');
const chatRoutes = require('./routes/chatRoutes');

const app = express();
const PORT = 5000;

const cors = require('cors');
app.use(cors());
app.use(cors({
  origin: 'https://chat-module-frontend.vercel.app/'
}));
app.use(express.json());

app.use('/chat', chatRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
