import React from "react";
import styled from "styled-components";

const Scrollbar = styled.div`
  height: 586px;
  width: 455px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 5px;
    background-color: #1b1a20;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #1b1a20;
  }
  @media screen and (max-width: 765px)   {
    height: 254px;
    /* height: 295px; */
    width: 100%;
  }
`;

const CustomScrollbar = ({ children }) => {
  return <Scrollbar>{children}</Scrollbar>;
};

export default CustomScrollbar;
