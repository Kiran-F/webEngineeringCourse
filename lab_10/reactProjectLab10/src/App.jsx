// import { useState } from 'react'
import Posts from './components/Post';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeComponent from './components/EmployeeComponent-1'

function App() {
  return (
    <>
      <EmployeeComponent />
      <Posts />
    </>
  )
}

export default App