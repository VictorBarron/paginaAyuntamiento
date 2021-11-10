import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import img1 from '../../images/cancer1.jpeg'
import img2 from '../../images/protesta.jpeg'

import './Eventos.css'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function FullWidthGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>

                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                    <div class="containerEven">
                            <img src={img2} alt="Notebook" className='ImgEven'/>
                            <div class ="contentEven">
                            <h1>1 de septiembre</h1>
                            <p>Toma de protesta del presidente electo Cesar Arturo Valencia</p>
                            </div>
                        </div>
                 
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                    <div class="containerEven">
                            <img src={img1} alt="Notebook" className='ImgEven'/>
                            <div class ="contentEven">
                            <h1>19 de octubre</h1>
                            <p>Día Mundial de la Lucha contra el Cáncer de Mama.</p>
                            </div>
                        </div>
                        </Paper>
                </Grid>
            </Grid>
        </div>
    );
}