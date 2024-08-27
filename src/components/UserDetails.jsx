import { useState } from 'preact/hooks';

const IconWrapper = ({ icon }) => (
  <span className='material-icons w-6 h-6'>{icon}</span>
);

const UserDetails = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, USA',
    automationEnabled: true,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [notes, setNotes] = useState('');

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically send the updated user data to your backend
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleAutomationToggle = () => {
    setUser((prevUser) => ({
      ...prevUser,
      automationEnabled: !prevUser.automationEnabled,
    }));
  };

  return (
    <div className='w-1/4 min-w-[250px] max-w-[400px] border-l border-gray-200 p-4 flex flex-col'>
      {/* User avatar */}
      <div className='flex justify-center mb-4'>
        <div className='w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center'>
          <IconWrapper icon='person' />
        </div>
      </div>

      {/* User info */}
      <div className='mb-4'>
        <h2 className='text-xl font-semibold mb-2'>{user.name}</h2>
        {isEditing ? (
          <>
            <input
              type='text'
              name='email'
              value={user.email}
              onChange={handleInputChange}
              className='w-full mb-2 px-2 py-1 border rounded'
            />
            <input
              type='text'
              name='phone'
              value={user.phone}
              onChange={handleInputChange}
              className='w-full mb-2 px-2 py-1 border rounded'
            />
            <input
              type='text'
              name='location'
              value={user.location}
              onChange={handleInputChange}
              className='w-full mb-2 px-2 py-1 border rounded'
            />
          </>
        ) : (
          <>
            <p className='text-gray-600 mb-1'>{user.email}</p>
            <p className='text-gray-600 mb-1'>{user.phone}</p>
            <p className='text-gray-600'>{user.location}</p>
          </>
        )}
      </div>

      {/* Edit/Save button */}
      <button
        onClick={isEditing ? handleSave : handleEdit}
        className='mb-4 flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
      >
        {isEditing ? 'Save' : 'Edit'}
        <IconWrapper icon='edit' />
      </button>

      {/* All Channels History button */}
      <button className='mb-4 flex items-center justify-center bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300'>
        All Channels History
        <IconWrapper icon='history' />
      </button>

      {/* Automations section */}
      <div className='mb-4'>
        <h3 className='font-semibold mb-2'>Automations</h3>
        <div className='flex items-center justify-between'>
          <span>Enable automations</span>
          <label className='switch'>
            <input
              type='checkbox'
              checked={user.automationEnabled}
              onChange={handleAutomationToggle}
            />
            <span className='slider round'></span>
          </label>
        </div>
      </div>

      {/* Notes section */}
      <div className='mb-4'>
        <h3 className='font-semibold mb-2'>Notes</h3>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className='w-full h-24 px-2 py-1 border rounded resize-none'
          placeholder='Add private notes here...'
        />
      </div>

      {/* Transfer button */}
      <button className='mt-auto flex items-center justify-center bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300'>
        Transfer Conversation
        <IconWrapper icon='swap_horiz' />
      </button>
    </div>
  );
};

export default UserDetails;
