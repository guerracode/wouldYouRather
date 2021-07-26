import React, { Component } from 'react';
import CardBoxContainer from '../../components/CardBoxContainer';
import QuestionSelectionBox from '../../components/QuestionSelectionBox';

import profileImage from '../../assets/img/profileImage.jpeg';

class Question extends Component {
   headerSection = () => (
      <div className="question__header">
         <figure>
            <img src={profileImage} alt="profile" />
         </figure>
         <div>
            <h6>Asked by</h6>
            <p>Luis Chavez</p>
         </div>
      </div>
   );

   render() {
      return (
         <section className="question">
            <CardBoxContainer
               buttonText="Submit"
               headerSection={this.headerSection()}
            >
               <div className="question__content">
                  <QuestionSelectionBox
                     questionText="find $50 your self?"
                     selectedButton
                  />
                  <p>or</p>
                  <QuestionSelectionBox questionText="find $50 your self?" />
               </div>
            </CardBoxContainer>
         </section>
      );
   }
}

export default Question;
