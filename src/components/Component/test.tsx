import { screen, render } from '@testing-library/react'

import Component from '.'

describe('<Component />', () => {
  it('it should render the heading', () => {
    const { container } = render(<Component />)

    expect(
      screen.getByRole('heading', { name: /nextjs boilerplate/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
