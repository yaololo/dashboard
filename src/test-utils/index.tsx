/* istanbul ignore file */

import { ReactElement } from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import type { RenderOptions } from '@testing-library/react'

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  route: string
}

const renderWithRouter = (
  ui: ReactElement,
  { route = '/', ...renderOptions }: ExtendedRenderOptions,
) => {
  window.history.pushState({}, 'Test page', route)

  return {
    user: userEvent.setup(),
    ...render(ui, { ...renderOptions }),
  }
}

export * from '@testing-library/react'
export { renderWithRouter as render }
