import React from 'react';
import { useState } from 'react';
import './App.css';
import Comp from './Comp';
import { users } from './Comp';



function App() {
  console.log(users)
  return (
    <div>
      <Comp />
      <hr />
      <Comp />
    </div>
  );
}

export default App;
