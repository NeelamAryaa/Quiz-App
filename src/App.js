import React from 'react';
import './App.css';
import StartQuiz from './components/StartQuiz';
import ScoreCard from './components/Score';
import Quiz from './components/Quiz'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={StartQuiz} />
        <Route exact path="/quiz" component={Quiz} />
        <Route exact path='/score' component={ScoreCard} />
      </Switch>
    </Router>
  )
}

export default App;
