import React from 'react';

function Story({ username, img }) {
  return (
    <div>
      <img
        className='h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer'
        src={img}
        alt='profile pic'
      />
      <p className='text-xs w-14 truncate text-center hover:scale-110 transition transform duration-200 ease-out'>
        {username}
      </p>
    </div>
  );
}

export default Story;
