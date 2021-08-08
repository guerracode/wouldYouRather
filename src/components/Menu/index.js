import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import logo from '../../assets/img/Logo.svg';

const Menu = ({ authedUser, handleLogout }) => {
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
            {authedUser && (
               <div className="links">
                  <button onClick={handleLogout}>Logout</button>
                  <div className="user">
                     <figure>
                        <img src={authedUser.avatarURL} alt="profile" />
                     </figure>
                     <p>{authedUser.name}</p>
                  </div>
               </div>
            )}
         </nav>
      </header>
   );
};

export default Menu;
