import React from 'react';
import '../Styles/transactionCss.css'
import { makeStyles } from '@material-ui/core/styles';
import RegisterImage from '../Assets/register.jpg'
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
        // fontFamily: 'Satisfy'
    },
    text: {
        fontFamily: 'Satisfy',
        fontSize: '3em'
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        marginTop:'3em',
        maxWidth: 500,
    },
    title:{
        textAlign:"center"
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        // marginTop: '5em',
        // marginRight:'2em',
        margin:'auto',
        display: 'block',
        width: '125%',
        height:'120%',
        // maxWidth: '100%',
        // maxHeight: '140%',
    },
}));


export default function FormPropsTextFields() {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>

                <Paper className={classes.paper}>
                <Typography gutterBottom variant="subtitle1">
                                        <h3 className={classes.title}>Register the Card</h3>
                </Typography>
                    <Grid container spacing={2}>
                        <Grid item>
                            <ButtonBase className={classes.image}>
                                <img className={classes.img} alt="complex" src={RegisterImage} />
                            </ButtonBase>                    
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>                   
                                    <div className={classes.margin}>
                                        <Grid container spacing={1} alignItems="flex-end">
                                            <Grid item>
                                                <FingerprintIcon />
                                            </Grid>
                                            <Grid item>
                                                <TextField id="input-with-icon-grid" label="UUID" />
                                            </Grid>
                                        </Grid>
                                    </div>

                                    <div className={classes.margin}>
                                        <Grid container spacing={1} alignItems="flex-end">
                                            <Grid item>
                                                <AccountCircle />
                                            </Grid>
                                            <Grid item>
                                                <TextField id="input-with-icon-grid" label="Customer Name" />
                                            </Grid>
                                        </Grid>
                                    </div>

                                    <div className={classes.margin}>
                                        <Grid container spacing={1} alignItems="flex-end">
                                            <Grid item>
                                                <MoneyOffIcon />
                                            </Grid>
                                            <Grid item>
                                                <TextField id="input-with-icon-grid" label="Initial Balance" />
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Grid>
                                <Grid item>
                                    <Button variant="contained" color="secondary">
                                        Record Card
      </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        </form>
    );
}