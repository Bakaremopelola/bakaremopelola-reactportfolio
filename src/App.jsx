import {Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar'
import './App.css'
import Contacts from './Components/Contacts'
import Experience from './Components/Experience'
import About from './Components/About'
import Portfolio from './Components/Portfolio'
import Services from './Components/Services'
import Home from './Components/Home'


const App=()=> {

  return (
    <>
        <NavBar/>
         
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/About' element={<About/>}></Route>
            <Route path='/Contacts' element={<Contacts/>}></Route>
            <Route path='/Experience' element={<Experience/>}></Route>
            <Route path='/Portfolio' element={<Portfolio/>}></Route>
            <Route path='/Services' element={<Services/>}></Route>
          </Routes>
      
         
        
        
        
    </>
  )
}

export default App;
