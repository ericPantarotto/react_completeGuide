import Answers from './Answers';
import QuestionTimer from './QuestionTimer';
const TIMER = 10000;

export default ({
  questionText,
  answers,
  onSelctAnswer,
  selectedAnswer,
  answerState,
  onSkipAnswer,
}) => {
  return (
    <div id='question'>
      <QuestionTimer timeout={TIMER} onTimeout={onSkipAnswer} />
      <h2>{questionText}</h2>
      <Answers
        answers={answers}
        selectedAnswer={selectedAnswer}
        answerState={answerState}
        onSelect={onSelctAnswer}
      />
    </div>
  );
};
