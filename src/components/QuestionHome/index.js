import React from 'react';

const QuestionHome = ({ onClick, data, users }) => (
   <article className="questionHome">
      <div className="questionHome__wrapper">
         <div className="questionHome__wrapper-header">
            <h6>{users[data.author].name} Asks:</h6>
         </div>
         <div className="questionHome__wrapper-content">
            <div className="image">
               <figure>
                  <img src={users[data.author].avatarURL} alt="person" />
               </figure>
            </div>
            <div className="text">
               <h5>Would you rather</h5>
               <p>{data.optionOne.text}</p>
               <div>
                  <div />
                  <p>or</p>
                  <div />
               </div>
               <p>{data.optionTwo.text}</p>
            </div>
         </div>
      </div>
      <button onClick={onClick} className="questionHome__button">
         View Poll
      </button>
   </article>
);

export default QuestionHome;
