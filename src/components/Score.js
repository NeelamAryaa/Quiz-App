import React from 'react';
import { Card } from 'react-bootstrap'

const ScoreCard = (props) => {
    console.log(props);
        return(
            <div className="mycard">
                <Card className="start">
                    <h1>Your Score : </h1>
                    <p className="display-4">{props.location.state.score}</p>
                </Card>
            </div>
        )
    
}


export default ScoreCard;