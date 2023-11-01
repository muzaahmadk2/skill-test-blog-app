import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.content}>
        <h2>{props.title}</h2>
        <p>{props.body}</p>
      </div>
    </div>
  );
};

export default Card;
