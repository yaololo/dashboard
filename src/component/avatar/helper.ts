import { CSSProperties } from 'react'

export const getAvatarInnerBoxSize: (size: number) => CSSProperties = (
  size,
) => {
  const dimension = `${size}px`
  const fontSize = `${Math.floor(size / 2)}px`
  return {
    width: dimension,
    height: dimension,
    fontSize,
  }
}
