import { SideMenuConfig } from './config'

export const getActiveTab: (
  sideMenuConfigs: SideMenuConfig,
  pathName: string,
) => string = (sideMenuConfigs, pathName) => {
  const activeSideMenu = sideMenuConfigs.find(({ link }) => pathName === link)

  if (activeSideMenu) return activeSideMenu.key

  const pathFragments = pathName.split('/')
  if (pathFragments.length < 2) return sideMenuConfigs[0].key

  pathFragments.pop()

  return getActiveTab(sideMenuConfigs, pathFragments.join('/'))
}
