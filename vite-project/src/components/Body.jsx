import React from 'react';

const Body = () => {
  return (
    <div className="">
      <div className=''>
        <TypeAnimation
        className="dynamic_header"
        sequence={[
          "Praval Kollipara"
        ]}
        wrapper="span"
        speed={1}
        style={{ fontSize: '2em', display: 'inline-block' }}
        repeat={Infinity}
      />
      </div>
    </div>
  )
};

export default Body;
