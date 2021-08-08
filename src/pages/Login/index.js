import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardBoxContainer from '../../components/CardBoxContainer';
import { handleAuthedUser } from '../../actions/authedUser';

import profile from '../../assets/img/profile.svg';

class Login extends Component {
   state = {
      user: this.props.users[0],
   };

   headerSection = () => (
      <h6 className="login__header">Welcome to the Would You Rather App!</h6>
   );

   handleSubmit = () => {
      this.props.dispatch(handleAuthedUser(this.state.user));
      this.props.history.push(this.props.location.state?.from || '/');
   };

   handleChange = (event) => {
      console.log('== HandleChange', this.props.users);
      console.log('== HandleChange', this.props.users[event.target.value]);
      this.setState({ user: this.props.users[event.target.value] });
   };

   render() {
      console.log('VALUE', this.state.user);
      return (
         <section className="login">
            <CardBoxContainer
               buttonText="Sign In"
               onClick={this.handleSubmit}
               headerSection={this.headerSection()}
            >
               <div className="login__content">
                  <figure>
                     <img src={profile} alt="profile" />
                  </figure>
                  <p>Please sign in to continue</p>
                  <div className="inputs">
                     <select
                        value={this.state.user}
                        onChange={this.handleChange}
                     >
                        {this.props.users.map((user, index) => (
                           <option key={user.id} value={index}>
                              {user.name}
                           </option>
                        ))}
                     </select>
                  </div>
               </div>
            </CardBoxContainer>
         </section>
      );
   }
}

function mapStateToProps({ users }) {
   return {
      users: Object.values(users),
   };
}

export default connect(mapStateToProps)(Login);
