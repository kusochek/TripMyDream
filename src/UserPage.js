import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import NavBar from './Menu.js';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderTwoToneIcon from '@material-ui/icons/FavoriteBorderTwoTone';
import Fab from '@material-ui/core/Fab';

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
        display: 'flex',
        width: '250px',
        height: '200px',
      },
      controls: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        // marginTop: theme.spacing(18),
        // marginLeft: theme.spacing(51),
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

export default function UserPage() {

  const classes = useStyles();

    return (
        <div className={classes.root}>
          <Grid>
            <NavBar />
            <Container>
                <Grid>
                    <Box>
                    <Paper className={classes.paper}>
                        <Card className={classes.card}>
                            <div className={classes.media}>
                                <CardMedia
                                    className={classes.cover}
                                    image="rome.jpg"
                                    title="Country"
                                />
                            </div>
                            <div className={classes.details}>
                                <CardContent className={classes.content}>
                                    <Typography component="h5" variant="h5">
                                        Италия, Рим
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        Из Киева в Рим и на вулканическое озеро Альбано всего за 79€ туда-обратно! (осенью)
                                        <p><b> Даты: 20-28 серпня.</b></p>
                                    </Typography>
                                </CardContent>
                                <div className={classes.controls}>
                                    <CardActions className={classes.button}>                                    
                                        <IconButton aria-label="add to favorites">
                                            <FavoriteIcon />
                                        </IconButton>
                                        <Button size="small" color="primary">
                                            Подробнее...
                                        </Button>
                                    </CardActions>
                                </div>
                            </div>
                        </Card>
                    <Card className={classes.card}>
                        <div className={classes.media}>
                            <CardMedia
                                className={classes.cover}
                                image="zakintos.jpg"
                                title="Country"
                            />
                        </div>
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                                <Typography component="h5" variant="h5">
                                    На остров Закинтос
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    "Горящий" чартер с Варшавы на остров Закинтос всего-лишь за 101€ туда-обратно! С багажом!
                                    <p><b> Даты: 16-30 августа.</b></p>
                                </Typography>
                            </CardContent>
                        <div className={classes.controls}>
                            <CardActions>
                                <Button className={classes.button} size="small" color="primary">
                                    Подробнее...
                                </Button>
                            </CardActions>
                        </div>
                    </div>
                    </Card>
                    <Card className={classes.card}>
                        <div className={classes.media}>
                            <CardMedia
                                className={classes.cover}
                                image="RedSea.jpeg"
                                title="Country"
                            />
                        </div>
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                                <Typography component="h5" variant="h5">
                                    Египет, Красное море
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    Осенью из Варшавы на Красное море всего за 37€ туда-обратно!
                                    <p><b> Даты: некоторые в октябре-ноябре.</b></p>
                                </Typography>
                            </CardContent>
                        <div className={classes.controls}>
                            <CardActions>
                                <Button className={classes.button} size="small" color="primary">
                                    Подробнее...
                                </Button>
                            </CardActions>
                        </div>
                    </div>
                    </Card>
                    <Card className={classes.card}>
                        <div className={classes.media}>
                            <CardMedia
                                className={classes.cover}
                                image="menorka.jpeg"
                                title="Country"
                            />
                        </div>
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                                <Typography component="h5" variant="h5">
                                    Остров Менорка
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    Чартер с Варшавы на остров Менорка за 92€ туда-обратно с багажом!
                                    <p><b> Даты: 23 августа — 6 сентября.</b></p>
                                </Typography>
                            </CardContent>
                        <div className={classes.controls}>
                            <CardActions>
                                <Button className={classes.button} size="small" color="primary">
                                    Подробнее...
                                </Button>
                            </CardActions>
                        </div>
                    </div>
                    </Card>
                    <Card className={classes.card}>
                        <div className={classes.media}>
                            <CardMedia
                                className={classes.cover}
                                image="Norvegian.jpg"
                                title="Country"
                            />
                        </div>
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                                <Typography component="h5" variant="h5">
                                    Норвегия: Осло, Берген, Ставенгер, Олесунн
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    Дешевые авиабилеты в Осло и другие города Норвегии с Украины от €44 в две стороны!
                                    <p><b> Даты: сентябрь - ноябрь.</b></p>
                                </Typography>
                            </CardContent>
                        <div className={classes.controls}>
                            <CardActions>
                                <Button className={classes.button} size="small" color="primary">
                                    Подробнее...
                                </Button>
                            </CardActions>
                        </div>
                    </div>
                    </Card>
                    </Paper>
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
                <Fab color="secondary" aria-label="add" className={classes.margin}>
                    <FavoriteBorderTwoToneIcon />
                </Fab>
            </Grid>  
          </Grid>
      </div>
    );
  }