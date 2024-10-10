// // src/components/ChatWindow.js
// import React, { useContext } from 'react';
// import { ChatContext } from '../context/ChatContext';
// import MessageBubble from './MessageBubble';
// import backgroundVideo from '../assets/12355077_1920_1080_25fps.mp4'; // Import your video file

// const ChatWindow = () => {
//   const { state } = useContext(ChatContext);

//   return (
//     <div className="relative flex flex-col p-4 space-y-4 h-full overflow-auto">
//       <video
//         className="absolute top-0 left-0 w-full h-full object-cover opacity-50" // Styles for the video
//         autoPlay
//         loop
//         muted
//         playsInline
//         style={{ zIndex: 0 }} 
//       >
//         <source src={backgroundVideo} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <div style={{ zIndex: 10 }} className="relative"> {/* Ensures messages are above the video */}
//         {state.messages.map((message, index) => (
//           <MessageBubble key={index} sender={message.sender} message={message.message} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ChatWindow;

// src/components/ChatWindow.js
import React from 'react';
import { useSelector } from 'react-redux';
import MessageBubble from './MessageBubble';
import backgroundVideo from '../assets/12355077_1920_1080_25fps.mp4'; // Import your video file

const ChatWindow = () => {
  const messages = useSelector((state) => state.chat.messages);

  return (
    <div className="relative flex flex-col p-4 space-y-4 h-full overflow-auto">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-50" 
        autoPlay
        loop
        muted
        playsInline
        style={{ zIndex: 0 }} 
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div style={{ zIndex: 10 }} className="relative">
        {messages.map((message, index) => (
          <MessageBubble key={index} sender={message.sender} message={message.message} />
        ))}
      </div>
    </div>
  );
};

export default ChatWindow;
