import React, { Component } from 'react';
import CardBoxContainer from '../../components/CardBoxContainer';

class NewQuestion extends Component {
   headerSection = () => <h6 className="newQuestion__header">New Question</h6>;

   render() {
      return (
         <section className="newQuestion">
            <CardBoxContainer
               buttonText="Submit"
               headerSection={this.headerSection()}
            >
               <div className="newQuestion__content">
                  <h5>Complete the Question:</h5>
                  <p>Would you Rather...</p>
                  <div className="inputs">
                     <input placeholder="Enter Option One Text Here" />
                     <div>
                        <div />
                        <p>or</p>
                        <div />
                     </div>
                     <input placeholder="Enter Option Two Text Here" />
                  </div>
               </div>
            </CardBoxContainer>
         </section>
      );
   }
}

export default NewQuestion;
