/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import { ReactTestRenderer } from 'react-test-renderer'
import Home from './Home'

describe('Home', () => {
  it('renders Home component', () => {
    render(<Home />)
    screen.debug()
  })
})

// test('use jsdom in this test file', () => {
//   const element = document.createElement('div')
//   expect(element).not.toBeNull()
// })

// describe('Test <Footer />', () => {
//   test('Should render component', async () => {
//     const text = render(<Footer />)
//     expect(text).toBeInTheDocument()
//   })
// })
export * from '@testing-library/react'
