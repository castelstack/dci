
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { SmText } from "./style";

const Linkk = styled(NavLink)`
  color: #12130F;
  text-decoration: none;
  font-family: 'Source Sans Pro', sans-serif;
  font-style: normal;
  font-weight: ${(props) => (props.bold ? "bold" : "400")};
  font-size: 15px;
  line-height: 22px;

  @media only screen and (max-width: 900px) {
    font-size: 14px;
    line-height: 22px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 15px;
    line-height: 22px;
  }

  @media only screen and (max-width: 400px) {
    font-size: 15px;
    line-height: 20px;
  }
  &:hover{
    color: #fd7e14;
  }
`;
const active = {
    color: '#fd7e14'
}
const Ltxt = ({ to, name }) => {
  return (
    <Linkk to={to} activeStyle={active}>
      <SmText >{name}</SmText>
    </Linkk>
  );
};

export default Ltxt;
