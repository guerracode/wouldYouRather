import React, { Component } from 'react';
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
                     <h1>Unanswered</h1>
                  ) : (
                     <>
                        <QuestionHome />
                        <QuestionHome />
                        <QuestionHome />
                     </>
                  )}
               </div>
            </div>
         </section>
      );
   }
}

export default Home;
