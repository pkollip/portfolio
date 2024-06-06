import React, { useEffect } from 'react';
import {TypeAnimation} from 'react-type-animation'
import "../index.css"


const DynamicHeader = () => {
  return (
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
  )
};

export default DynamicHeader;
