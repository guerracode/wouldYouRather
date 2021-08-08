import React from 'react';

const questionResultBox = ({
   questionText,
   selectedQuestion = false,
   totalVotes = 0,
   votes = 0,
}) => {
   const getPercentage = () => {
      return Math.round((votes / totalVotes) * 100) || 0;
   };

   return (
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
            <div>
               <h6>Would you rather...</h6>
               <p>{questionText}</p>
            </div>
            <div className="numberOfVotes">
               <p>
                  {votes} out of {totalVotes} votes
               </p>
            </div>
         </div>
         <div
            className="questionResultBox__percentage"
            style={{
               width: `${getPercentage() ? getPercentage() : 18}%`,
               backgroundColor: `${getPercentage() ? null : 'transparent'}`,
            }}
         >
            <p>{getPercentage()}%</p>
         </div>
      </article>
   );
};

export default questionResultBox;
