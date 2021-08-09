import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleSaveQuestionAnswer } from '../../actions/questions';
import CardBoxContainer from '../../components/CardBoxContainer';
import QuestionSelectionBox from '../../components/QuestionSelectionBox';
import QuestionResultBox from '../../components/QuestionResultBox';

class Question extends Component {
   state = {
      answerSelected: 0,
   };

   initializeData = () => {
      const { question_id } = this.props.match.params;
      const { questions, users } = this.props;
      const questionSelected = questions[question_id];

      if (!questionSelected) {
         this.props.history.push('/notfound');
         return;
      }

      const totalVotes =
         questionSelected.optionOne?.votes.length ||
         0 + questionSelected.optionTwo?.votes.length ||
         0;
      const data = users[questionSelected.author];

      this.setState((currentState) => ({
         ...currentState,
         questionSelected,
         totalVotes,
         data,
      }));
   };

   componentDidMount() {
      this.initializeData();
   }

   headerSection = (data) => (
      <div className="question__header">
         <figure>
            <img src={data?.avatarURL} alt="profile" />
         </figure>
         <div>
            <h6>Asked by</h6>
            <p>{data?.name}</p>
         </div>
      </div>
   );

   handleSelectAnswer = (selected) => {
      console.log('--SELECTED', selected);
      this.setState((currentState) => ({
         ...currentState,
         answerSelected: selected,
      }));
   };

   handleSubmitAnswer = (qid) => {
      this.props
         .dispatch(handleSaveQuestionAnswer(qid, this.state.answerSelected))
         .then(() => this.initializeData());
   };

   render() {
      const { question_id } = this.props.match.params;
      const { authedUser } = this.props;
      const { questionSelected, data, totalVotes } = this.state;

      console.log('===STATE', questionSelected);

      if (!questionSelected) {
         return <h5>Loading</h5>;
      }
      return authedUser.answers.hasOwnProperty(question_id) ? (
         <section className="result">
            <CardBoxContainer
               buttonText="Submit"
               headerSection={this.headerSection(data)}
               buttonActive={false}
            >
               <div className="result__content">
                  <QuestionResultBox
                     questionText={questionSelected.optionOne.text}
                     selectedQuestion={questionSelected.optionOne.votes.includes(
                        authedUser.id
                     )}
                     totalVotes={totalVotes}
                     votes={questionSelected.optionOne.votes.length}
                  />
                  <p>or</p>
                  <QuestionResultBox
                     questionText={questionSelected.optionOne.text}
                     selectedQuestion={questionSelected.optionTwo.votes.includes(
                        authedUser.id
                     )}
                     totalVotes={totalVotes}
                     votes={questionSelected.optionTwo.votes.length}
                  />
               </div>
            </CardBoxContainer>
         </section>
      ) : (
         <section className="question">
            <CardBoxContainer
               buttonText="Submit"
               headerSection={this.headerSection(data)}
               onClick={() => this.handleSubmitAnswer(question_id)}
            >
               <div className="question__content">
                  <QuestionSelectionBox
                     questionText={questionSelected.optionOne.text}
                     onClick={() => this.handleSelectAnswer(1)}
                     selectedButton={this.state.answerSelected === 1}
                  />
                  <p>or</p>
                  <QuestionSelectionBox
                     questionText={questionSelected.optionTwo.text}
                     onClick={() => this.handleSelectAnswer(2)}
                     selectedButton={this.state.answerSelected === 2}
                  />
               </div>
            </CardBoxContainer>
         </section>
      );
   }
}
function mapStateToProps({ questions, authedUser, users }) {
   return {
      questions,
      authedUser,
      users,
   };
}

export default connect(mapStateToProps)(Question);
