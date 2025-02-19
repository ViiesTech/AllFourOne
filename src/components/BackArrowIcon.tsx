import React from "react";
import Svg, { Path } from "react-native-svg";

const BackArrowIcon = ({ width = 10, height = 16, color = "white", opacity = 0.87 }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 10 16" fill="none">
      <Path
        d="M8.5 15L1.5 8L8.5 1"
        stroke={color}
        strokeOpacity={opacity}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default BackArrowIcon;
