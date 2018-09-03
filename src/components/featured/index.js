import React from 'react';
import Carrousel from './Carrousel';
import TimeUntils from './TimeUntils';

const Featured = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Carrousel />
      <div className="artist_name">
        <div className="wrapper">EDM Show</div>
      </div>

      <TimeUntils />
    </div>
  );
};

export default Featured;
