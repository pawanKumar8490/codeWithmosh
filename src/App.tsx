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

const handleSelectItme = (item:string) => {
    console.log(item)
}

  return (
    <>
      <Listgroup items={items} heading='Cities' onSelectItme={handleSelectItme}/>
    </>
  )
}

export default App
