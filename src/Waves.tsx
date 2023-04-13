import { css } from '@emotion/react'
import { Fragment } from 'react'

export function Waves() {
  const isChrome = navigator.appVersion.indexOf('Chrome/') !== -1

  return (
    <Fragment>
      <img src="/images/welle4.svg" alt="" css={styles.wave(1, isChrome)} />
      <img src="/images/welle3.svg" alt="" css={styles.wave(2, isChrome)} />
      <img src="/images/welle2.svg" alt="" css={styles.wave(3, isChrome)} />
      <img src="/images/welle1.svg" alt="" css={styles.wave(4, isChrome)} />
    </Fragment>
  )
}

const styles = {
  wave: (index: number, isChrome: boolean) => css`
    z-index: ${index};
    grid-column: 1 / span 3;
    grid-row: ${1 + index} / span 2;
    height: 130%;
    align-self: end;
    animation: waves-side ${15 - index / 3}s ease-in-out alternate infinite,
      waves-up-down ${4 - index / 10}s ease-in-out alternate infinite;
    ${isChrome &&
    css`
      min-width: 200%;
    `}
    @media screen and (min-width: 600px) {
      min-width: 200%;
    }
    @keyframes waves-side {
      0% {
        margin-left: -1%;
      }
      100% {
        margin-left: -99%;
      }
    }

    @keyframes waves-up-down {
      0% {
        margin-bottom: 0px;
      }
      100% {
        margin-bottom: -20px;
      }
    }
  `,
}
