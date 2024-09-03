
import React, { useState } from 'react';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    setMessages([...messages, { text: input, sender: 'user' }]);
    setInput('');
    
    // Simulate a bot reply
    setTimeout(() => {
      setMessages(prev => [...prev, { text: "I'm here to help!", sender: 'bot' }]);
    }, 1000);
  };

  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px', width: '300px', background: 'white', border: '1px solid #ccc', borderRadius: '5px' }}>
      <div style={{ height: '200px', overflowY: 'scroll', padding: '10px' }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
            <strong>{msg.sender === 'user' ? 'You' : 'Bot'}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default ChatBot;