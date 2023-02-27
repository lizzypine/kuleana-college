import { render, fireEvent, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Navbar'

describe('Navbar navigation', () => {
  test('renders the About component when user navigates to /about', () => {
    render(<Navbar />, { wrapper: BrowserRouter })
    const aboutLink = screen.getByText('About')
    fireEvent.click(aboutLink)
    const aboutHeading = screen.getByText('About', { name: /About/i })
    expect(aboutHeading).toBeInTheDocument()
  })
  test('renders the Contact component when user navigates to /contact', () => {
    render(<Navbar />, { wrapper: BrowserRouter })
    const contactLink = screen.getByText('Contact')
    fireEvent.click(contactLink)
    const contactHeading = screen.getByText('Contact', { name: /Contact/i })
    expect(contactHeading).toBeInTheDocument()
  })
})
