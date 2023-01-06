import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Guide from './pages/Guide'
import { Route , Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/how' element={<Guide />} />
        <Route path='*' element={<h1>404 Not Found !</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
