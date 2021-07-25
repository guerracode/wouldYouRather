import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from '../pages/Layout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Leaderboard from '../pages/Leaderboard';
import NewQuestion from '../pages/NewQuestion';
import NotFound from '../pages/NotFound';
import Question from '../pages/Question';
import QuestionResult from '../pages/QuestionResult';

class App extends Component {
   render() {
      return (
         <BrowserRouter>
            <Layout>
               <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/login" exact component={Login} />
                  <Route path="/leaderboard" exact component={Leaderboard} />
                  <Route path="/newQuestion" exact component={NewQuestion} />
                  <Route path="/question" exact component={Question} />
                  <Route
                     path="/questionResult"
                     exact
                     component={QuestionResult}
                  />
                  <Route component={NotFound} />
               </Switch>
            </Layout>
         </BrowserRouter>
      );
   }
}

export default App;
