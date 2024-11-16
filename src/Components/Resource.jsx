
import React from 'react';

const resources = [
  { title: 'React Documentation', link: 'https://reactjs.org/' },
  { title: 'MDN Web Docs', link: 'https://developer.mozilla.org/' },
];

const ResourceLibrary = () => {
  return (
    <div className='flex justify-center items-center'>
    <div className='flex gap-x-40'>
      <div className='h-40 w-40 bg-black flex justify-center items-center hover:w-60 hover:h-60 transition-all duration-500 ease-in-out'>
      <div className='text-white text-3xl font-serif'>
        B_Tech
      </div>
      </div>
      <div className='h-40 w-40 bg-black flex justify-center items-center hover:w-60 hover:h-60 transition-all duration-500 ease-in-out'>
      <div className='text-white text-3xl font-serif'>
        M_Tech
      </div>
      </div>
    </div>
    </div>
  );
};

export default ResourceLibrary;