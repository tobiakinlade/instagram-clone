import React from 'react';

function MiniProfile() {
  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
      <img
        src='https://yt3.ggpht.com/yti/APfAmoGe5D8-4k9ZIqFo93E6sKuicV3MoptKiyad4DFqnA=s88-c-k-c0x00ffffff-no-rj-mo'
        alt='profile pic'
        className='rounded-full border w-16 h-16'
      />

      <div className='flex-1 mx-4'>
        <h2 className='font-bold'>Tobi</h2>
        <h3 className='texr-sm text-gray-400'>Welcome to Instagram</h3>
      </div>

      <button className='text-blue-400 text-sm font-semibold'>Sign out</button>
    </div>
  );
}

export default MiniProfile;
