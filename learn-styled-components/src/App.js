import styled from 'styled-components';

const Message = styled.a`
  font-size: 28px;
  background: yellow;
  color: black;

  &:hover {
    color: red;
  }

  &::before {
    content: '⬛︎';
  }

  @media (max-width: 600px) {
    background: tomato;
  }
`;

function App() {
  return (
    <Message>Learn Styled Components</Message>
  );
}

export default App;
