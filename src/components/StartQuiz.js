import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class StartQuiz extends Component {
    render() {
        return(
            <div className="mycard">
                <Card className="start body">
                    <h1>Quiz App</h1>
                    <Link to="/quiz">
                        <Button variant="outline-primary">Start</Button>
                    </Link>
                </Card>
            </div>
        )
    }
}


export default StartQuiz;