import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import classes from './Main.module.css';

const Main = ({ userSelected }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userSelected}`)
      .then(res => {
        setPosts(res.data);
      })
      .catch(error => {
        console.error('Error connecting to server:', error);
      });
  }, [userSelected]);

  return (
    <div className={classes.main}>
      {posts.map(post => (
        <Card key={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
};

export default Main;
