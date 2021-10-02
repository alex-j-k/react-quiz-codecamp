import React from 'react'

const QuestionCard = ({
    question, 
    answers, 
    callback, 
    userAnswer, 
    questionNr,
    totalQuestions,
}) => {

console.log(userAnswer);
    return (  
    <div className="questioncard">
        <p className="number">
            Question: {questionNr} / {totalQuestions} 
        </p>
    <p>{question}</p>
        <div className="questionwrapper">
            {answers.map(answer => (
                <div key={answer}>
                    <button 
                    className={`qbutton${
    /*1 - IF BUTTON IS CORRECT ANSWER = TURN GREEN*/
    answer === userAnswer?.correctAnswer ? 'OptionOne' : 
    /*2-  BUTTON NOT CORRECT BUT USER CLICKED = TURN BLACK*/        
    /*NOT CORRECT*/answer !== userAnswer?.correctAnswer  && 
    /*CLICKED*/  userAnswer?.answer === answer ? 'OptionTwo' :
    /*3 -  BEFORE ANSWERING AND AFTER - ANSWERS NOT RIGHT OR WRONG = ALWAYS BLUE*/        
     'OptionThree'
                    
                    
                    }`}
                    
                    /*RED GREEN CLASS ADDING ON CLICK */

                    disabled={userAnswer} 
                    value={answer} 
                    onClick={callback}>
                        <span>{answer}</span>
                    </button>
                </div>
            ))}
        </div>
    </div>
    
    );
}
 
export default QuestionCard;