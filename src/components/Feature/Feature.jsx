import React from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';

const Feature = ({ text }) => {
  return (
    <div style={{ marginBottom: '15px' }}>
      <p style={{ fontSize: '14px' }} className="flex__center">
        <AiFillCheckCircle
          size={24}
          style={{ color: '#2FAB73', marginRight: '10px' }}
        />
        {text}
      </p>
    </div>
  );
};

export default Feature;
