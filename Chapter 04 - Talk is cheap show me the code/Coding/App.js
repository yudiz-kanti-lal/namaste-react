import React from 'react';
import ReactDOM from 'react-dom/client';

/**
 * Header
 *   -- logo
 *   -- Nav-items
 * Body
 *   -- search
 *   --RestaurentContainer
 *      -RestaurentCard
 *         -img
 *         -name of rest, star rating, cuisine, delivery time
 * Footer
 *   --Copyright
 *   --links
 *   --Address
 *   --contact
 */

const Header = () => {
  return (
    <div className='header'>
      <div className='logo-container'>
        <img
          className='logo'
          src='https://mir-s3-cdn-cf.behance.net/project_modules/hd/25539c29532269.55f7d6a0a8c71.jpg'
          alt='logo'
        />
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurentCard = ({ resname, cuisines, ratings, deliveryTime }) => {
  return (
    <div className='res-card'>
      <img
        className='res-logo'
        src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xqwpuhgnsaf18te7zvtv'
        alt='foods'
      />
      <h3>{resname}</h3>
      <h4>{cuisines}</h4>
      <h4>{ratings}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className='body'>
      <div className='search'>search</div>
      <div className='res-container'>
        <RestaurentCard
          resname='Meghna Foods'
          cuisines='Biryani, North Indian, Asian'
          ratings='4.4 stars'
          deliveryTime='38 minutes'
        />
        <RestaurentCard
          resname='KFC'
          cuisines='Burger, Fast Food'
          ratings='4.3 stars'
          deliveryTime='30 minutes'
        />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className='app'>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
