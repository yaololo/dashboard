type Config = {
  text: string
  key: string
  link: string
  children?: SideMenuConfig
}

export type SideMenuConfig = Array<Config>

