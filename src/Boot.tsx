import { css } from '@emotion/react'

export function Boot() {
  return (
    <div css={styles.container}>
      <img css={styles.flo} alt="" src="./images/flo.png" />
      <img css={styles.boot} alt="" src="./images/boot.svg" />
    </div>
  )
}

const styles = {
  container: css`
    z-index: 2;
    grid-column: 2;
    grid-row: 3;
    position: relative;
    align-self: end;
    animation: boot-up-down 1s ease-in-out alternate infinite,
      boot-rotate 2s ease-in-out alternate infinite;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

    @keyframes boot-up-down {
      0% {
        margin-bottom: -40px;
      }
      100% {
        margin-bottom: -60px;
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
  flo: css`
    grid-column: 1;
    grid-row: 1;
    transform: rotate(35deg);
    width: 50px;
    margin-left: 130px;
    margin-top: 60px;
    animation: look-around 2s ease-in-out ${Math.floor(Math.random() * 20)}s 1;

    @keyframes look-around {
      0% {
      }
      90% {
        margin-left: 200px;
        margin-top: 10px;
      }
      100% {
        margin-left: 130px;
        margin-top: 60px;
      }
    }
  `,
  boot: css`
    width: 100%;
    object-fit: contain;
    z-index: 1;
    grid-column: 1;
    grid-row: 1;
  `,
}
