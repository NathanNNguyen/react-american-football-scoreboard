//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import Timer from './Timer';

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [lionsScore, setLionsScore] = useState(0);
  const [tigersScore, setTigersAwayScore] = useState(0);
  const [quarter, setQuarter] = useState(0);

  const quarterNext = () => {
    if (quarter < 4) {
      setQuarter(quarter + 1)
    } else {
      setQuarter(1)
    }
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{lionsScore}</div>
          </div>
          <div className='flex'>
            <button onClick={quarterNext}>Next Quarter</button>
            <div className="timer"><Timer /></div>
          </div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{tigersScore}</div>
          </div>
        </div>
        <BottomRow quarter={quarter} />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => setLionsScore(lionsScore + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => setLionsScore(lionsScore + 3)}>Home Field Goal</button>
        </div>

        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => setTigersAwayScore(tigersScore + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => setTigersAwayScore(tigersScore + 3)}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
