import { useState } from 'preact/hooks';
import {
  PaperClipIcon,
  FaceSmileIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/24/outline';

const IconWrapper = ({ icon }) => (
  <span className='material-icons w-6 h-6'>{icon}</span>
);

const ChatMessages = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'user',
      content: 'Hello, I need help with my account.',
      timestamp: '2:30 PM',
    },
    {
      id: 2,
      sender: 'agent',
      content:
        "Hi there! I'd be happy to assist you. What seems to be the issue?', timestamp: '2:32 PM",
    },
    // Add more mock messages here
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: 'user',
        content: message,
        timestamp: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
      };
      setMessages([...messages, newMessage]);
      setMessage('');

      // Simulate bot response
      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          sender: 'agent',
          content: message, // Echo the user's message
          timestamp: new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          }),
        };
        setMessages((prevMessages) => [...prevMessages, botResponse]);
      }, 1000);
    }
  };

  return (
    <div className='flex-1 flex flex-col'>
      {/* Chat header */}
      <div className='p-4 border-b border-gray-200'>
        <div className='flex items-center'>
          <div className='w-10 h-10 bg-gray-300 rounded-full mr-3'></div>
          <div>
            <h2 className='font-semibold'>John Doe</h2>
            <p className='text-sm text-gray-500'>Online</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className='flex-1 overflow-y-auto p-4 space-y-4'>
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs lg:max-w-md xl:max-w-lg px-4 py-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              <p>{msg.content}</p>
              <span className='text-xs text-gray-400 mt-1 block'>
                {msg.timestamp}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Message input */}
      <div className='p-4 border-t border-gray-200'>
        <div className='flex items-center'>
          <button className='text-gray-500 hover:text-gray-700 mr-2'>
            <IconWrapper icon='attach_file' />
          </button>
          <input
            type='text'
            placeholder='Type a message...'
            className='flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <button className='text-gray-500 hover:text-gray-700 mx-2'>
            <IconWrapper icon='sentiment_satisfied_alt' />
          </button>
          <button
            className='bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600'
            onClick={handleSendMessage}
          >
            <IconWrapper icon='send' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatMessages;
