import React from 'react';

const CardBoxContainer = ({ buttonText, onClick, headerSection, children }) => (
   <section className="boxContainer">
      <div className="boxContainer__wrapper">
         <div className="boxContainer__header">{headerSection}</div>
         {children}
      </div>
      <button onClick={onClick} className="boxContainer__button">
         {buttonText}
      </button>
   </section>
);

export default CardBoxContainer;
