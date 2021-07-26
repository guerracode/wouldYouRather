import React, { Component } from 'react';

import imageProfile from '../../assets/img/profileImage.jpeg';

class Leaderboard extends Component {
   render() {
      return (
         <section className="leaderboard">
            <article className="leaderboard__card">
               <h5>1</h5>
               <div className="leaderboard__card-wrapper">
                  <figure>
                     <img src={imageProfile} alt="user" />
                  </figure>
                  <div className="card-text">
                     <h6>Luis Chavez</h6>
                     <div>
                        <p>Answered Questions:</p>
                        <p>7</p>
                     </div>
                     <div>
                        <p>Created Questions:</p>
                        <p>3</p>
                     </div>
                  </div>
                  <div className="leaderboard__card-score">
                     <div>
                        <div>Score</div>
                        <div>10</div>
                     </div>
                  </div>
               </div>
            </article>
         </section>
      );
   }
}

export default Leaderboard;
