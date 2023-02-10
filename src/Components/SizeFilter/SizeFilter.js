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
  const clickhandler = () => {
    handleSizeFilter();
    alert("clicked");
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
  z-index: 99999;

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
const LabelTag = styled.span`
  position: absolute;
  top: 28px;
  left: 10px;
  width: 35px;
  height: 35px;
  font-size: 0.8em;
  border-radius: 50%;
  cursor: pointer;
  box-sizing: border-box;
  line-height: 35px;
  text-align: center;
  color: rgb(27, 26, 32);
  background-color: rgb(236, 236, 236);
  border: 1px solid transparent;
`;

export default SizeFilter;
