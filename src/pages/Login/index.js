import React, { Component } from 'react';
import CardBoxContainer from '../../components/CardBoxContainer';

import profile from '../../assets/img/profile.svg';

class Login extends Component {
   headerSection = () => (
      <h6 className="login__header">Welcome to the Would You Rather App!</h6>
   );

   render() {
      return (
         <section className="login">
            <CardBoxContainer
               buttonText="Sign In"
               headerSection={this.headerSection()}
            >
               <div className="login__content">
                  <figure>
                     <img src={profile} alt="profile" />
                  </figure>
                  <p>Please sign in to continue</p>
                  <div className="inputs">
                     <input placeholder="Username" />
                     <input placeholder="Password" />
                  </div>
                  <p>
                     Not a member yet? <button>Create Account</button>
                  </p>
               </div>
            </CardBoxContainer>
         </section>
      );
   }
}

export default Login;
