import { render, fireEvent, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Footer from './Footer'

describe('Footer navigation', () => {
  test('renders the Credits component when user navigates to /credits', () => {
    render(<Footer />, { wrapper: BrowserRouter })
    const creditsLink = screen.getByText('Credits')
    fireEvent.click(creditsLink)
    const creditsHeading = screen.getByText('Credits', { name: /Credits/i })
    expect(creditsHeading).toBeInTheDocument()
  })
})
