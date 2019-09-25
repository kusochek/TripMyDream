import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import NavBar from '../main_component/Menu';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { List } from '../main_component/listItem';
import { data } from '../main_component/data';


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
                        <List data={data}/>
                    </Box>
                </Grid>
            </Container>
          </Grid>
      </div>
    );
  }
  