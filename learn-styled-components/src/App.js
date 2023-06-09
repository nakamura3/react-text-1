import styled, { css } from 'styled-components';

const Input = styled.input.attrs(props => ({
  type: 'text',
  size: props.small ? 3 : 8,
}))`
  color: white;
  background: black;
`;

const InvertedInput = styled(Input)`
  color: black;
  background: white;
`;

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

const MessageAnchor = Message.withComponent('a');

function App() {
  return (
    <>
      <div><Input /></div>
      <div><Input small /></div>
      <div><InvertedInput /></div>
      <div><InvertedInput small /></div>
      <Message>Learn Styled Components</Message>
      <Message size="big" >Learn Styled Big Components</Message>
      <MessageAnchor>Message Anchor</MessageAnchor>
      <Message size="big" as="a">as polymorphic prop</Message>
    </>
  );
}

export default App;
