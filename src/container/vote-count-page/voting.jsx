import React from 'react';
import { MdText, BgText } from '../../constants/style';
import styled from "styled-components";
import cas from "../../images/pg.jpg";
import Btn from '../../components/button/button';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  justify-items: center;
  grid-gap: 1rem;
  padding: .5rem 1rem;
`;

const Info = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
justify-content: space-between;
width: 100%;

  @media only screen and (max-width: 600px) {
  }
`;
const Img = styled.img`
height: 60vh;
width: 50vw;
background-size: fill;
background-position: center;`

const Voting = () => {
    return (
        <Container>
            <Info>
                <BgText>WENCE JOSH</BgText>
                <BgText>Enugu</BgText>
            </Info>
            <Img src={cas} alt='art work' />
        <MdText>N50</MdText>
            <Btn value='Vote' />

        </Container>
    );
};

export default Voting;