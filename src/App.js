import React from 'react'
import { useEffect } from "react"
import { useState } from 'react'

function App() {
  const[alaram,setAlaram]=useState(null)
  useEffect(() => {
    console.log("Alaram is ringing")
  },[alaram])

  return (
    <div>
    
    
    <button onClick={()=>setAlaram(false)}>
Alaram ring
    </button>
    </div>
  )
}

export default App