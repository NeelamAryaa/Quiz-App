import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';
import Loader from './Loader'

class Quiz extends Component {

    state = {
        quiz: [],
        currentques: 0,
        isLoading: false,
        score: 0,
        option: ''
        }


    onChangeHandler = (event) => {
        this.setState({option: event.currentTarget.value})
    }
    

    // randomizeAnswers = (arr, ans) => {
    //     const newarr = [...arr]
    //     const index = Math.floor(Math.random() * 3);
    //     newarr.splice(index, 0, ans);
    //     console.log(newarr);
    //     return newarr;
    // };


    // prevBtn = () => {
    //     const {score} = this.state;

    //     if(this.state.currentques === 0) return;
    //     this.setState({currentques: this.state.currentques - 1})
    //     this.setState({score: score - 1})
    // };

    countScore = () => {
        const { option, quiz, score, currentques } = this.state;
        // console.log(score);  
        // console.log(option);
        console.log(quiz[this.state.currentques].correct_answer); 
        if(option === quiz[this.state.currentques].correct_answer) {
            this.setState((prevState, prevProps) => ({
                score: prevState.score+1
            }), 
            () => {
                if(currentques === 9){
                    this.props.history.push({pathname: '/score', state: {score: this.state.score} })
                    console.log(`currentques, score: ${currentques} ${score}`)
                }
            }
                
            )        
         
        }
        else if
            (currentques === 9){
            this.props.history.push({pathname: '/score', state: {score: this.state.score} })
            console.log(`currentques: ${currentques}`)
        }        
    }
        

    prevfun = () => {
        const {currentques} = this.state;
        this.setState({currentques: currentques + 1});
        this.countScore();
    }

    
    componentDidMount() {
        this.setState({isLoading: true})
        const url = "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple";
        axios.get(url)
            .then((response) => {
                this.setState({quiz: response.data.results})
                this.setState({isLoading: false})
            })
            .catch((error) => {
                this.setState({isLoading: false})
                console.log(error)
                alert('Something went wrong !!!');
            })

            
    }

    render() {   
                
        const {quiz, currentques, isLoading, option} = this.state;


        return(
            <div className="d-flex justify-content-center align-item-center row">
                    
                {/* <div className='m-5'>{ isLoading ? <Loader /> : null}</div> */}
                <div classname="col-sm-12 col-lg-6 ">
            { quiz.length && currentques >= 0 && currentques < quiz.length  ? 
                <Card body className="quiz ">
                    <div className="option" >
                        <h3 className='text-center'>{currentques + 1}/10</h3>
                        <h2 className="text-center my-4"> Question : </h2>
                        <h4 className="mx-2">{quiz[currentques].question}</h4>

                        {quiz[currentques].incorrect_answers.length ? quiz[currentques].incorrect_answers.map((obj, index) => {
                            return(
                                <div key={index} className="mcq-option text-left"  >
                                    <input className="mx-3" id={`option-${index}`} type="radio" name="ques" value={obj} checked={option === obj} onChange={this.onChangeHandler} />
                                    <label className="mcq" htmlFor={`option-${index}`} >{obj}</label>
                                    <br />
                                </div>
                            )
                        })
                        
                        : null }

                        <div className="mcq-option text-left"  >
                            <input className="mx-3" id='option-4' type="radio" name="ques" value={quiz[currentques].correct_answer} checked={option === quiz[currentques].correct_answer} onChange={this.onChangeHandler} />
                            <label className="mcq" htmlFor='option-4' >{quiz[currentques].correct_answer}</label>
                        </div>
                        
                        
                    </div>

                    { currentques === 9 ? 
                    
                    <div className="next d-flex justify-content-center align-items-center ">
                        {/* <Button variant="outline-primary" onClick={this.prevBtn } disabled>Previous</Button> */}
                            <Button variant="outline-primary" className="text-center" onClick={this.countScore}>
                                Finish
                            </Button>
                    </div>
                    :
                    <div className="next d-flex justify-content-center align-items-center ">
                        {/* <Button variant="outline-primary" onClick={this.prevBtn} disabled>Previous</Button> */}
                        <Button variant="outline-primary" onClick={this.prevfun} >Next</Button>
                    </div>
                    }

                </Card> : null}
                </div>
            </div>
        )
    }
}


export default Quiz;

