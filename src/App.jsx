
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './conponent/Footer/Footer'
import Header from './conponent/Header/Header'
function App() {


  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
