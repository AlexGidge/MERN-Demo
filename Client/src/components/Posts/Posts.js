import { Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { TextField, Button, Paper } from '@material-ui/core';
import Post from './Post/Post';
import useStyles from './styles';

const Posts = () => {

  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  console.log(posts);

  return (
    <>
      <Typography variant="h1">POSTS</Typography>
      <Post />
      <Post />
    </>
  );
};

export default Posts;
