import { AvatarSize } from './type'

const getAvatarInnerBoxSize = (size: number) => {
  const dimension = `${size}px`
  const fontSize = `${Math.floor(size / 2)}px`
  return {
    width: dimension,
    height: dimension,
    fontSize,
  }
}

export const getStyles = ({
  style,
  size,
}: {
  style: React.HTMLAttributes<HTMLSpanElement>['style']
  size: AvatarSize
}) => {
  let combinedStyles = style || {}

  if (typeof size === 'number') {
    combinedStyles = { ...getAvatarInnerBoxSize(size), ...combinedStyles }
  }

  return combinedStyles
}
