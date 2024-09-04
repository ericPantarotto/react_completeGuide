import { useState } from 'react';
import QUESTIONS from '../questions.js';
import Answers from './Answers';
import QuestionTimer from './QuestionTimer';
const TIMER = 10000;
const TIMER_ANSWER = 1000;
const TIMER_RESET_ANSWERSTATE = 2000;
export default ({ questionIndex, onSelectAnswer, onSkipAnswer }) => {
  const [answer, setAnswer] = useState({ selectedAnswer: '', isCorrect: null });

  let timer = TIMER;
  if (answer.selectedAnswer) {
    timer = TIMER_ANSWER;
  }
  if (answer.isCorrect !== null) {
    timer = TIMER_RESET_ANSWERSTATE;
  }

  const handleSelectAnswer = (answer) => {
    setAnswer({ selectedAnswer: answer, isCorrect: null });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[questionIndex].answers[0] === answer,
      });

      setTimeout(() => {
        onSelectAnswer(answer);
      }, TIMER_RESET_ANSWERSTATE);
    }, TIMER_ANSWER);
  };

  let answerState = '';
  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? 'correct' : 'wrong';
  } else if (answer.selectedAnswer) {
    answerState = 'answered';
  }

  return (
    <div id='question'>
      <QuestionTimer
        key={timer}
        timeout={timer}
        onTimeout={answer.selectedAnswer === '' ? onSkipAnswer : null}
        mode={answerState}
      />
      <h2>{QUESTIONS[questionIndex].text}</h2>
      <Answers
        answers={QUESTIONS[questionIndex].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
};
