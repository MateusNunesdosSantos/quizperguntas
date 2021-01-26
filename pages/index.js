import styled from 'styled-components';
import db from '../db.json';
import Widget from '../src/componets/Widget';
import Footer from '../src/componets/Footer';
import GitHubCorner from '../src/componets/GitHubCorner';
import QuizBackground from '../src/componets/QuizBackground';
import QuizLogo from '../src/componets/QuizLogo';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 250px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>The Avengers</h1>
          </Widget.Header>
          <Widget.Content>
            <p>lorem insum dolar sit amet....</p>
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
