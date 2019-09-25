import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    margin: '10px',
    position: 'relative',
    overflow: 'auto',
    height: '200px',
    // backgroundColor: '#fff9f7',
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
    width: '250px',
    height: '200px',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  button: {
    position: 'absolute',
    right: '10px',
    bottom: '1px',
  },
  
}));

export const MediaCard = (props) => {
  const classes = useStyles();
    
  return (
    <Card className={classes.card}>
        <div className={classes.media}>
            <CardMedia
                className={classes.cover}
                image={props.media}
                title="Country"
            />
        </div>
        <div className={classes.details}>
            <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                    {props.country}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    {props.info}
                    <p><b> Даты: 20-28 серпня.</b></p>
                </Typography>
            </CardContent>
            <div className={classes.controls}>
                <CardActions>
                    <Button className={classes.button} size="small" color="primary">
                      <RouterLink to ="/detail" variant="body2">
                        Подробнее...
                      </RouterLink>
                    </Button>
                </CardActions>
            </div>
        </div>
    </Card>
                
  );
};


export const MediaCardAdmin = (props) => {
  const classes = useStyles();
    
  return (
    <Card className={classes.card}>
      <div className={classes.media}>
          <CardMedia
              className={classes.cover}
              image={props.media}
              title="Country"
          />
      </div>
      <div className={classes.details}>
          <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                  {props.country}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                  {props.info}
                  <p><b> Даты: 20-28 серпня.</b></p>
              </Typography>
          </CardContent>
          <div className={classes.controls}>
              <CardActions className={classes.button}>
                  <IconButton aria-label="edit">
                      <EditIcon />
                  </IconButton>
                  <IconButton aria-label="delete">
                      <DeleteIcon />
                  </IconButton>
                  <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                  </IconButton>
                  <Button size="small" color="primary">
                      <RouterLink to ="/detail" variant="body2">
                          Подробнее...
                      </RouterLink>
                  </Button>
              </CardActions>
          </div>
      </div>
    </Card>
  );
};

