
import React, { useEffect,useState } from 'react';
import classes from './NavBar.module.css';
import axios from 'axios';

const NavBar = (props) => {
    const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setUsers(res.data);
      })
      .catch(error => {
        console.error('Error connecting to the server:', error);
      });
  }, []);

  return (
    <nav className={classes.navbar}>
      <div className={classes.logo}>Your Blog </div>
      <ul className={classes.navlinks}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Posts</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div className="user">
        <select onChange={(e) => props.onUserSelected(parseInt(e.target.value))}>
          {users.map(user => (
            <option key={user.id} value={user.id}>User {user.id}</option>
          ))}
        </select>
      </div>
    </nav>
  );
};

export default NavBar;
