import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardBoxContainer from '../../components/CardBoxContainer';
import { handleSaveQuestion } from '../../actions/questions';

class NewQuestion extends Component {
   state = {
      optionOne: '',
      optionTwo: '',
   };

   handleSubmit = () => {
      if (!this.state.optionOne || !this.state.optionTwo) {
         window.alert('Please fill in the two options');
         return;
      }

      this.props
         .dispatch(
            handleSaveQuestion(this.state.optionOne, this.state.optionTwo)
         )
         .then(() => this.props.history.push('/'));
   };

   handleChange = (event, option) => {
      this.setState((currentState) => ({
         ...currentState,
         [option]: event.target.value,
      }));
   };

   headerSection = () => <h6 className="newQuestion__header">New Question</h6>;

   render() {
      return (
         <section className="newQuestion">
            <CardBoxContainer
               onClick={this.handleSubmit}
               buttonText="Submit"
               headerSection={this.headerSection()}
            >
               <div className="newQuestion__content">
                  <h5>Complete the Question:</h5>
                  <p>Would you Rather...</p>
                  <div className="inputs">
                     <input
                        placeholder="Enter Option One Text Here"
                        value={this.state.optionOne}
                        onChange={(event) =>
                           this.handleChange(event, 'optionOne')
                        }
                     />
                     <div>
                        <div />
                        <p>or</p>
                        <div />
                     </div>
                     <input
                        placeholder="Enter Option Two Text Here"
                        value={this.state.optionTwo}
                        onChange={(event) =>
                           this.handleChange(event, 'optionTwo')
                        }
                     />
                  </div>
               </div>
            </CardBoxContainer>
         </section>
      );
   }
}

export default connect()(NewQuestion);
