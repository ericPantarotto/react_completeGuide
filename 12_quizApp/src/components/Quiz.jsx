import { useCallback, useState } from 'react';
import quizCompleteImg from '../assets/quiz-complete.png';
import QUESTIONS from '../questions.js';
import Question from './Question.jsx';

const TIMER_ANSWER = 1000;
const TIMER_RESET_ANSWERSTATE = 2000;

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

  return (
    <div id='quiz'>
      <Question
        key={activeQuestionIndex}
        questionIndex={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
};
