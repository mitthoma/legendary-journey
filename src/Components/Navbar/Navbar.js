import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Button, Paper, AppBar, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './Navbar.css';
import '../../App.css';
import logo from '../../assets/imgs/five.PNG'

const useStyles = makeStyles((theme) => ({
  root: {
    // marginBottom: '15%',
    boxShadow: '35px',
    height: '100%',
    background: '#fff'
  },
  toolbarButtons: {

    marginLeft: 'auto',

  },
  toolbarName: {
    marginRight: 'auto',
    fontFamily: 'Helvetica Neue',
    color: '#khjksj',
    position: 'inline',
  },
  logoImage: {
    height: '10vh',
    width: 'auto',
  }
}));

const Navbar = (props) => {

  const classes = useStyles();


    return (

      <div className={classes.root}>

        <AppBar position="fixed">
          <Toolbar>

            <div className={classes.toolbarName}>
              <img className={classes.logoImage} src={logo} />





            </div>

            <div className={classes.toolbarButtons}>

              {

                <Button className={"navi l-through"} color="inherit">
                  Home
                </Button>


              }
              {
                <Button color="inherit">
                  Story
                </Button>
              }
              {

                <Button  color="inherit">
                  Specializations
                </Button>


              }
              {
                <Button color="inherit">
                  Art
                </Button>
              }

              {

                <Button  color="inherit">
                  Support
                </Button>


              }
              {
                <Button color="inherit">
                  Contact
                </Button>
              }


            </div>

          </Toolbar>
        </AppBar>

        <Toolbar />

      </div>


    );

  }


export default Navbar;
