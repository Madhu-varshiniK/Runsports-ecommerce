

import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import classes from './dashboard.module.css';
import { Link, useLocation } from 'react-router-dom';

export default function Dashboard() {
  const { user } = useAuth();
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={classes.wrapper}>
      {/* <div className={classes.welcome}>
        {user && <p>Welcome, {user.name}</p>}
      </div> */}
      <div className={`${classes.container} ${showMenu ? classes.showMenu : ''}`}>
        <div className={classes.menu}>
          {allItems
            .filter(item => user.isAdmin || !item.forAdmin)
            .map(item => (
              <Link
                key={item.title}
                to={item.url}
                style={{
                  backgroundColor: item.bgColor,
                  color: item.color,
                }}
              >
                <img src={item.imageUrl} alt={item.title} />
                <h2>{item.title}</h2>
              </Link>
            ))}
        </div>
        {location.pathname === '/dashboard' && ( // Check if current path is /dashboard
          <div className={classes.additionalContainer}>
            {/* Add your content here */}
            <img src="https://png.pngtree.com/thumb_back/fh260/background/20230703/pngtree-d-smartphone-with-gifts-and-discount-percentage-e-commerce-web-banner-image_3753281.jpg" alt="Additional Content" />
            <div className={classes.welcome}>
        {user && <p>Welcome, {user.name}</p>}
      </div>
          </div>
        )}
      </div>
      {/* <button onClick={toggleMenu}>Toggle Menu</button> */}
    </div>
  );
}

const allItems = [
  {
    title: 'Orders',
    imageUrl: '/icons/orders.svg',
    url: '/orders',
    bgColor: '#e67e22',
    color: 'white',
  },
  {
    title: 'Profile',
    imageUrl: '/icons/profile.svg',
    url: '/profile',
    bgColor: '#e67e22',
    color: 'white',
  },
  {
    title: 'Users',
    imageUrl: '/icons/users.svg',
    url: '/admin/users',
    forAdmin: true,
    bgColor: '#e67e22',
    color: 'white',
  },
  {
    title: 'Products',
    imageUrl: 'https://icon-library.com/images/products-icon/products-icon-15.jpg',
    url: '/admin/foods',
    forAdmin: true,
    bgColor: '#e67e22',
    color: 'white',
  },
];
