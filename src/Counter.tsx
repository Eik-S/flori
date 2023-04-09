import { css } from '@emotion/react'

export function Counter() {
  const currentDate = new Date()
  const returnDate = new Date('2023-10-13')
  const remainingDays = Math.max(
    Math.floor((returnDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24)),
    0,
  )

  return (
    <div css={styles.counterCard}>
      <h1 css={styles.headline}>{remainingDays} Tage</h1>
      <p css={styles.text}>ist Flo noch segeln</p>
    </div>
  )
}

const styles = {
  counterCard: css`
    z-index: 10;
    grid-column: 1 / span 3;
    grid-row: 1 / span 3;
    place-self: center;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 20px;
    padding: 12px 24px;
    text-align: center;
  `,
  headline: css`
    font-size: 3em;
    margin: 0;
  `,
  text: css`
    font-size: 1.2em;
    margin: 12px;
  `,
}
