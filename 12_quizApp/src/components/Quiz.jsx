import { useCallback, useState } from 'react';
import quizCompleteImg from '../assets/quiz-complete.png';
import QUESTIONS from '../questions.js';
import Question from './Question.jsx';

const TIMER_ANSWER = 1000;
const TIMER_RESET_ANSWERSTATE = 2000;

export default () => {
  const [answerState, setAnswerState] = useState('');
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex =
    answerState === '' ? userAnswers.length : userAnswers.length - 1;

  const handleSelectAnswer = useCallback(
    (selectedAnswer) => {
      setAnswerState('answered');
      setUserAnswers((prevUserAnswers) => [...prevUserAnswers, selectedAnswer]);

      setTimeout(() => {
        if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
          setAnswerState('correct');
        } else {
          setAnswerState('wrong');
        }

        setTimeout(() => {
          setAnswerState('');
        }, TIMER_RESET_ANSWERSTATE);
      }, TIMER_ANSWER);
    },
    [activeQuestionIndex]
  );

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
        questionText={QUESTIONS[activeQuestionIndex].text}
        answers={QUESTIONS[activeQuestionIndex].answers}
        onSelctAnswer={handleSelectAnswer}
        answerState={answerState}
        selectedAnswer={userAnswers[userAnswers.length- 1]}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
};
