import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import NavBar from './Menu.js';
import MediaCard from './ExpansionPanels.js';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 0,
    },
  }));  

export default function MainPage() {

  const classes = useStyles();

    return (
        <div className={classes.root}>
          <Grid>
            <NavBar />
            <Container>
                <Grid>
                    <Box>
                        <MediaCard />
                    </Box>
                </Grid>
            </Container>
          </Grid>
      </div>
    );
  }
  