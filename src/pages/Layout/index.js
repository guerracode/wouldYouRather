import React from 'react';
import Menu from '../../components/Menu';

const Layout = ({ children }, props) => {
   console.log('Layout Pathname:: ', props);
   return (
      <div className="layout">
         <Menu />
         {children}
      </div>
   );
};

export default Layout;
