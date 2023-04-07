import styled from 'styled-components';

const fontSize = size => ( size === 'big' ? '42px' : '24pg' );

const Message = styled.p`
  font-size: ${props => fontSize(props.size)};
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
