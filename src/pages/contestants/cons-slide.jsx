import { Favorite } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Btn from "../../components/button/button";
import { MdText } from "../../constants/style";
import Img from "../../images/pg.jpg";
//import { LgText } from "../../constants/style";

const Container = styled.div`
  //background-image: url(${Img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Content = styled.div`
  height: 100vh;
  width: 100%;
  //background-color: rgb(0, 0, 0, 0.5);
  display: grid;
  grid-template-columns: 1fr;
  background-position: cover;
  align-content: end;
`;

const ConInfo = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  grid-gap: 0.6rem;
  justify-content: space-between;
  padding: 0.8rem 1rem;
  align-items: center;
  background: #8ac6d0;
`;
const Div = styled.div`
display: grid;
  grid-template-columns: max-content max-content;
  align-items: center;
  grid-gap: .8rem;`;

const Likes = styled.div`
display: grid;
  grid-template-columns: max-content max-content;
  align-items: center;
  grid-gap: .2rem;
  @media only screen and (max-width: 602px) {
    font-size: 1.5rem;
    line-height: 30px;
  }`;

const ConSlide = () => {
  return (
    <Container style={{ backgroundImage: `url(${Img})` }}>
      <Content>
        <ConInfo>
          <MdText>Josh Wence</MdText>

          <Div>
            
          <Likes>
              <Favorite style={{ color: 'red'}}/>
           <MdText>23</MdText>
          </Likes>
          <Link to='/vote'>
            <Btn value='Vote' />
          </Link>
          </Div>
        </ConInfo>
      </Content>
    </Container>
  );
};

export default ConSlide;
