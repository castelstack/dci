import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";
import cas from "../../images/wp.png";
import { Alert, TYPE } from "../../components/alert";
import { SmText } from "../../constants/style";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
width: 100%;
  justify-items: center;
  grid-gap: 3rem;
  padding: .5rem 1rem;
`;

const Counts = styled.div`
  display: grid;
  grid-template-columns: repeat(4, max-content);
align-items: end;
  grid-gap: 0.3rem;

  padding: 0rem 0rem;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
const Span = styled.span`
  font-family: "Quicksand", sans-serif;
  font-weight: 300;
  color: black;
  font-size: 7rem;
`;
const Img = styled.img`
height: 60vh;
width: 50vw;
background-size: fill;
background-position: center;
@media only screen and (max-width: 600px) {
  width: 100%;
}`
const handleClick = () => {
  const msg = "copied to clipboard!";
  Alert(msg, TYPE.SUCCESS);
};

const Count = () => {
  return (
    <Container>
      {/* <CardMedia
        component='img'
        alt='Stage one art'
        height='180'
        width={50}
        image={cas}
        title='Our project'
      /> */}
      <Img src={cas} alt="art picture"/>
      <Counts>
        <Span>3</Span>
        <Span>/</Span>
        <Span>30</Span>
        <SmText>Votes</SmText>
      </Counts>{" "}
      <CopyToClipboard text='how are you?'>
        <Button variant='contained' onClick={handleClick}>
          Copy Link
        </Button>
      </CopyToClipboard>
    </Container>
  );
};

export default Count;
