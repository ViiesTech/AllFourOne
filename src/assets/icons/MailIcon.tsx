import React from 'react';
import Svg, { Path } from 'react-native-svg';

const MailIcon = ({ width = 40, height = 40, color = '#000' }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 512 512" fill={color} xmlns="http://www.w3.org/2000/svg">
      <Path d="M64 128Q64 113 73 105 81 96 96 96L416 96Q431 96 440 105 448 113 448 128L448 144 256 272 64 144 64 128ZM256 328L448 200 448 384Q448 416 416 416L96 416Q64 416 64 384L64 200 256 328Z" />
    </Svg>
  );
};

export default MailIcon;
