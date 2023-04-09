import { css } from '@emotion/react'
import { Clouds } from './Clouds'
import { Counter } from './Counter'
import { Waves } from './Waves'

export function App() {
  return (
    <div css={styles.background}>
      <Clouds />
      <Counter />
      <Waves />
      <img css={styles.boot} alt="" src="./images/boot.svg" />
    </div>
  )
}

const styles = {
  background: css`
    height: 100vh;
    width: 100vw;
    background-color: #b8e4ff;
    display: grid;
    grid-template-columns: 1fr clamp(300px, 400px, 50%) 1fr;
    grid-template-rows: 1fr repeat(5, 80px);
    overflow: hidden;
    position: relative;
  `,
  boot: css`
    z-index: 2;
    grid-column: 2;
    grid-row: 3;
    align-self: end;
    width: 100%;
    object-fit: contain;
    animation: boot-up-down 1s ease-in-out alternate infinite,
      boot-rotate 2s ease-in-out alternate infinite;

    @keyframes boot-up-down {
      0% {
        margin-bottom: -30px;
      }
      100% {
        margin-bottom: -50px;
      }
    }

    @keyframes boot-rotate {
      0% {
        margin-left: 20px;
        transform: rotate(2deg);
      }
      100% {
        margin-left: 0px;
        transform: rotate(-2deg);
      }
    }
  `,
}
