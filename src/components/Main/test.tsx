import { screen, render } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('it should render the heading', () => {
    render(<Main />)

    expect(
      screen.getByRole('heading', { name: /testando/i })
    ).toBeInTheDocument()
  })
})
