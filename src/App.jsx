import { useState } from 'react'
import Login from './Component/Login_signUp/Login_signUp'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
      <Login></Login>
    </> 
  )
}

export default App
