import { useEffect, useState } from 'react'


import './App.css'
import axios from 'axios'

const BASEURL = "http://localhost:3001"

function App() {

  const getAllUSers = async () => {
    const response = await axios.get(BASEURL + "/users");
    console.log(response.data);
  }

  const getUserById = async () => {
    const response = await axios.get(BASEURL + "/users/" + userId)
    console.log(response.data)
  }

  useEffect(() => {
    // getAllUSers();
    getUserById(1)
  }, [])

  return (
    <div>

    </div>
  )
}

export default App
