import React, { useState } from 'react'
import Output from '../output/Output'

const Greeting = () => {
  const [changeText, setChangeText] = useState(false)

  const handleClick = () => {
    setChangeText(true)
  }
  return (
    <div>
      <h2>Hello World</h2>
      {!changeText && <Output>Welcome to my app</Output>}
      {changeText && <Output>Changed</Output>}
      <button onClick={handleClick}>Change Text</button>
    </div>
  )
}

export default Greeting
