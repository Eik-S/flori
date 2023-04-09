import { css } from '@emotion/react'
import { Fragment } from 'react'

interface InitialStyleProps {
  width: number
  speed: number
  startPosition: number
  loopDelay: number
}

export function Clouds() {
  const amount = 3
  const speed = 1
  const available = 4

  function getInitialStyleProps(): InitialStyleProps {
    const startPosition = window.innerWidth * Math.random()
    const loopDelay = ((window.innerWidth - startPosition) / 50) * speed

    const relativeSpeed = window.innerWidth / 50 + Math.random() * 10 * speed
    const width = Math.random() * (window.innerWidth / 10) + ((window.innerWidth / 2) % 500)

    return {
      width,
      speed: relativeSpeed,
      startPosition,
      loopDelay,
    }
  }

  return (
    <Fragment>
      {[...Array(amount)].map((_, index) => {
        const props = getInitialStyleProps()
        return (
          <img
            key={index}
            css={styles.cloud(props)}
            alt=""
            src={`/images/wolke${Math.ceil(Math.random() * available)}.svg`}
          />
        )
      })}
    </Fragment>
  )
}

const styles = {
  cloud: ({ loopDelay, speed, startPosition, width }: InitialStyleProps) => {
    return css`
      position: absolute;
      top: ${Math.random() * 100}px;
      left: ${startPosition}px;
      width: ${width}px;
      animation: ${loopDelay}s linear cloud-initial,
        ${speed}s linear ${loopDelay}s infinite cloud-movement;

      @keyframes cloud-initial {
        100% {
          left: 100vw;
        }
      }

      @keyframes cloud-movement {
        0% {
          left: -${width * 2}px;
        }
        100% {
          left: 100vw;
        }
      }
    `
  },
}
