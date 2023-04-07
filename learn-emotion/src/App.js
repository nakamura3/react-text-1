/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const App = () => {
  const pStyle = css`
    color: green;
    font-size: 24px;
    &:hover {
      color: red;
    }
  `;

  return (
    <div css={pStyle}>
      Emotion
    </div>
  );
}
export default App;