import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import NavBar from '../main_component/Menu';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 0,
    },
    card: {
        maxWidth: 1000,
        margin: '107px 107px 107px 190px',
        padding: '10px',
        backgroundColor: '#fff9f7',
      },
  }));  

export default function DetailPage() {

  const classes = useStyles();

    return (
        <div className={classes.root}>
          <Grid>
            <NavBar />
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="Photo Country"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Photo Country"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                </CardActions>
            </Card>
          </Grid>
      </div>
    );
  }