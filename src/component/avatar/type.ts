export type AvatarType = 'square' | 'circle'
export type AvatarSize = 's' | 'm' | 'l' | number

export type Props = {
  type?: AvatarType
  size?: 's' | 'm' | 'l'
  icon?: React.ReactNode
} & React.HTMLAttributes<HTMLSpanElement>
