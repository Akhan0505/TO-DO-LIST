import React from 'react'
import { BrowserRouter , Routes , Route} from 'react-router-dom'
import TodoAppScreen from '../components/TodoAppScreen'
import Login from '../components/Login'

export default function RouterDom() {

  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<TodoAppScreen />}/>
        <Route path='/LoginPage' element={<Login />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
