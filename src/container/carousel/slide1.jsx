import React from "react";
import styled from "styled-components";
import Img from "../../images/pg.jpg";
//import { LgText } from "../../constants/style";

const Container = styled.div`
  background-image: url(${Img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Content = styled.div`
  height: 90vh;
  width: 100%;
  background-color: rgb(0, 0, 0, 0.5);
  display: grid;
  grid-template-columns: 1fr;
 justify-content: center;
  align-content: center;
`;

const Text = styled.h2`
 font-size: 5rem;
 color: white;
`;

const Slide1 = () => {
  return (
    <Container>
      <Content>
        <Text>DCI</Text>
      </Content>
    </Container>
  );
};

export default Slide1;
