import React from "react";
import SliderLabel from "./SliderLabel";
import styled from "styled-components";

const Slider: React.FC = () => {
  return (
    <SliderLabel>
      <SliderStyle type="range" />
    </SliderLabel>
  );
};

const SliderStyle = styled.input`
  transform: rotate(270deg);
`;

export default Slider;
