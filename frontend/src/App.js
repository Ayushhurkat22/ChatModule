// // src/App.js
// import React from 'react';
// import { ChatProvider } from './context/ChatContext';
// import ChatWindow from './components/ChatWindow';
// import ChatInput from './components/ChatInput';

// function App() {
//   return (
//     <ChatProvider>
//       <div className="flex flex-col h-screen bg-gray-900 text-white">
//         <h1 className="text-center text-3xl p-4 bg-gradient-to-r from-yellow-500 to-yellow-700 shadow-lg">
//           BHARAT GOLD ORNAMENTS
//         </h1>
//         <ChatWindow />
//         <ChatInput />
//       </div>
//     </ChatProvider>
//   );
// }

// export default App;

import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import ChatWindow from './components/ChatWindow';
import ChatInput from './components/ChatInput';
import Header from './components/Header'; 

function App() {
  return (
    <Provider store={store}>
      <div className="flex flex-col h-screen bg-gray-900 text-white">
        <Header />
        <ChatWindow />
        <ChatInput />
      </div>
    </Provider>
  );
}

export default App;

