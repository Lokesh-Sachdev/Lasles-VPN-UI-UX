import React from 'react';
import { BsCheck } from 'react-icons/bs';

const text = ({ text }) => {
  return (
    <div style={{ marginBottom: '5px', display: 'flex' }}>
      <BsCheck size={24} style={{ color: '#2FAB73', marginRight: '12px' }} />
      <p style={{ fontSize: '14px', textAlign: 'left' }}>{text}</p>
    </div>
  );
};

export default text;
