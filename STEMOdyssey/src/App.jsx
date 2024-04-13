import {Routes, Route} from 'react-router-dom';
import './styles/App.css'
import HomePage from './pages/HomePage';
import { MathGame, CSGame } from './pages/MathGame';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/math" element={<MathGame />} />
        <Route path="/cs" element={<CSGame />} />
      </Routes>
    </>
  )
}

export default App
  