import React from "react";
import styled from "styled-components";
import { NavLink, Route, useRouteMatch } from "react-router-dom";
import { Divider } from "@material-ui/core";
import Count from "../../container/vote-count-page/count";

const Linkk = styled(NavLink)`
  color: white;
  text-decoration: none;
  padding: 4rem 2rem;
  background: #33658a;
  font-size: 1rem;
//height: 20rem;
  @media only screen and (max-width: 600px) {
    padding: 1rem 2rem;
  }
  &:hover {
    color: #fd7e14;
  }
`;
// const active = {
//   color: "#fd7e14",
// };
const Container = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;

  align-items: center;
  grid-gap: 1.5rem;
  padding: 0rem 0rem;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-gap: 1rem;
    padding: 0rem 1rem;
  }
`;

const Nav = styled.div`
  display: grid;
  //grid-template-columns: 1fr;
  //grid-template-rows: 1fr 1fr 1fr;
align-self: start;
  @media only screen and (max-width: 600px) {
    //grid-template-columns: repeat(3, max-content);
    margin-top: .8rem;
  }
`;

const UserPage = () => {
  const { path } = useRouteMatch();
  return (
    <Container>
      <Nav>
        <Linkk to={`${path}/stage-one`}>Stage 1</Linkk>
        <Divider light />
        <Linkk to={`${path}/images`}>Stage 2</Linkk>
        <Divider light />
        <Linkk to={`${path}/images`}>Stage 3</Linkk>
      </Nav>
          <div>
          <Route path={`${path}`} exact component={Count} />
        <Route path={`${path}/stage-one`} component={Count} />
      </div>
    </Container>
  );
};

export default UserPage;
