import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import NavBar from '../main_component/Menu';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { ListAdmin } from '../main_component/listItem';
import { data } from '../main_component/data';
import { Link as RouterLink } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 0,
      position: 'reletive',
    },
    card: {
        display: 'flex',
        margin: '10px',
        overflow: 'auto',
        height: '200px',
        alignItems: 'center',
      },
      details: {
        display: 'flex',
        flexDirection: 'column',
      },
      content: {
        flex: '1 0 auto',
      },
      cover: {
        width: '250px',
        height: '200px',
      },
      media: {
        display: 'flex',
        width: '250px',
        height: '200px',
      },
      controls: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
      },
      paper: {
        margin: '107px',
        padding: '10px',
        backgroundColor: '#fff9f7',
      },
      addButton: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
      },
  }));  

const AdminPage = props => {

  const classes = useStyles();

    return (
        <div className={classes.root}>
          <Grid>
            <NavBar />
            <Container>
                <Grid>
                    <Box>
                       <ListAdmin data={data} />
                    </Box>
                </Grid>
            </Container>
            <Grid 
            className={classes.addButton}
            container
            direction="row"
            justify="flex-end"
            alignItems="center" 
            >
                <RouterLink to ="/add" variant="body2">
                    <Fab color="primary" aria-label="add" className={classes.margin}>
                        <AddIcon />
                    </Fab>
                  </RouterLink>
            </Grid>    
          </Grid>
      </div>
    );
};

export default AdminPage;