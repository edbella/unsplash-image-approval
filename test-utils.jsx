import { render } from '@testing-library/react';
import { AuthenticationProvider } from './src/context/Authentication';

const AllTheProviders = ({children}) => {
  return (
    <AuthenticationProvider>
          {children}
    </AuthenticationProvider>
  )
}

const customRender = (
  ui,
  options,
) => render(ui, {...options, wrapper: AllTheProviders})

export * from '@testing-library/react'
export {customRender as render}