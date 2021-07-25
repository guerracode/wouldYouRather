import React from 'react';

import profileImage from '../../assets/img/profileImage.jpeg';

const QuestionHome = () => (
   <article className="questionHome">
      <div className="questionHome__wrapper">
         <div className="questionHome__wrapper-header">
            <h6>Luis Chavez Asks:</h6>
         </div>
         <div className="questionHome__wrapper-content">
            <div className="image">
               <figure>
                  <img src={profileImage} alt="person" />
               </figure>
            </div>
            <div className="text">
               <h5>Would you rather</h5>
               <p>Be Tall ...</p>
               <div>
                  <div />
                  <p>or</p>
                  <div />
               </div>
               <p>Be Small ...</p>
            </div>
         </div>
      </div>
      <button className="questionHome__button">View Poll</button>
   </article>
);

export default QuestionHome;
