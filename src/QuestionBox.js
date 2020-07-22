import React,{useState} from 'react'


const QuestionBox = ({question,options,selected}) =>{
    const [answer,setAnswer] = useState(options)

    function changeState(){
        setAnswer(options);
    }
    return(
        <div className="question-box">
            <div className="question">
                <span>{question}</span>
            </div>
            {
                answer.map((text,index) =>(
                    <button className="btn btn-primary" key={index} onClick={()=>{
                        changeState();
                        selected(text);
                    }}>{text}</button>
                ))
            }
            
        </div>
    );
}

export default QuestionBox;