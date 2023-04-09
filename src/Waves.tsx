import { css } from '@emotion/react'
import { Fragment } from 'react'

export function Waves() {
  return (
    <Fragment>
      <img
        src="/images/welle4.svg#svgView(preserveAspectRatio(none))"
        alt=""
        css={styles.wave(1)}
      />
      <img
        src="/images/welle3.svg#svgView(preserveAspectRatio(none))"
        alt=""
        css={styles.wave(2)}
      />
      <img
        src="/images/welle2.svg#svgView(preserveAspectRatio(none))"
        alt=""
        css={styles.wave(3)}
      />
      <img
        src="/images/welle1.svg#svgView(preserveAspectRatio(none))"
        alt=""
        css={styles.wave(4)}
      />
    </Fragment>
  )
}

const styles = {
  wave: (index: number) => css`
    z-index: ${index};
    grid-column: 1 / span 3;
    grid-row: ${1 + index} / span 2;
    height: 130%;
    min-width: 200%;
    align-self: end;
    animation: waves-side ${15 - index / 3}s ease-in-out alternate infinite,
      waves-up-down ${4 - index / 10}s ease-in-out alternate infinite;

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
