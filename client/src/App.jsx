
import './App.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import Header from './components/Header'
import Projects from './pages/Projects'
import SignUp from './pages/SignUp1'
import  FooterComp  from './components/Footer'
import PrivateRoute from './components/PrivateRoute'
import Dashboard from './pages/Dashboard'


function App() {

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/Signin" element={<SignIn/>} />
        <Route path="/Signup" element={<SignUp/>} />

        <Route element={<PrivateRoute/>}>
          <Route path='/dashboard'element={<Dashboard/>}/>
        </Route>

        <Route path="/Home" element={<Home/>} />
        <Route path="/projects" element={<Projects/>} />
       </Routes>
    <FooterComp/>
    </BrowserRouter>
  )
}

export default App
