import React from "react";
import classes from './footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className="container">
        <span className="text-muted">&copy; Gatsby Project 2020</span>
      </div>
    </footer>
  );
};

export default Footer;
