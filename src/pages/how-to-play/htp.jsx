import React from 'react';
import { BgText, MdText, SmText } from '../../constants/style';
import styled from "styled-components";
import { Paper } from '@material-ui/core';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
 
  align-items: center;
  grid-gap: 3rem;
  height: 70vh;
  padding: 0rem 1rem;
  
  @media only screen and (max-width: 600px) {
    grid-template-columns:1fr;
    grid-gap: 1rem;
  }
`;

const Div = styled.div`
  
  padding:  2rem 0;
  
  
`;

const Htp = () => {
    return (
        <Div>
            <BgText center bold>HOW TO PLAY</BgText>
            <Container>
            <Paper style={{padding: '1rem 1rem'}}>
            <BgText bold style={{color: '#33658A'}}>RULES</BgText>
            <SmText>1. just dont cheat, that's all</SmText>
            <SmText>2. just dont cheat, that's all</SmText>
            <SmText>3. just dont cheat, that's all</SmText>
            <SmText>4. just dont cheat, that's all</SmText>
            <SmText>5. just dont cheat, that's all</SmText>
                <SmText>6. just dont cheat, that's all</SmText>
                </Paper>
                <Paper  style={{padding: '1rem 1rem', textAlign: 'center'}}>
            <BgText bold style={{color: '#33658A'}}>PRIZE</BgText>
             <MdText bold>FIRST PLACE</MdText><SmText> $500</SmText>
             <MdText bold>SECOND PLACE</MdText><SmText> $250</SmText>
             <MdText bold>THIRD PLACE</MdText><SmText> $100</SmText>
            
                </Paper>
                </Container>

        </Div>
    );
};

export default Htp;