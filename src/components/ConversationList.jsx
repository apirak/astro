import { useState } from 'preact/hooks';
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from '@heroicons/react/24/outline';

const IconWrapper = ({ icon }) => (
  <span className='material-icons w-6 h-6'>{icon}</span>
);

const ConversationList = () => {
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [conversations, setConversations] = useState([
    {
      id: 1,
      name: 'John Doe',
      lastMessage: 'Hello there!',
      timestamp: '2m ago',
      unread: true,
    },
    {
      id: 2,
      name: 'Jane Smith',
      lastMessage: 'How can I help?',
      timestamp: '1h ago',
      unread: false,
    },
    // Add more mock conversations here
  ]);

  const filteredConversations = conversations.filter((conv) =>
    conv.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='w-1/4 min-w-[250px] max-w-[400px] border-r border-gray-200 flex flex-col'>
      {/* Filters */}
      <div className='flex items-center justify-between p-4 border-b border-gray-200'>
        <div className='flex space-x-2'>
          <button
            className={`px-3 py-1 rounded-md ${filter === 'All' ? 'bg-blue-100 text-blue-600' : 'text-gray-600'}`}
            onClick={() => setFilter('All')}
          >
            All
          </button>
          <button
            className={`px-3 py-1 rounded-md ${filter === 'Open' ? 'bg-blue-100 text-blue-600' : 'text-gray-600'}`}
            onClick={() => setFilter('Open')}
          >
            Open
          </button>
        </div>
        <div className='relative'>
          <select className='appearance-none bg-transparent pr-8 py-1 text-gray-600'>
            <option>More</option>
            <option>Closed</option>
            <option>Pending</option>
          </select>
          <IconWrapper icon='expand_more' />
        </div>
      </div>

      {/* Search */}
      <div className='p-4'>
        <div className='relative'>
          <input
            type='text'
            placeholder='Search conversations...'
            className='w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <IconWrapper icon='search' />
        </div>
      </div>

      {/* Conversation list */}
      <div className='flex-1 overflow-y-auto'>
        {filteredConversations.map((conv) => (
          <div key={conv.id} className='p-4 hover:bg-gray-100 cursor-pointer'>
            <div className='flex items-center'>
              <div className='w-10 h-10 bg-gray-300 rounded-full mr-3'></div>
              <div className='flex-1'>
                <h3 className='font-semibold'>{conv.name}</h3>
                <p className='text-sm text-gray-600'>{conv.lastMessage}</p>
              </div>
              <div className='text-xs text-gray-500'>{conv.timestamp}</div>
            </div>
          </div>
        ))}
      </div>

      {/* New conversation button */}
      <div className='p-4 border-t border-gray-200'>
        <button className='w-full bg-blue-500 text-white rounded-md py-2 flex items-center justify-center'>
          <IconWrapper icon='add' />
          <span className='ml-2'>New Conversation</span>
        </button>
      </div>
    </div>
  );
};

export default ConversationList;
