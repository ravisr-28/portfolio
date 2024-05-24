import { Toaster } from 'react-hot-toast'
import './App.css'
import About from './Components/About'
import Contact from './Components/Contact'
import Experience from './Components/Experience'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Portfolio from './Components/Portfolio'
function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <Portfolio />
        <Experience />
        <Contact />
        <Footer />
      </div>
      <Toaster />
    </>
  );
}

export default App

// Password written in about
