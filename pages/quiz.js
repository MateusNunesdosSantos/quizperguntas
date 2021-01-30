/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
import React from 'react';
import db from '../db.json';
import Widget from '../src/componets/Widget';
import QuizLogo from '../src/componets/QuizLogo';
import QuizBackground from '../src/componets/QuizBackground';
import QuizContainer from '../src/componets/QuizContainer';
import Button from '../src/componets/Button';

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>Carregando...</Widget.Header>

      <Widget.Content>[Desafio do Loading]</Widget.Content>
    </Widget>
  );
}

function QuestionWidget({ question, totalQuestions, questionIndex, onSubmit }) {
  const questionId = `question__${questionIndex}`;
  return (
    <Widget>
      <Widget.Header>
        <h3>{`Pergunta ${questionIndex + 1} de ${totalQuestions}`}</h3>
      </Widget.Header>

      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150%',
          objectFit: 'cover',
        }}
        src={question.image}
      />

      <Widget.Content>
        <h2>{question.title}</h2>
        <p>{question.description}</p>

        <from
          onSubmit={(event) => {
            event.preventDefault();
            onSubmit();
          }}
        >
          {question.alternatives.map((alternative, index) => {
            const alternativeId = `alternative__${index}`;
            return (
              <Widget.Topic as="label" htmlFor={alternativeId}>
                <input id={alternativeId} type="radio" name={questionId} />
                {alternative}
              </Widget.Topic>
            );
          })}
          <Button type="submit">Confirmar</Button>
        </from>
      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOOADING: 'LOOADING',
  RESULT: 'RESULT',
};
export default function QuizPage() {
  const [screenState, setScreenState] = React.useState(screenStates.LOOADING);
  const totalQuestions = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];

  React.useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000);
  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />

        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
          />
        )}
        {screenState === screenStates.LOOADING && <LoadingWidget />}

        {screenState === screenStates.RESULT && <div>Você acertou</div>}
      </QuizContainer>
    </QuizBackground>
  );
}
