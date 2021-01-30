/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import db from '../db.json';

import Widget from '../src/componets/Widget';
import Footer from '../src/componets/Footer';
import GitHubCorner from '../src/componets/GitHubCorner';
import QuizBackground from '../src/componets/QuizBackground';
import QuizLogo from '../src/componets/QuizLogo';
import Input from '../src/componets/Input';
import Button from '../src/componets/Button';
import QuizContainer from '../src/componets/QuizContainer';

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>The Avengers</h1>
          </Widget.Header>
          <Widget.Content>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                router.push(`/quiz?name=${name}`);
              }}
            >
              <Input
                name="nomeDoUsusario"
                onChange={(event) => {
                  setName(event.target.value);
                }}
                placeholder="Diz ai seu nome"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quiz da Galera</h1>
            <p>lorem insum dolar sit amet....</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com" />
    </QuizBackground>
  );
}
