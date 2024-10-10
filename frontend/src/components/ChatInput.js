// import React, { useState, useContext } from 'react';
// import { ChatContext } from '../context/ChatContext';
// import axios from 'axios';

// const ChatInput = () => {
//   const [input, setInput] = useState('');
//   const { dispatch } = useContext(ChatContext);

//   const handleSendMessage = async () => {
//     if (input.trim() === '') return;

//     // Dispatch the user message
//     dispatch({ type: 'ADD_MESSAGE', payload: { sender: 'user', message: input } });

//     // Call the backend API for AI response
//     try {
//       const response = await axios.post('http://localhost:5000/chat', { message: input });
//       const aiMessage = response.data.response;

//       // Dispatch the AI message
//       dispatch({ type: 'ADD_MESSAGE', payload: { sender: 'ai', message: aiMessage } });
//     } catch (error) {
//       console.error('Failed to fetch AI response:', error);
//     }

//     setInput(''); // Clear the input
//   };

//   return (
//     <div className="flex items-center p-4 border-t border-gray-700 bg-gray-800">
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         className="flex-grow p-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-900 text-white"
//         placeholder="Type your message here..."
//       />
//       <button
//         onClick={handleSendMessage}
//         className="ml-4 p-2 bg-yellow-500 text-black rounded-md hover:bg-yellow-600 transition duration-200"
//       >
//         Send
//       </button>
//     </div>
//   );
// };

// export default ChatInput;


// src/components/ChatInput.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addMessage } from '../redux/chatSlice';

const ChatInput = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSendMessage = async () => {
    if (input.trim() === '') return;

    dispatch(addMessage({ sender: 'user', message: input }));

    try {
      const response = await axios.post('http://localhost:5000/chat', { message: input });
      const aiMessage = response.data.response;

      dispatch(addMessage({ sender: 'ai', message: aiMessage }));
    } catch (error) {
      console.error('Failed to fetch AI response:', error);
    }

    setInput(''); 
  };

  return (
    <div className="flex items-center p-4 border-t border-gray-700 bg-gray-800">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-grow p-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-900 text-white"
        placeholder="Type your message here..."
      />
      <button
        onClick={handleSendMessage}
        className="ml-4 p-2 bg-yellow-500 text-black rounded-md hover:bg-yellow-600 transition duration-200"
      >
        Send
      </button>
    </div>
  );
};

export default ChatInput;
