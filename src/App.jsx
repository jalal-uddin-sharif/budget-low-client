import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AuthContext } from './authentication/authprovider/AuthProvider'

function App() {
  const user = useContext(AuthContext)
  return (
    <>
    <h1 className='text-red-500'>hello</h1>
    </>
  )
}

export default App
