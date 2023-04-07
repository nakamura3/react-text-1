import styled, { css } from 'styled-components';

const fontSize = css`
  font-size: ${ props => props.size === 'big' ? '42px' : '24px' };
`;

const Message = styled.p`
  ${fontSize}
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
    <>
      <Message>Learn Styled Components</Message>
      <Message size="big" >Learn Styled Big Components</Message>
    </>
  );
}

export default App;
