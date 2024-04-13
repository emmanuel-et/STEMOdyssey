import { useState, useReducer, useEffect, useRef } from "react";
import '../styles/Game.css'
import { useNavigate } from 'react-router-dom';
import { CSQuestion } from "./ComputerScience";


export function MathGame({}) {
    return <Game questionGenerator={generateMathQuestions} />
}


export function CSGame({}) {
    return <Game questionGenerator={generateCSQuestions} />
}

export function Game({questionGenerator}) {
    const navigate = useNavigate();
    const questions = useRef(questionGenerator(DEFAULT_QUESTION_LENGTH));
    const [index, setIndex] = useState(0);
    const [max, setMax] = useReducer(dispatchMax, 0);
    const [answers, setAnswers] = useState(Array(questions.length));
    const [time, setTime] = useState(0);
    const [modal, setModal] = useState(false);
    const [gameOver, setGameOver] = useState(false);


    const gameNavProps = { modal, time, setTime, index, setIndex, max, gameOver };
    const questionProps = { answer: answers[index], setMax, updateAnswers, index, question: questions.current[index] };
    
    useEffect(() => {
        if (time == 25){
            setGameOver(true);
            setModal(true);
        }
    }, [time]);

    function dispatchMax(max, newMax) {
        if (max < questions.current.length && newMax < questions.current.length && newMax > max) return newMax;
        return max;
    }


    function calculateScore() {
        return answers.reduce((a, c, i) => {
            if (questions.current[i].answer === questions.current[i].choices[c]) {
                return a + 1;
            }
            return a;
        }, 0);
    }

    function updateAnswers(newAnswer, index) {
        const newAnswers = [...answers];
        newAnswers[index] =  newAnswer;
        setAnswers(newAnswers);
    }

    return <main>
        <button onClick={() => {navigate("/")}}><i className="bi bi-x"></i></button>
        <span>SCORE {calculateScore()}</span>
        <GameNav {...gameNavProps}/>
        <Question {...questionProps}/>
        {modal && (
            <div className="modal">
            <div className="overlay"></div>
            <div className="modal-content">
            <h2>Thanks for Playing!</h2>
            <p>
                Score : {calculateScore()}
            </p>
            <button className="close-modal" onClick={() => {navigate("/")}}>
                Return Home
            </button>
            </div>
        </div>
        )}
    </main>
}


export function GameNav({ time, setTime, index, setIndex, max, gameOver }) {
    const timeRef = useRef(time);

    function tick() {
        timeRef.current++;
        setTime(timeRef.current);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (!gameOver) tick();
        },1000);
      
          return () => clearInterval(interval);
    }, [gameOver]);

    function move(direction) {
        if ((direction === -1 && index > 0) || (direction === 1 && index < max)) setIndex(index + direction);
    }
    
    return <section className="action">
        <progress value={time} max={25} className="timer"/>
        <div className="timeCount">{Math.abs(25-timeRef.current)}</div>
        <div>
            <button className={index == 0 ? 'unavailable': ''} onClick={() => move(-1)}><i className="bi bi-arrow-left"></i></button>
            <button className={index == max ? 'unavailable': ''} onClick={() => move(1)}><i className="bi bi-arrow-right"></i></button>
        </div>
    </section>

}

export function Question({ answer, updateAnswers, setMax, question, index }) {
    const [currAnswerIndex, setCurrAnswerIndex] = useState(answer || -1);
    const [submitted, setSubmitted] = useState(answer !== undefined ? true: false);

    useEffect(() => {
        setCurrAnswerIndex(answer);
        setSubmitted(answer !== undefined ? true: false);
    }, [index])

    return <section className="question">
        <span>
            {question.text}
        </span>
        {question.resource && <div>
            {question.resource}
        </div>}
        <div>
            {question.choices.map((e, i) => <div className={`option ${(submitted && question.answer === e) ? 'correct': ''}`}>
                <input type='checkbox' checked={currAnswerIndex === i} disabled={submitted} onChange={() => setCurrAnswerIndex(i)}/>
                <span>{e}</span>
            </div>)}
        </div>
        <div>
            <button onClick={() => {
                setMax(index + 1);
                updateAnswers(currAnswerIndex, index);
                setSubmitted(true);

            }}>Submit</button>
        </div>
    </section>
}

const DEFAULT_QUESTION_LENGTH = 5;
function testGameFunctions(questionCount) {
    const questionArray = Array(questionCount);

    for (let i = 0; i < questionArray.length; i++) {
        const question = {};

        question.text = "Random_Question " + i;
        question.choices = ["A" + i , "B" + i, "C" + i, "D" + i];

        questionArray[i] = question;
    }

    return questionArray
}

function generateCSQuestions(questionCount) {
    return Array.from({length: questionCount}, () => CSQuestion());
}

function generateMathQuestions(questionCount) {
    return Array.from({length: questionCount}, () => MathQuestion());
}

const arr = ["plus", "minus", "divided", "multiplied"];

function MathQuestion() {
    const n1 =  Math.floor(Math.random() * 12) + 1;
    const n2 =  Math.floor(Math.random() * 12) + 1;
    const operation = Math.floor(Math.random() * arr.length);
    const question = {}
    question.text = `What is ${n1} ${arr[operation]} ${n2}?`

    switch(operation) {

        case 0:
            const answerAddition = n1 + n2;
            const wrong1Addition = n1 - n2;
            const wrong2Addition = (n1 + n2) + 1;
            const wrong3Addition = -answerAddition;

            const arrAddition = [answerAddition, wrong1Addition, wrong2Addition, wrong3Addition];

            question.answer = answerAddition;
            question.choices = shuffle(arrAddition);
            break;
        case 1:
            const answersSubtraction = n1 - n2;
            const wrong1Subtraction = (n1 - n2 )/ 2;
            const wrong2Subtraction = (n1 + n2) + 1;
            const wrong3Subtraction = (n1 * n2);
            
            const arrSubtraction = [answersSubtraction, wrong1Subtraction, wrong2Subtraction, wrong3Subtraction];

            question.answer = answersSubtraction;
            question.choices = shuffle(arrSubtraction);
            break;
        case 2:
            const answersDivision = n1 / n2;
            const wrong1Division = n1 * n2;
            const wrong2Division = (n1 + n2) - 4;
            const wrong3Division = (n1 + answersDivision) / n2;
            const arrDivision = [answersDivision, wrong1Division, wrong2Division, wrong3Division];

            question.answer = answersDivision;
            question.choices = shuffle(arrDivision);
            break;
        case 3:
            const answersMultiplication = n1 * n2;
            const wrong1Multiplication = (n1 - 1)  * n2;
            const wrong2Multiplication = (n1 + n2) * 2;
            const wrong3Multiplication = n2 * n2;
            
            const arrMultiplication = [answersMultiplication, wrong1Multiplication, wrong2Multiplication, wrong3Multiplication];

            question.answer = answersMultiplication;
            question.choices = shuffle(arrMultiplication);
            break;
    }

    return question;

}

export function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }
