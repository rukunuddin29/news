import React from 'react';

function Pages() {
  return (
    <div className='-mt-6 md:grid md:grid-cols-2 md:gap-4 lg:mx-32'>
      <div className='flex flex-col rounded-lg bg-slate-800 text-surface shadow-secondary-1 my-6'>
        <img
          className='h-48 sm:h-64 md:h-96 lg:h-112 w-full rounded-t-lg object-cover'
          src='https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg'
          alt=''
        />
        <div className='flex flex-col justify-start p-6'>
          <h5 className='mb-2 text-xl font-medium'>Card title</h5>
          <p className='text-xs text-surface/75 dark:text-neutral-300'>
            Last updated 3 mins ago
          </p>
        </div>
      </div>
      <div className='flex flex-col  rounded-lg bg-slate-800 text-surface shadow-secondary-1 my-6'>
        <img
          className='h-40 sm:h-56 md:h-72  lg:h-96 w-full rounded-t-lg object-cover'
          src='https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg'
          alt=''
        />
        <div className='flex flex-col justify-start p-4'>
          <h5 className='mb-2 text-xl font-medium'>Card title</h5>
          <p className='text-xs text-surface/75 dark:text-neutral-300'>
            Last updated 3 mins ago
          </p>
        </div>
      </div>
    </div>
  );
}

export default Pages;
