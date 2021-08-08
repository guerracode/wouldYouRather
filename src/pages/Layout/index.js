import React from 'react';
import { connect } from 'react-redux';
import { handleAuthedUser } from '../../actions/authedUser';
import Menu from '../../components/Menu';

const Layout = ({ children, authedUser, dispatch }) => {
   const handleLogout = () => {
      dispatch(handleAuthedUser());
   };

   return (
      <div className="layout">
         <Menu authedUser={authedUser} handleLogout={handleLogout} />
         {children}
      </div>
   );
};

function mapStateToProps({ authedUser }) {
   return {
      authedUser,
   };
}

export default connect(mapStateToProps)(Layout);
