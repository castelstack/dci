import styled from "styled-components";

export const LgText = styled.h1`
  font-family: 'Source Sans Pro', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 3.5rem;
  line-height: 45px;
  text-align: ${(props) => (props.center ? "center" : "none")};

  color: ${(props) => (props.white ? "white" : "#333333")};

  @media only screen and (max-width: 1200px) {
    font-size: 3rem;
    line-height: 45px;
  }

  @media only screen and (max-width: 992px) {
    font-size: 2.5rem;
    line-height: 35px;
  }
  @media only screen and (max-width: 802px) {
    font-size: 2rem;
    line-height: 35px;
  }

  @media only screen and (max-width: 602px) {
    font-size: 1.5rem;
    line-height: 30px;
  }
  @media only screen and (max-width: 450px) {
    font-size: 1.5rem;
    line-height: 30px;
  }
`;
export const BgText = styled.h1`
  font-family: 'Source Sans Pro', sans-serif;
  font-style: normal;
  font-weight: ${(props) => (props.bold ? "bold" : "400")};
  font-size: 3rem;
  line-height: 45px;
  text-align: ${(props) => (props.center ? "center" : "none")};

  color: ${(props) => (props.white ? "white" : "#333333")};

  @media only screen and (max-width: 1200px) {
    font-size: 2.2rem;
    line-height: 45px;
  }

  @media only screen and (max-width: 992px) {
    font-size: 1.8rem;
  }

  @media only screen and (max-width: 868px) {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 576px) {
    line-height: 35px;
  }
`;

export const MdText = styled.h3`
font-family: 'Source Sans Pro', sans-serif;
font-style: normal;
font-weight:   ${(props) => (props.bold ? "bold" : "400")};
font-size: 1.3rem;
line-height: 25px

text-align: ${(props) => (props.center ? "center" : "none")};
color:  ${(props) => (props.white ? "white" : "#333333")};

@media only screen and (max-width: 800px) {
    font-size: 1.1rem;
    line-height: 22px;
  }


  
  @media only screen and (max-width: 600px) {
    font-size: 1rem;
    line-height: 22px;
  }
  
  @media only screen and (max-width: 500px) {
    
    line-height: 18px;
  }`;

export const SmText = styled.h5`
  font-family: 'Source Sans Pro', sans-serif;
  font-style: normal;
  font-weight: ${(props) => (props.bold ? "bold" : "400")};
  font-size: 15px;
  line-height: 22px;
  text-align: ${(props) => (props.center ? "center" : "none")};
  color: ${(props) => (props.white ? "white" : "#333333")};

  @media only screen and (max-width: 900px) {
    font-size: 14px;
    line-height: 22px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 14px;
    line-height: 22px;
  }

  @media only screen and (max-width: 400px) {
    font-size: 12.5px;
    line-height: 20px;
  }
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1.5rem;
  padding: 2rem 0;
  justify-items: ${(props) => (props.centerItems ? "center" : "none")};
`;

export const OfferForm = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.5rem;
  padding: 2rem 0;
`;
export const Field = styled.div`
  display: grid;
  grid-template-rows: 1fr;
`;

export const FieldTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  width: 100%;
  grid-gap: 2rem;
  @media only screen and (max-width: 600px) {
    grid-template-columns:1fr;
    grid-gap: 1rem;
    padding-bottom: .5rem;
  }
`;

export const CirPro = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;
