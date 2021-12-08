import React, { useState } from 'react'

const Greeting = () => {
  const [changeText, setChangeText] = useState(false)

  const handleClick = () => {
    setChangeText(true)
  }
  return (
    <div>
      <h2>Hello World</h2>
      {!changeText && <p>Welcome to my app</p>}
      {changeText && <p>Changed</p>}
      <button onClick={handleClick}>Change Text</button>
    </div>
  )
}

export default Greeting
