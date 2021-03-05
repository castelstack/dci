import React from "react";

import fb from "../../images/fb.svg";
import insta from "../../images/inst.svg";
import styled from "styled-components";
import { SmText } from "../../constants/style";
import { Typography } from "@material-ui/core";
//import { Link } from "react-router-dom";

const Container = styled.div`
  background: #102542;
  display: grid;
  grid-template-columns: 1fr repeat(2, max-content);
  align-items: center;
  padding:.2rem 1rem;
  grid-gap: .1rem;

  @media only screen and (max-width: 602px) {
    grid-template-columns: repeat(2, max-content);
   justify-content: space-between;
  }
`;
const Legal = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-gap: 1rem;
  justify-self: center;
  @media only screen and (max-width: 602px) {
    
  
  }
`;
const Contact = styled.div`
display: grid;
grid-template-rows: repeat(2, min-content);
@media only screen and (max-width: 602px) {
  grid-template-columns: 1fr ;


}
`;
const Cpy = styled.div`
@media only screen and (max-width: 602px) {
  display: grid;
  width: 100%;
  justify-items: center;
 grid-row:2/3;
}
`;
const SocialIcon = styled.img`
  height: 30px;
`;
const SocialLink = styled.a``;
const Footer = () => {
  return (
      <Container>
       

      <Cpy>

      <SmText white style={{color: 'gray'}}> © 2021 DCI all rights reserved</SmText>
      </Cpy>
      <Contact>
        {/* <Link to='/user-page' >
          user test
        </Link> */}
        <Typography variant='subtitle2' style={{color: 'gray'}}>hhhh@gmail.com</Typography>
        <Typography variant='subtitle2' style={{color: 'gray'}}>0909****</Typography>
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
