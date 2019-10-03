import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Skilles from './skilles';
import dataSkills from '../data/data_skills';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 300,
        width: 200,
    },
    control: {
        padding: theme.spacing(2),
    },
}));

export default function Skills() {
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();

    const handleChange = event => {
        setSpacing(Number(event.target.value));
    };

    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={spacing}>
                    {
                        dataSkills.map((value,index) => (

                            <Grid key={index} item>
                                <Skilles skill={value} />
                            </Grid>
                        ))
                    }
                </Grid>
            </Grid>
        </Grid>
    );
}