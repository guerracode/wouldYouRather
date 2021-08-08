import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionHome from '../../components/QuestionHome';

class Home extends Component {
   state = {
      answeredSection: false,
   };

   handleChangeTab = () => {
      this.setState((currentState) => ({
         ...currentState,
         answeredSection: !currentState.answeredSection,
      }));
   };

   handleViewPoll = (id) => {
      this.props.history.push(`/questions/${id}`);
   };

   render() {
      return (
         <section className="home">
            <div className="home__wrapper">
               <div className="nav">
                  <button onClick={this.handleChangeTab}>
                     <span
                        className={`${
                           !this.state.answeredSection && 'selected'
                        }`}
                     >
                        Unanswered Questions
                     </span>
                  </button>
                  <button onClick={this.handleChangeTab}>
                     <span
                        className={`${
                           this.state.answeredSection && 'selected'
                        }`}
                     >
                        Answered Questions
                     </span>
                  </button>
               </div>
               <div className="content">
                  {this.state.answeredSection ? (
                     <>
                        {this.props.answeredQuestions.map((question) => (
                           <QuestionHome
                              onClick={() => this.handleViewPoll(question.id)}
                              key={question.id}
                              data={question}
                              users={this.props.users}
                           />
                        ))}
                     </>
                  ) : (
                     <>
                        {this.props.unansweredQuestions.map((question) => (
                           <QuestionHome
                              onClick={() => this.handleViewPoll(question.id)}
                              key={question.id}
                              data={question}
                              users={this.props.users}
                           />
                        ))}
                     </>
                  )}
               </div>
            </div>
         </section>
      );
   }
}

function mapStateToProps({ authedUser, questions, users }) {
   const answeredQuestions = Object.values(questions)
      .filter(
         (question) =>
            question.optionOne.votes.includes(authedUser.id) ||
            question.optionTwo.votes.includes(authedUser.id)
      )
      .sort(function (x, y) {
         return y.timestamp - x.timestamp;
      });
   const unansweredQuestions = Object.values(questions)
      .filter(
         (question) =>
            !question.optionOne.votes.includes(authedUser.id) &&
            !question.optionTwo.votes.includes(authedUser.id)
      )
      .sort(function (x, y) {
         return y.timestamp - x.timestamp;
      });

   return {
      authedUser,
      answeredQuestions,
      unansweredQuestions,
      users,
   };
}

export default connect(mapStateToProps)(Home);
