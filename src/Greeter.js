import React from 'react'
import ReactDOM from 'react-dom'

export default function Greeter({ name }) {
  if (name) {
    return <p>Hi there {name}</p>
  } else {
    return <p>Hello stranger, nice to meet you!</p>
  }
}
