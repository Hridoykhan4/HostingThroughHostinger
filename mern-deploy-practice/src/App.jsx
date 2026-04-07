import { useState } from 'react'
import './App.css'
function App() {
  const [count, setCount] = useState(0)
  return (
      <>
      <p>{count}</p>
      <button disabled={count === 5} onClick={() => setCount(p => p + 1)}>Click me</button>
      </>
  )
}

export default App
