import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import logo from '../images/avatar.jpeg';

const useStyles = makeStyles({
    avatar: {
        margin: 10,
    },
    bigAvatar: {
        margin: 1,
        width: 200,
        height: 250,

    },
});

export default function ImageAvatars() {
    const classes = useStyles();

    return (
        <div>
            <Avatar alt="Remy Sharp" src={logo} className={classes.bigAvatar} />
        </div>
    );
}