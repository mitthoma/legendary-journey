import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Button, Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './Section.css';
import '../../App.css';

const useStyles = makeStyles((theme) => ({
  typography: {
    fontWeight: 600,
  },
  root: {
    flexGrow: 1,
    // marginTop: '15%',
  },
  paper: {
    padding: theme.spacing(2),
  },

}));


const Section = () => {

  const classes = useStyles();

  return (

    <div className={classes.root}>



    </div>





  )

};

export default Section;
