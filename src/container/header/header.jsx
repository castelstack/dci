import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Ltxt from "../../constants/link";
import { LgText } from "../../constants/style";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Linkk = styled(Link)`
  
  text-decoration: none;

`;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "repeat(5, max-content)",
    background: "white",
        justifyContent: "space-between",
   
    },
    div: {
        marginBottom: '3rem'
    }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.div}>
      <AppBar>
        <Toolbar variant='dense' className={classes.root}>
          <Ltxt to='/' name='Home' />

          <Ltxt to='/how-to-play' name='How to play' />
          <Linkk to='/'><LgText  style={{ color: "#FF4000", fontWeight: "900" }}>
            DCI
          </LgText></Linkk>
          <Ltxt to='/contestants' name='Contestants' />

          {/* <Ltxt to='/login' name='Login' /> */}
          <Ltxt to='/signup' name='Signup' />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
