import React from 'react';
import '../styles/MessageBubble.css'; 

const MessageBubble = ({ sender, message }) => {
  return (
    <div className={`message-bubble ${sender === 'user' ? 'user' : 'ai'} self-${sender === 'user' ? 'end' : 'start'}`}>
      {message}
    </div>
  );
};

export default MessageBubble;
