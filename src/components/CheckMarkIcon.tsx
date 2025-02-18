import React from 'react';
import Svg, { Polygon } from 'react-native-svg';

const CheckmarkIcon = () => {
  return (
    <Svg 
      viewBox="0 0 335.765 335.765"
      width={15} 
      height={15} // Adjust size as needed
    >
      <Polygon 
        points="311.757,41.803 107.573,245.96 23.986,162.364 0,186.393 107.573,293.962 335.765,65.795" 
        fill="black" // Change color as needed
      />
    </Svg>
  );
};

export default CheckmarkIcon;
