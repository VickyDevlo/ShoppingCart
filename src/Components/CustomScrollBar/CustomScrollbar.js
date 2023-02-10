import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  height: 200px;
  width: 300px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 5px;
    background-color: #F5F5F5;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #000000;
  }
`;

const CustomScrollbar = () => (
  <StyledDiv> 
  </StyledDiv>
);

export default CustomScrollbar;
