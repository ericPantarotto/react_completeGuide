import { useCallback, useState } from 'react';
import quizCompleteImg from '../assets/quiz-complete.png';
import QUESTIONS from '../questions.js';
import QuestionTimer from './QuestionTimer.jsx';
const TIMER = 10000;

export default () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;

  const handleSelectAnswer = useCallback((selectedAnswer) => {
    setUserAnswers((prevUserAnswers) => [...prevUserAnswers, selectedAnswer]);
  }, []);

  const handleSkipAnswer = useCallback(() => {
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
  if (quizIsComplete) {
    return (
      <div id='summary'>
        <img src={quizCompleteImg} alt='trophy icon' />
        <h2>Quiz is completed!</h2>
      </div>
    );
  }

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers].sort(
    () => Math.random() - 0.5
  );
  return (
    <div id='quiz'>
      <div id='question'>
        <QuestionTimer
          key={activeQuestionIndex}
          timeout={TIMER}
          onTimeout={handleSkipAnswer}
        />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id='answers'>
          {shuffledAnswers.map((answer) => (
            <li key={answer} className='answer'>
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
