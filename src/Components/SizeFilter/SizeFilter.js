import React, { useState } from "react";
import styled from "styled-components";

const SizeFilter = ({ sizeFilter, setSizeFilter }) => {
  
  // Filter the products using size.
  const handleSizeFilter = (e) => {
    const { value, checked } = e.target;
    checked
      ? setSizeFilter([...sizeFilter, value])
      : setSizeFilter(sizeFilter.filter((filterSize) => filterSize !== value));
  };

  return (
    <SizeWrapper>
      <Title>Sizes: </Title>
      <StyledCheckbox
        type="checkbox"
        value="S"
        onChange={handleSizeFilter}
        checked={sizeFilter.includes("S")}
      />
      <LabelTag>S</LabelTag>
      <StyledCheckbox
        type="checkbox"
        value="M"
        onChange={handleSizeFilter}
        checked={sizeFilter.includes("M")}
        label="M"
      />
      <LabelTag>M</LabelTag>
      <StyledCheckbox
        type="checkbox"
        value="L"
        onChange={handleSizeFilter}
        checked={sizeFilter.includes("L")}
      />
      <LabelTag>L</LabelTag>

      <StyledCheckbox
        type="checkbox"
        value="X"
        onChange={handleSizeFilter}
        checked={sizeFilter.includes("X")}
      />
      <LabelTag>X</LabelTag>
      <StyledCheckbox
        type="checkbox"
        value="XL"
        onChange={handleSizeFilter}
        checked={sizeFilter.includes("XL")}
      />
      <LabelTag>XL</LabelTag>
    </SizeWrapper>
  );
};

const SizeWrapper = styled.div`
  width: 210px;
  position: absolute;
  top: 45px;
  padding: 5px;
  left: 55px;
  @media screen and (max-width: 783px) {
    top: 9px;
    width: 236px;
    left: 168px;
  }
`;
const Title = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;
const StyledCheckbox = styled.input`
  appearance: none;
  max-width: 37px;
  width: 100%;
  height: 37px;
  border-radius: 50%;
  margin: 0px;
  outline: none;
  cursor: pointer;
  background-color: #ececec;
  &:checked {
    background-color: #333;
  }
  &:hover {
    border: 1px solid black;
  }
`;
const LabelTag = styled.span`
  position: relative;
  bottom: 15px;
  left: -24px;
  font-size: 11px;
  border-radius: 50%;
  line-height: 35px;
  color: #1b1a20;
  background-color: transparent;
  border: 1px solid transparent;
`;

export default SizeFilter;
