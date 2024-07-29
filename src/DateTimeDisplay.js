import React from 'react';

const DateTimeDisplay = ({ value, type,  }) => {
  return (
    <div >
      <p className='text-center'>{value}</p>
      <p className='text-center'>{type}</p>
    </div>
  );
};

export default DateTimeDisplay;