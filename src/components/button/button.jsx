import React from "react";
import styled from "styled-components";
// background: ${(props) => (props.choco ? "none" : "#FCEA4A")};

const CustomButton = styled.button`
  width: ${(props) => (props.big ? "235px" : "120px")};
  height: ${(props) => (props.big ? "58px" : "38px")};
  background: #FF4000;
  cursor: pointer;
  border: none;
  border-radius: 0px;
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: ${(props) => (props.big ? "20px" : "1.5rem")};
  line-height: 33px;
  outline: none;
  color: #fff;
border-radius: 5px;
  @media only screen and (max-width: 1200px) {
    width: 200px;
    height: 40px;
    font-size: 18px;
  }

  @media only screen and (max-width: 800px) {
    width: 150px;
    height: 42px;
    font-size: 12px;
  }

  @media only screen and (max-width: 600px) {
    width: 100px;
    height: 35px;
    font-size: 13.5px;
  }

  &:hover {
    background: #ee3c00;
    transform: translateY(-0.2px);
  }
  &:active {
    transform: translateY(0.6px);
  }
`;

const Btn = ({ onClick, to, value, ...props }) => {
  return (
    <div>
      <CustomButton onClick={onClick} to={to} {...props}>
        {value}
      </CustomButton>
    </div>
  );
};

export default Btn;
