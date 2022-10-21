import { screen, render } from '@testing-library/react'
import Heading from '.'

describe('<Heading />', () => {
  it('should render the component', () => {
    render(<Heading>Main</Heading>)

    expect(screen.getByRole('heading', { name: /main/i })).toBeInTheDocument()
  })
})
