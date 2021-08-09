import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import { handleInitialData } from '../actions/shared';

import Layout from '../pages/Layout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Leaderboard from '../pages/Leaderboard';
import NewQuestion from '../pages/NewQuestion';
import NotFound from '../pages/NotFound';
import Question from '../pages/Question';

class App extends Component {
   componentDidMount() {
      this.props.dispatch(handleInitialData());
   }

   PrivateRoute = ({ component: Component, ...rest }) => {
      return (
         <Route
            {...rest}
            render={(props) => {
               return this.props.authedUser?.id ? (
                  <Component {...props} />
               ) : (
                  <Redirect
                     to={{
                        pathname: '/login',
                        state: { from: props.location },
                     }}
                  />
               );
            }}
         />
      );
   };

   render() {
      return (
         <BrowserRouter>
            <LoadingBar />
            <Layout>
               {this.props.loading === true ? null : (
                  <Switch>
                     <Route path="/login" exact component={Login} />
                     <this.PrivateRoute path="/" exact component={Home} />
                     <this.PrivateRoute
                        path="/leaderboard"
                        exact
                        component={Leaderboard}
                     />

                     <this.PrivateRoute
                        path="/add"
                        exact
                        component={NewQuestion}
                     />
                     <this.PrivateRoute
                        path="/questions/:question_id"
                        exact
                        component={Question}
                     />
                     <this.PrivateRoute component={NotFound} />
                  </Switch>
               )}
            </Layout>
         </BrowserRouter>
      );
   }
}

function mapStateToProps({ authedUser, questions }) {
   return {
      loading: Object.keys(questions).length === 0,
      authedUser,
   };
}

export default connect(mapStateToProps)(App);
