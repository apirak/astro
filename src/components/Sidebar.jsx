import { useState } from 'preact/hooks';
import {
  HomeIcon,
  UsersIcon,
  ChatBubbleLeftRightIcon,
  HashtagIcon,
  ChevronDownIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';

// const IconWrapper = ({ icon: Icon }) => <Icon className='w-6 h-6' />;
const IconWrapper = ({ icon }) => (
  <span className='material-icons w-6 h-6'>{icon}</span>
);

const Sidebar = () => {
  const [isChannelsExpanded, setIsChannelsExpanded] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  return (
    <aside className='w-16 h-screen bg-gray-800 text-white flex flex-col items-center py-4'>
      {/* Logo */}
      <div className='mb-8'>
        <img src='/logo.svg' alt='Logo' className='w-10 h-10' />
      </div>

      {/* Navigation menu */}
      <nav className='flex-1'>
        <ul className='space-y-4'>
          <li>
            <a href='#' className='block p-2 hover:bg-gray-700 rounded-md'>
              <IconWrapper icon='home' />
            </a>
          </li>
          <li>
            <a href='#' className='block p-2 hover:bg-gray-700 rounded-md'>
              <IconWrapper icon='people' />
            </a>
          </li>
          <li>
            <a href='#' className='block p-2 hover:bg-gray-700 rounded-md'>
              <IconWrapper icon='chat' />
            </a>
          </li>
          <li>
            <button
              onClick={() => setIsChannelsExpanded(!isChannelsExpanded)}
              className='block p-2 hover:bg-gray-700 rounded-md'
            >
              <IconWrapper icon='tab' />
            </button>
            {isChannelsExpanded && (
              <ul className='mt-2 space-y-2'>
                {/* Add channel submenu items here */}
              </ul>
            )}
          </li>
        </ul>
      </nav>

      {/* User profile */}
      <div className='relative'>
        <button
          onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
          className='block p-2 hover:bg-gray-700 rounded-full'
        >
          <IconWrapper icon='account_circle' />
        </button>
        {isProfileDropdownOpen && (
          <div className='absolute bottom-full left-0 mb-2 w-48 bg-white text-gray-800 rounded-md shadow-lg'>
            {/* Add profile dropdown menu items here */}
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
