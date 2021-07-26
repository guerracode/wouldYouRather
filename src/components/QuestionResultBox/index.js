import React from 'react';

const questionResultBox = ({
   questionText,
   percent = '0%',
   selectedQuestion = false,
}) => (
   <article className="questionResultBox">
      <div
         className={`questionResultBox__wrapper ${
            selectedQuestion && 'selectedQuestion'
         }`}
      >
         <div
            className={` ${
               selectedQuestion ? 'selectedQuestion yourVote' : 'disabled'
            }`}
         >
            <p>YOUR VOTE</p>
         </div>
         <h6>Would you rather...</h6>
         <p>{questionText}</p>
      </div>
      <div className="questionResultBox__percentage" style={{ width: '70%' }}>
         <p>{percent}</p>
      </div>
   </article>
);

export default questionResultBox;
