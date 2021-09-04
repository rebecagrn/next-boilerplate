import { screen, render } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('it should render the heading', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /nextjs boilerplate/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
