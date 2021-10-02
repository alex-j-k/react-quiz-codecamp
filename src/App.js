//CSS
import './App.css';
//REACT
import React, { useState } from 'react';
//FUNCTIONS FROM OTHER FILES
// import {shuffleArray} from './components/Utils';
//COMPONENTS
import QuestionCard from './components/QuestionCard';
//FETCH
//import {fetchQuizQuestions} from './components/Fetch';
//console.log(fetchQuizQuestions());


// CONSTS CONSTS CONSTS CONSTS CONSTS CONSTS CONSTS CONSTS CONSTS CONSTS CONSTS CONSTS CONSTS CONSTS 
// QUESTION - TYPES AND NUMBER 
const totalQuestions = 10;

const ques = [
  {question: 'What is the capital of Spain?', correctAnswer: 'Madrid', incorrectAnswers: ['Barcelona','Sevilla','Salamanca']},
  {question: 'What is the Largest City in Andalucia?,', correctAnswer: 'Sevilla', incorrectAnswers: ['Granada','Cadiz','Malaga']},
  {question: 'What is gazpacho a type of?,', correctAnswer: 'Soup', incorrectAnswers: ['paella','wine','cheese']},
  {question: 'What is the Ljhg?,', correctAnswer: 'Sevdfilla', incorrectAnswers: ['Granadfda','Cadfddiz','Malaga']},
  {question: 'What is the Ljhg?,', correctAnswer: 'Sevdfilla', incorrectAnswers: ['Granadfda','Cadfddiz','Malaga']},
  {question: 'What is the Ljhg?,', correctAnswer: 'Sevdfilla', incorrectAnswers: ['Granadfda','Cadfddiz','Malaga']},
  {question: 'What is the Ljhg?,', correctAnswer: 'Sevdfilla', incorrectAnswers: ['Granadfda','Cadfddiz','Malaga']},
  {question: 'What is the Ljhg?,', correctAnswer: 'Sevdfilla', incorrectAnswers: ['Granadfda','Cadfddiz','Malaga']},
  {question: 'What is the Ljhg?,', correctAnswer: 'Sevdfilla', incorrectAnswers: ['Granadfda','Cadfddiz','Malaga']},
  {question: 'What is the Ljhg?,', correctAnswer: 'Sevdfilla', incorrectAnswers: ['Granadfda','Cadfddiz','Malaga']},

]

///MAP OVER QUES - LAY OUT ALL ENTRIES - COMBINE CORRECT AND INCORRECT
/// IN EXTRA KEY CALLED Answers - SHUFFLE THE 4 ANSWERS - GET RETURNED
// NEW OBJECT WITH EXTRA answer KEY ADDED
const questions = ques.map((questionobject) => ({  
    // shuffleArray([questionobject.incorrectAnswers])
    ...questionobject, answers:[...questionobject.incorrectAnswers, questionobject.correctAnswer ].sort(() => Math.random() -0.5)
}))

// console.log(quesShuf)
/////////////////

//APP COMPONENT APP COMPONENT APP COMPONENT APP COMPONENT APP COMPONENT APP COMPONENT APP COMPONENT APP COMPONENT APP COMPONENT APP COMPONENT 
const App = () => {

  const [loading , setLoading] = useState(false);
  // const [questions , setQuestions] = useState([]);
  const [questionNumber , setQuestionNumber] = useState(0);
  const [userAnswers , setUserAnswers] = useState([]);
  const [score , setScore] = useState(0);
  const [gameOver , setGameOver] = useState(true);


// CLICK BUTTON TO START
const startTrivia = () => {

  //LOADING true - reset all states for new game - loading false
  setLoading(true);

  setTimeout( () => { 
  setGameOver(false);
  // setQuestions(quesShuf); 
  setScore(0);
  setUserAnswers([]);
  setQuestionNumber(0);
  setLoading(false);

},3000 )
}
// console.log(quesShuf)

console.log(questions)
console.log(questionNumber)
// console.log(quesShuf)



const checkAnswer = (e) => {
 if (!gameOver){
   //USER ANSWER
   const answer = e.currentTarget.value;
   //CHECK ANSWER AGAINST CORRECT 
    const correct = questions[questionNumber].correctAnswer === answer;
    if (correct) setScore(prev => prev +1)
    // SAVE ANSWER IN USERANSWERS ARRAY
    const answerObject = {
      question: questions[questionNumber].question,
      answer,
      correct,
      correctAnswer: questions[questionNumber].correctAnswer,
    }
        setUserAnswers((prev)=> [...prev, answerObject])
 }
};

const nextQuestion = () => {
  //MOVE ON TO NEXT QUESTION IF NOT LAST Q
  const nextQuestion = questionNumber +1;

  if (nextQuestion === totalQuestions){
    setGameOver(true)
  } else {
    setQuestionNumber(nextQuestion);
  }
}


  return (
    <div className="App">
      <h1>
        THE 
        GREAT<br/>  
        <span className='spanish'>SPANISH </span>  
        QUIZ 
      </h1>

      {gameOver ||  userAnswers.length === totalQuestions ?  (   
            
          <button className="start" onClick={startTrivia}>
          Start
          </button>
       )  : null}

      {!gameOver ? <p className="score">Score: {score}</p> : null}

       {loading && <p className="Loading">Loading Questions...</p> }

      {!loading && !gameOver &&(
      <QuestionCard
      questionNr={questionNumber +1}
      totalQuestions={totalQuestions}
      question={questions[questionNumber].question}
      answers={questions[questionNumber].answers}
      userAnswer={userAnswers ? userAnswers[questionNumber]: undefined}
      callback={checkAnswer}
      ></QuestionCard> 
      )}

        { !gameOver && 
        !loading && 
        userAnswers.length === questionNumber + 1 
        && questionNumber !== totalQuestions - 1 ? 
        (
      <button className="next" onClick={nextQuestion}>
        Next Question 
        </button>
        ) : null}
    </div>
  );
}

export default App;
