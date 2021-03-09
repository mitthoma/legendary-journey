import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Button, Paper, AppBar, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './Navbar.css';
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

                <Button variant="contained" color="secondary">
                  Secondary Button
                </Button>


              }
              {
                <Button variant="contained" color="secondary">
                Secondary Button
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
