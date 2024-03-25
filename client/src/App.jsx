
import './App.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Header from './components/Header'
import Projects from './pages/Projects'

function App() {

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/Sign-in" element={<SignIn/>} />
        <Route path="/Sign-up" element={<SignUp/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/projects" element={<Projects/>} />
       </Routes>
    </BrowserRouter>
  )
}

export default App
