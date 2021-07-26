import React, { Component } from 'react';
import CardBoxContainer from '../../components/CardBoxContainer';
import QuestionResultBox from '../../components/QuestionResultBox';

import profileImage from '../../assets/img/profileImage.jpeg';

class QuestionResult extends Component {
   headerSection = () => (
      <div className="question__header">
         <figure>
            <img src={profileImage} alt="profile" />
         </figure>
         <div>
            <h6>Luis Chavez</h6>
            <p>Asks:</p>
         </div>
      </div>
   );

   render() {
      return (
         <section className="result">
            <CardBoxContainer
               buttonText="Submit"
               headerSection={this.headerSection()}
               buttonActive={false}
            >
               <div className="result__content">
                  <QuestionResultBox
                     questionText="find $50 your self?"
                     selectedQuestion
                  />
                  <p>or</p>
                  <QuestionResultBox questionText="find $50 your self?" />
               </div>
            </CardBoxContainer>
         </section>
      );
   }
}

export default QuestionResult;
