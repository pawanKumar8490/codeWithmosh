import { useState } from 'react'
// import Listgroup from './components/Listgroup';
import Alert from './components/alert';
import './App.css'
import Button from './components/button';

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

   const [alertVisible, setAlertVisibilty] = useState(false)

  return (
    <>
      {/* list group  */}
      {/* <Listgroup items={items} heading='Cities' onSelectItme={handleSelectItme}/> */} 

      {/* alert component */}
      {/* <Alert>
        Hello childern 
        <span> Code mosh</span>  
      </Alert> */}

     {alertVisible && <Alert onClose={() => setAlertVisibilty(false)}>My Alert</Alert>}
      <Button color='primary' onClickBtn={() => setAlertVisibilty(true)}>My button</Button>
    </>
  )
}

export default App
