import { useState } from 'react'
import Listgroup from './components/Listgroup';
import './App.css'

function App() {

  const items = [
    'New York',
    'San Farnsico',
    'Tokyo',
    'London',
    'Paris'
]

  return (
    <>
      <Listgroup items={items} heading='Cities'/>
    </>
  )
}

export default App
