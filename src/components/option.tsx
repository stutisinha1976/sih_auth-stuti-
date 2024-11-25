'use client';
import Image from 'next/image';
import React, { useState } from 'react';

const Option = () => {
  // Create state to track which checkbox is selected
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleCheckboxChange = (optionId: string) => {
    // If the checkbox is already selected, unselect it, otherwise select the new one
    setSelectedOption(selectedOption === optionId ? null : optionId);
  };

  return (
    <div className='w-3/4 flex'>
      {/* Option 1 */}
      <div className='flex ml-20 w-2/5 h-28 border-2 rounded-md border-black mt-28'>
        <input
          type="checkbox"
          className='mt-9 ml-4 w-8 h-8 mr-4'
          checked={selectedOption === 'option1'}
          onChange={() => handleCheckboxChange('option1')}
        />
        <Image
          src="/option1.svg"
          alt="Option 1"
          width={48}
          height={32}
        />
        <div className='pt-2 text-3xl font-semibold ml-4'>
          I’m here to lead projects to success as CMPDI Admin
          <h1 className='text-lg font-normal'>
            Oversee projects and ensure smooth progress
          </h1>
        </div>
      </div>

      {/* Option 2 */}
      <div className='flex ml-20 w-2/5 h-28 border-2 rounded-md border-black mt-28'>
        <input
          type="checkbox"
          className='mt-9 ml-4 w-8 h-8 mr-4'
          checked={selectedOption === 'option2'}
          onChange={() => handleCheckboxChange('option2')}
        />
        <Image
          src="/option2.svg"
          alt="Option 2"
          width={48}
          height={32}
        />
        <div className='pt-2 text-3xl font-semibold ml-4 mr-8'>
          I’m here to ignite innovation as Project Investigator
          <h1 className='text-lg font-normal'>
            Submit and manage your research projects
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Option;
