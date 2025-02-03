import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // javascirpt kodları yazılır
  let a = 5;

  let isismler = ["Berkan", "Aslı", "İrem"]
  return (
    // html kodları yazarız.
    <div>
      {
        isismler.map((isim, index) => (
          <div style={{
            backgroundColor: 'orange',
            border: "1px solid black"
          }} key={index}> {isim}</div>
        ))
      }
    </div>
  )
}

export default App
