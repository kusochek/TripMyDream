import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputBase from '@material-ui/core/InputBase';
import CardMedia from '@material-ui/core/CardMedia';
import { Grid } from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    title: {
      flexGrow: 0,
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(0),
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 120,
        '&:focus': {
          width: 200,
        },
      },
    },
    media: {
      width: '15%',
    },
    bar: {
      backgroundColor: '#dc8998',
    }
  }));
  
function ElevationScroll(props) {
    const { children, window } = props;
  
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
};
  

export default function NavBar(props) {
    const classes = useStyles();
  
    return (
        <Grid>
            <ElevationScroll {...props}>
                <AppBar className={classes.bar}>
                    <Toolbar>
                        <Grid 
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="center">
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon />
                                </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                            </div>
                            <div className={classes.media}>
                                <RouterLink to ="/">                                
                                    <CardMedia
                                    component="img"
                                    alt="TripMyDream"
                                    image="TripMyDream.png"
                                    title="TripMyDream"
                                    />
                                </RouterLink>
                            </div>
                            <div>
                                <IconButton
                                color="inherit"
                                >
                                <RouterLink to ="/admin"><AccountCircle /> </RouterLink>
                                
                                </IconButton>
                            </div>            
                        </Grid>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
        </Grid>
    );
  }