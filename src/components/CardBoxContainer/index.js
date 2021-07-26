import React from 'react';

const CardBoxContainer = ({
   buttonText,
   onClick,
   headerSection,
   children,
   buttonActive = true,
}) => (
   <section
      className="boxContainer"
      style={!buttonActive ? { backgroundColor: 'transparent' } : {}}
   >
      <div className="boxContainer__wrapper">
         <div className="boxContainer__header">{headerSection}</div>
         {children}
      </div>
      <button
         onClick={onClick}
         className="boxContainer__button"
         style={!buttonActive ? { display: 'none' } : {}}
      >
         {buttonText}
      </button>
   </section>
);

export default CardBoxContainer;
