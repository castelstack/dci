import React from "react";

import fb from "../../images/fb.svg";
import insta from "../../images/inst.svg";
import styled from "styled-components";
import { SmText } from "../../constants/style";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const Container = styled.div`
  background: #343a40;
  display: grid;
  grid-template-columns: 1fr repeat(2, max-content);
  align-items: center;
  padding:.5rem 1rem;
  grid-gap: 1rem;

  @media only screen and (max-width: 602px) {
    grid-template-columns: 1fr ;
   justify-items: center;
  }
`;
const Legal = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-gap: 1rem;
  justify-self: center;
  @media only screen and (max-width: 602px) {
    
   grid-row:2/3;
  }
`;
const Contact = styled.div`
display: grid;
grid-template-rows: repeat(3, min-content);
@media only screen and (max-width: 602px) {
  grid-template-columns: 1fr ;
 justify-items: center;
 grid-row:1/2;
}
`;
const SocialIcon = styled.img`
  height: 35px;
`;
const SocialLink = styled.a``;
const Footer = () => {
  return (
      <Container>
       

      <SmText white> © 2021 DCI all rights reserved</SmText>
      <Contact>
        <Link to='/user-page' >
          user test
        </Link>
        <Typography variant='subtitle2' style={{color: 'white'}}>hhhh@gmail.com</Typography>
        <Typography variant='subtitle2' style={{color: 'white'}}>0909****</Typography>
      </Contact>
         
      <Legal>
        <SocialLink href='L'>
          <SocialIcon src={fb} />
        </SocialLink>
        <SocialLink href='L'>
          <SocialIcon src={insta} />
        </SocialLink>
      </Legal>
    </Container>
  );
};

export default Footer;
