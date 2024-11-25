'use client';

import React from 'react';
import Image from 'next/image';

const Logo = () => {
  return (
    <div className='bg-white'>
      <Image
        className="bg-white m-8"
        src="/Main logo.svg"
        alt="Next.js logo"
        width={160}
        height={160}
      />
    </div>
  );
};

export default Logo;
