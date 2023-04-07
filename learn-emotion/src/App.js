/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const App = () => {
  const divStyle = css`
    color: green;
    font-size: 24px;
    &:hover {
      color: red;
    }
  `;

  const pStyle = {
    color: 'orange',
    fontSize: 32,
    '&:hover': {
      color: 'lightgreen'
    }
  };

  return (
    <>
      <div css={divStyle}>Emotion</div>
      <p css={pStyle}>Object Style</p>
    </>
  );
}
export default App;