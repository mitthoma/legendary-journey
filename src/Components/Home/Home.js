import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Button, Paper, Grid, ButtonGroup } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './Home.css';
import Grow from '@material-ui/core/Grow';
import { borders } from '@material-ui/system';
import '../../App.css'

const useStyles = makeStyles((theme) => ({

  root: {

    height: '100%',
    display: 'flex',

  },


}));

const Home = () => {

  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);

  return (

    <div className={classes.root}>




    </div>
  )

};

export default Home;
