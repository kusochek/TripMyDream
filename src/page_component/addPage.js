import React from 'react';
import 'date-fns';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import NavBar from '../main_component/Menu';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import LinkIcon from '@material-ui/icons/Link';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 0,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
    margin: {
        margin: theme.spacing(1),
    },
    paper: {
        margin: '107px',
        padding: '10px',
        backgroundColor: '#fff9f7',
      },
      addButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
      },
  }));  

export default function AddPage() {

  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: '',
    amount: '',
  });
  const [selectedDate, setSelectedDate] = React.useState(new Date('2019-08-01T21:11:54'));

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  function handleDateChange(date) {
    setSelectedDate(date);
  };

    return (
        <div className={classes.root}>
            <Grid>
                <NavBar />
                <Paper className={classes.paper}>
                    <form className={classes.container} noValidate autoComplete="off">
                        <TextField
                        id="outlined-name"
                        label="Город"
                        className={classes.textField}
                        value={values.name}
                        onChange={handleChange('name')}
                        placeholder="Город"
                        margin="normal"
                        variant="outlined"
                        />
                        <TextField
                        id="outlined-full-width"
                        label="Краткое описание"
                        multiline
                        style={{ margin: 8 }}
                        placeholder="Описание"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        />
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container justify="space-around">
                                <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="Дата от"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                'aria-label': 'change date',
                                }}
                                />
                                <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="Дата до"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                'aria-label': 'change date',
                                }}
                                />
                            </Grid>
                        </MuiPickersUtilsProvider>
                        <TextField
                        id="outlined-full-width"
                        label="Полное описание"
                        multiline
                        style={{ margin: 8 }}
                        placeholder="Описание"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        />
                        <FormControl fullWidth className={classes.margin}>
                        <InputLabel htmlFor="adornment-amount">Ссылка</InputLabel>
                        <Input
                        id="adornment-amount"
                        value={values.amount}
                        onChange={handleChange('amount')}
                        startAdornment={
                            <InputAdornment position="start">
                              <LinkIcon />
                            </InputAdornment>
                          }
                        />
                        </FormControl>
                    </form>
                    <div className={classes.addButton}>
                      <RouterLink to ="/admin" variant="body2">
                        <Button size="large">
                          Сохранить
                        </Button>
                      </RouterLink>
                    </div>
                </Paper>
            </Grid>
        </div>
    );
}