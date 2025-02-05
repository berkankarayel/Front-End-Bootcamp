import { useState } from 'react'
import './App.css'

function App() {

  const [vize1, setvize1] = useState(0)
  const [vize2, setvize2] = useState(0)

  const ortalamaBul = () => {
    debugger
    const toplamsonuc = topla() / 2;
    yazdir(toplamsonuc)
  }

  const topla = () => {
    const toplam = vize1 + vize2;
    debugger;
    return toplam;
  }

  const yazdir = (sonuc) => {
    debugger
    console.log("ortalma" + sonuc)
  }

  return (
    <>

      <div>
        <input type="number" value={vize1} onChange={(e) => setvize1(Number(e.target.value))} />
      </div>
      <div>
        <input type="number" value={vize2} onChange={(e) => setvize2(Number(e.target.value))} />
      </div>
      <div>
        <button onClick={ortalamaBul}>Ortalama Bul</button>
      </div>


    </>
  )
}

export default App
