import React from 'react';

const Plan = ({ img, title }) => {
  return (
    <div>
      <div>
        <img src={img} alt="box img" style={{ marginBottom: '14px' }} />
      </div>
      <h4 style={{ marginBottom: '1rem' }}>{title}</h4>
    </div>
  );
};

export default Plan;
