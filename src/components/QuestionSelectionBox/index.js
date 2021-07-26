import React from 'react';

const QuestionSelectionBox = ({
   questionText,
   onClick,
   selectedButton = false,
}) => (
   <button
      onClick={onClick}
      className={`questionSelectionBox ${selectedButton && 'selectedButton'}`}
   >
      <div>
         <h6>Would you rather...</h6>
         <p>{questionText}</p>
      </div>
      <p>click to choose</p>
   </button>
);

export default QuestionSelectionBox;
