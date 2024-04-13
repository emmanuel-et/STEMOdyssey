export function MathGame({ closeFunction, questions }) {
    const [index, setIndex] = useState(0);
    const [max, setMax] = useReducer(dispatchMax, 0);
    const [answers, setAnswers] = useState(Array(questions.length));

    const gameNavProps = { closeFunction, index, setIndex, max };
    
    function dispatchMax(max, newMax) {
        if (max < questions.length) return newMax;
        return max;
    }

    function updateAnswers(newAnswer, index) {
        const newAnswers = [...answers];
        newAnswers[index] =  newAnswer;
        setAnswers(newAnswers);
    }

    return <main>

        <GameNav {...gameNavProps}/>
        
    </main>
}


export function GameNav({ closeFunction, index, setIndex, max }) {

    function move(direction) {
        if ((direction === -1 && index > 0) || (direction === 1 && index < max)) setIndex(index + 1);
    }
    
    return <section>
        <div>
            <button className={index == 0 ? 'unavailable': ''} onClick={() => move(-1)}><i className="bi bi-arrow-left"></i></button>
            <button className={index == max ? 'unavailable': ''} onClick={() => move(1)}><i className="bi bi-arrow-right"></i></button>
        </div>
        <button><i className="bi bi-x"></i></button>
    </section>

}

export function Question({ answer, updateAnswers, setMax, question, index }) {
    const [currAnswer, setCurrAnswer] = useState(answer || -1);
    const [submitted, setSubmitted] = useState(false);

    return <section>
        <span>
            {question.text}
        </span>
        {question.resource && <div>
            {question.resource}
        </div>}
        <div>
            {question.choices.map((e, i) => <div className="option">
                <input type='checkbox' checked={currAnswer === i} disabled={submitted} onChange={() => setCurrAnswer(i)}/>
                <span>{e}</span>
            </div>)}
        </div>
        <div>
            <button onClick={() => {
                setMax(index + 1);
                updateAnswers(currAnswer, index);

            }}>Submit</button>
        </div>
    </section>
}

// const DEFS
// function testGameFunctions(questionCount)