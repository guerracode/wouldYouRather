import React, { useEffect, useState } from 'react';

const QuestionResultBox = ({
   questionText,
   selectedQuestion = false,
   totalVotes = 0,
   votes = 0,
}) => {
   const [percentage, setPercentage] = useState(0);

   // const getPercentage = (vot, total) => {
   //    return Math.round((vot / total) * 100) || 0;
   // };

   useEffect(() => {
      const result = Math.round((votes / totalVotes) * 100) || 0;
      setPercentage(result);
   }, [totalVotes, votes]);

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
               width: `${percentage ? percentage : 18}%`,
               backgroundColor: `${
                  percentage === 0 ? 'transparent' : '#AB3428'
               }`,
            }}
         >
            <p>{percentage}%</p>
         </div>
      </article>
   );
};

export default QuestionResultBox;
