import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import classes from './header.module.css';
import { useAuth } from '../../hooks/useAuth';

export default function Header({ shouldFixHeader }) {
  const { user, logout } = useAuth();

  const { cart } = useCart();

  return (
    <header className={`${classes.header} ${shouldFixHeader ? classes.fixed : ''}`}>
      <div className={classes.container}>
        <Link to="/" className={classes.logo}>
          RUNSPORTS
        </Link>
        <ul>
            <li>
              <Link to='/'>Home</Link>
              <Link to='/aboutus'>AboutUs</Link>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        <nav>
          <ul>
            {user ? (
              <li className={classes.menu_container}>
                <Link to="/dashboard">{user.name}</Link>
                <div className={classes.menu}>
                  <Link to="/profile">Profile</Link>
                  <Link to="/orders">Orders</Link>
                  <a onClick={logout}>Logout</a>
                </div>
              </li>
            ) : (
              <Link to="/login">Login</Link>
            )}

            <li>
              <Link to="/cart">
                Cart
                {cart.totalCount > 0 && (
                  <span className={classes.cart_count}>{cart.totalCount}</span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
