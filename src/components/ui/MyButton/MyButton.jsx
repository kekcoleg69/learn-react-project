import React from "react";
import classes from "./MyButton.module.css";
console.log(classes);
function MyButton({ children, ...props }) {
  return (
    <button className={classes.btn} {...props}>
      {children}
    </button>
  );
}

export default MyButton;
