import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { MediaCard, MediaCardAdmin} from './MediaCard';
import Paper from '@material-ui/core/Paper';
import { data } from './data';

const useStyles = makeStyles(theme => ({
    paper: {
        margin: '107px',
        padding: '10px',
        backgroundColor: '#fff9f7',
      },
    })
);

export const List = () => {
    const classes = useStyles();

      return (
        <Paper className={classes.paper}>
            {data.map(item => (
                <MediaCard
                    key={item.id}
                    country={item.country}
                    info={item.info}
                    media={item.media}
                />
            )) }
        </Paper>
      );
    };

export const ListAdmin = () => {
    const classes = useStyles();

      return (
        <Paper className={classes.paper}>
            {data.map(item => (
                <MediaCardAdmin
                    key={item.id}
                    country={item.country}
                    info={item.info}
                    media={item.media}
                />
            )) }
        </Paper>
      );
    };
