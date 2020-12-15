import { Typography } from '@material-ui/core';
import React from 'react';
import Post from './Post/Post';
import useStyles from './styles';

const Posts =() =>
{
    const classes = useStyles();
    return (
        <>
        <Typography variant="h1">POSTS</Typography>
        <Post />
        <Post />
        </>
    );
}

export default Posts;