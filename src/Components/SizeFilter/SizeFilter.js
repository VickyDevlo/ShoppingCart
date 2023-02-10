import React from "react";
import styled from "styled-components";

const SizeFilter = ({ sizeFilter, setSizeFilter }) => {
  // Filter the products using size.
  const handleSizeFilter = (e) => {
    const { value, checked } = e.target;
    console.log("value", value, "checked", checked);
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
      <StyledCheckbox
        type="checkbox"
        value="M"
        onChange={handleSizeFilter}
        checked={sizeFilter.includes("M")}
        label="M"
      />

      <StyledCheckbox
        type="checkbox"
        value="L"
        onChange={handleSizeFilter}
        checked={sizeFilter.includes("L")}
      />

      <StyledCheckbox
        type="checkbox"
        value="X"
        onChange={handleSizeFilter}
        checked={sizeFilter.includes("X")}
      />

      <StyledCheckbox
        type="checkbox"
        value="XL"
        onChange={handleSizeFilter}
        checked={sizeFilter.includes("XL")}
      />
    </SizeWrapper>
  );
};

const SizeWrapper = styled.div`
  width: 171px;
  position: absolute;
  top: 86px;
  left: 46px;
`;
const Title = styled.div`
  font-weight: bold;
`;
const StyledCheckbox = styled.input`
  appearance: none;
  max-width: 35px;
  width: 100%;
  height: 35px;

  border-radius: 50%;
  margin: 10px;
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

export default SizeFilter;
