import React from 'react';

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        title="This is a unique title"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5125690892182!2d106.7036064152745!3d10.7719989622198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ffcb68e7221%3A0xc26e2e7702035400!2sBitexco!5e0!3m2!1svi!2s!4v1535987717805"
        width="100%"
        height="600px"
        frameBorder="0"
        allowFullScreen
      />

      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
