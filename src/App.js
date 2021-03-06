import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Button, Paper, AppBar, Toolbar, Grid, Card, CardActionArea, CardMedia, CardContent, CardActions } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './Components/Navbar/Navbar'
import './App.css';
import Home from './Components/Home/Home';
import Section from './Components/Section/Section';

const useStyles = makeStyles((theme) => ({

  appBarSpacing: theme.mixins.toolbar,
  sectionContainers: {
    height: '100%',
    marginTop: '10%',
    marginBottom: '10%',
    overflow: 'hidden',
  },
  primaryHeader: {
    fontWeight: 600,
  },
  secondaryHeader: {


  },
  labelHeader: {
    fontWeight: 500,
    background: 'black',
    color: '#eaeaea',
    padding: '2px',
  },
  heroText: {
    marginBottom: '5%',
  },
  btn: {
    background: 'white',
    color: 'black',

  },
  btnCase: {
    textAlign: 'center',
    width: '100%'
  },
  cardStyle: {
    background: '#eaeaea',
    marginTop: '3%',
    marginBottom: '3%',
    maxWidth: '100%',

  },
  wrapping: {
    overflowWrap: 'break-word'
  }


}));



function App() {

  const classes = useStyles();



  return (

    <div>
      <Navbar className={classes.appBarSpacing} />
      <Container maxWidth="fixed" className="App">
          <div  className={classes.appBarSpacing} />

          <Home/>

          <Grid  spacing={1} >

            {/* Hero Section */}

              {/* First Half */}

            <Grid className={"regularPadding"} item md={6}>

              <div className={classes.heroText}>

                <Typography  variant="h5"><span className={classes.labelHeader}>BLACSAND</span></Typography>
                <Typography className={classes.primaryHeader} variant="h2">DIGITAL PRODUCT DESIGN STUDIO</Typography>
                <Typography className={classes.secondaryHeader} variant="h5">Delivering on digital products, we are the creatives and engineers to handle your presence on the web</Typography>


              </div>
              <Button className={"raisedCard " + classes.btn} size='large' variant="contained">START A PROJECT</Button>



            </Grid>

            {/* Second Half */}

            <Grid item md={6}>



            </Grid>

            <Grid item md={12}>

              {/* simulated letter animation */}


            </Grid>

          </Grid>

          {/* end home section */}


          <Grid container className={classes.sectionContainers} spacing={4}>

            <Grid item md={4}>

              <Card className={classes.cardStyle + " raisedCard"}>
                <CardActionArea>

                  <CardContent className={classes.wrapping}>
                    <Typography className={classes.primaryHeader} variant="h4">Testing</Typography>
                      <Typography variant="p">Testingaslkdfja;lksjdfl;ajdkajd;fkjaksldjf;alkjsf;kajs;dlfkja;sdkjf;akjsdf;akjsf;akjdf;kja;lksjf;lkj;askdfj;laksjfd;akjsfd;akjdsf;lk</Typography>

                  </CardContent>
                </CardActionArea>
                <CardActions >
                  <span className={classes.btnCase}>
                    <Button className={classes.btn} size="large" color="secondary">
                    Learn More
                    </Button>
                  </span>

                </CardActions>
              </Card>

            </Grid>

            <Grid item md={4}>
              <Card className={classes.cardStyle + " raisedCard"}>
                <CardActionArea>

                  <CardContent className={classes.wrapping}>
                    <Typography className={classes.primaryHeader} variant="h4">Testing</Typography>
                      <Typography variant="p">Testingaslkdfja;lksjdfl;ajdkajd;fkjaksldjf;alkjsf;kajs;dlfkja;sdkjf;akjsdf;akjsf;akjdf;kja;lksjf;lkj;askdfj;laksjfd;akjsfd;akjdsf;lk</Typography>

                  </CardContent>
                </CardActionArea>
                <CardActions >
                  <span className={classes.btnCase}>
                    <Button className={classes.btn} size="large" color="secondary">
                    Learn More
                    </Button>
                  </span>

                </CardActions>
              </Card>


            </Grid>

            <Grid item md={4}>
              <Card className={classes.cardStyle + " raisedCard"}>
                <CardActionArea>

                  <CardContent className={classes.wrapping}>
                    <Typography className={classes.primaryHeader} variant="h4">Testing</Typography>
                      <Typography variant="p">Testingaslkdfja;lksjdfl;ajdkajd;fkjaksldjf;alkjsf;kajs;dlfkja;sdkjf;akjsdf;akjsf;akjdf;kja;lksjf;lkj;askdfj;laksjfd;akjsfd;akjdsf;lk</Typography>

                  </CardContent>
                </CardActionArea>
                <CardActions >
                  <span className={classes.btnCase}>
                    <Button className={classes.btn} size="large" color="secondary">
                    Learn More
                    </Button>
                  </span>

                </CardActions>
              </Card>


            </Grid>

          </Grid>

          <Grid className={classes.sectionContainers} spacing={4}>
            <Grid item md={12}>



            </Grid>

            <Grid item md={12}>



            </Grid>

          </Grid>

      </Container>

    </div>
  );
}
export default App;
