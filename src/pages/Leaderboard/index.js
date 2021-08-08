import React, { Component } from 'react';
import { connect } from 'react-redux';

class Leaderboard extends Component {
   render() {
      return (
         <section className="leaderboard">
            {this.props.leaderboard.map((user, index) => (
               <article key={user.id} className="leaderboard__card">
                  <h5>{index + 1}</h5>
                  <div className="leaderboard__card-wrapper">
                     <figure>
                        <img src={user.avatarURL} alt="user" />
                     </figure>
                     <div className="card-text">
                        <h6>{user.name}</h6>
                        <div>
                           <p>Answered Questions:</p>
                           <p>{user.answers}</p>
                        </div>
                        <div>
                           <p>Created Questions:</p>
                           <p>{user.questions}</p>
                        </div>
                     </div>
                     <div className="leaderboard__card-score">
                        <div>
                           <div>Score</div>
                           <div>{user.sum}</div>
                        </div>
                     </div>
                  </div>
               </article>
            ))}
         </section>
      );
   }
}

function mapStateToProps({ users }) {
   const leaderboard = Object.values(users)
      .map((user) => ({
         ...user,
         answers: Object.keys(user.answers).length,
         questions: user.questions.length,
         sum: Object.keys(user.answers).length + user.questions.length,
      }))
      .sort(function (x, y) {
         return y.sum - x.sum;
      });
   return {
      leaderboard,
   };
}

export default connect(mapStateToProps)(Leaderboard);
