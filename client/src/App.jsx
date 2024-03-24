
import './App.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/Sign-in" element={<SignIn/>} />
        <Route path="/Sign-up" element={<SignUp/>} />
        <Route path="/Home" element={<Home/>} />
       </Routes>
    </BrowserRouter>
  )
}

export default App
