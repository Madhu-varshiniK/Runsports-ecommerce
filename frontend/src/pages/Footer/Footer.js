import React from 'react';
import styles from './footer.module.css'; // Import the CSS module
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styles["footer-distributed"]}> {/* Use styles from CSS module */}
      <div className={styles["footer-right"]}>
        <a href="#"><i className="fa fa-facebook"></i></a>
        <a href="#"><i className="fa fa-twitter"></i></a>
        <a href="#"><i className="fa fa-linkedin"></i></a>
        <a href="#"><i className="fa fa-github"></i></a>
      </div>
      <div className={styles["footer-left"]}>
        <p className={styles["footer-links"]}>
          <a className={styles["link-1"]} href="#">Home</a>
          <Link to='/aboutus'>Blog</Link>
          <Link to='/tag/All'>Products</Link>
          <Link to='/contact'>Contact</Link>
        </p>
        <p>RunSports &copy; 2019</p>
      </div>
    </footer>
  );
};

export default Footer;
