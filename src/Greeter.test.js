// import { react } from 'react'
import ReactDOM from 'react-dom'
import React from 'react'
import { render, screen } from '@testing-library/react'
import Greeter from './Greeter'

test('renders the greeter correctly without a name', () => {
  render(<Greeter />)
  const pElement = screen.getByText(/stranger/i)
  expect(pElement).toBeInTheDocument()
})

test('renders the greeter correctly with a name', () => {
  render(<Greeter name="Fernando" />)
  const pElement = screen.getByText(/Hi there Fernando/i)
  expect(pElement).toBeInTheDocument()
})
