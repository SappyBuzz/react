import React,{Component} from 'react';
import questionList from './questionsList';
import QuestionBox from './QuestionBox';
import ScoreBoard from './ScoreBoard';

class QuizList extends Component{
    constructor(){
        super();
        this.state = {
            questionBank:[],
            score:0,
            response:0
        }
    }

    getQuestions = () =>{
        questionList().then(qus => {
            this.setState({
                questionBank:qus
            })
        })
    }

    componentDidMount(){
        this.getQuestions();
    }

    computeAnswer = (answer,correctAnswer) =>{
        console.log(this.state.score)
        if(answer===correctAnswer){
            this.setState(preState =>{
                return{
                    score:(preState.score + 1)
                }
            })
        }
        this.setState(prevState =>{
            return{
                response: prevState.response < 5 ? prevState.response + 1 : 5
            }

        })
    }

    retry = () =>{
        this.getQuestions();
        this.setState({score:0,response:0})
    }

    render(){
        return(
            <div className="quiz-app">
                <div className="container">
                    <div className="title">
                        Yo Yo Quiz
                    </div>
                    {
                        this.state.questionBank.length > 0 && this.state.response < 5 &&
                        this.state.questionBank.map(({question,answers,correct,questionId}) =>(
                            <QuestionBox question={question} 
                            options={answers} 
                            key={questionId} 
                            selected={answer => this.computeAnswer(answer,correct)} />
                        ))
                    }

                    {
                        this.state.response === 5?
                        (<ScoreBoard score={this.state.score} retry={this.retry} /> )
                        : null
                    }
                    
                </div>
            </div>
        );
    }
}

export default QuizList;
