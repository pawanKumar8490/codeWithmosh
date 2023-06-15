import { useState } from 'react'
// import Listgroup from './components/Listgroup';
import Alert from './components/alert'
import './App.css'

function App() {

  /* 
  list group working
  
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

  */

  return (
    <>
      {/* list group  */}
      {/* <Listgroup items={items} heading='Cities' onSelectItme={handleSelectItme}/> */} 

      {/* alert component */}
      <Alert>
        Hello childern 
        <span>Alert</span>  
      </Alert>
    </>
  )
}

export default App
