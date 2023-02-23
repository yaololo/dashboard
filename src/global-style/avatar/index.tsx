import { css } from 'styled-components'

const base = css`
  position: relative;
  background-color: var(--grey-1);
  display: inline-block;
  border: 1px solid transparent;
  color: white;
`

export const avatarCss = css`
  .avatar {
    ${base}

    &-l {
      width: 40px;
      height: 40px;
      font-size: 24px;
    }

    &-m {
      width: 32px;
      height: 32px;
      font-size: 18px;
    }

    &-s {
      width: 24px;
      height: 24px;
      font-size: 14px;
    }

    &-circle {
      border-radius: 50%;
    }

    &-square {
      border-radius: 4px;
    }
  }

  /* .avatar-l {
    width: 40px;
    height: 40px;
    font-size: 24px;
  }

  .avatar-m {
    width: 32px;
    height: 32px;
    font-size: 18px;
  }

  .avatar-s {
    width: 24px;
    height: 24px;
    font-size: 14px;
  } */
`
