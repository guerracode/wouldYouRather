import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import logo from '../../assets/img/Logo.svg';
import profileImage from '../../assets/img/profileImage.jpeg';

const Menu = () => {
   const home = useRouteMatch('/');
   const newQuestion = useRouteMatch('/newQuestion');
   const leaderboard = useRouteMatch('/leaderboard');

   const changeSelected = (route) => {
      if (route?.isExact) return 'selected';
      return '';
   };

   return (
      <header className="menu">
         <figure className="menu__figure">
            <Link to="/">
               <img src={logo} alt="logo" />
            </Link>
         </figure>
         <nav className="menu__nav">
            <div className="links">
               <Link to="/" className={changeSelected(home)}>
                  Home
               </Link>
               <Link to="/newQuestion" className={changeSelected(newQuestion)}>
                  New Question
               </Link>
               <Link to="/leaderboard" className={changeSelected(leaderboard)}>
                  Leaderboard
               </Link>
            </div>
            <div className="links">
               <button>Logout</button>
               <div className="user">
                  <figure>
                     <img src={profileImage} alt="profile" />
                  </figure>
                  <p>Luis Chavez</p>
               </div>
            </div>
         </nav>
      </header>
   );
};

export default Menu;
