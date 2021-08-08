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
import QuestionResult from '../pages/QuestionResult';

class App extends Component {
   componentDidMount() {
      this.props.dispatch(handleInitialData());
   }

   PrivateRoute = ({ children, ...rest }) => {
      return (
         <Route
            {...rest}
            render={({ location }) => {
               return this.props.authedUser ? (
                  children
               ) : (
                  <Redirect
                     to={{
                        pathname: '/login',
                        state: { from: location },
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
                     <this.PrivateRoute path="/" exact>
                        <Home />
                     </this.PrivateRoute>
                     <this.PrivateRoute path="/leaderboard" exact>
                        <Leaderboard />
                     </this.PrivateRoute>
                     <this.PrivateRoute path="/newQuestion" exact>
                        <NewQuestion />
                     </this.PrivateRoute>
                     <this.PrivateRoute path="/question" exact>
                        <Question />
                     </this.PrivateRoute>
                     <this.PrivateRoute path="/questionResult" exact>
                        <QuestionResult />
                     </this.PrivateRoute>
                     <Route component={NotFound} />
                  </Switch>
               )}
            </Layout>
         </BrowserRouter>
      );
   }
}

function mapStateToProps({ users, authedUser }) {
   return {
      loading: Object.keys(users).length === 0,
      authedUser,
   };
}

export default connect(mapStateToProps)(App);
