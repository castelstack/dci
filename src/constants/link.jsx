
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
//import { SmText } from "./style";

const Linkk = styled(NavLink)`
  color: #12130F;
  text-decoration: none;
  font-family: 'Source Sans Pro', sans-serif;
  font-style: normal;
  font-weight: ${(props) => (props.bold ? "bold" : "400")};
  font-size: 1.3rem;
  line-height: 22px;
cursor: pointer;
  @media only screen and (max-width: 900px) {
    font-size: 1.2rem;
    line-height: 22px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 1rem;
    line-height: 22px;
  }

  @media only screen and (max-width: 400px) {
  
  }
  &:hover{
    color: #fd7e14;
  }
`;
const active = {
    
}
const Ltxt = ({ to, name }) => {
  return (
    <Linkk to={to} activeStyle={active}>
        {name}
    </Linkk>
  );
};

export default Ltxt;
