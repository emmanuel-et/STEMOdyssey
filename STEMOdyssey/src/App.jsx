import {Routes, Route} from 'react-router-dom';
import './styles/App.css'
import HomePage from './pages/HomePage';
import { MathGame } from './pages/MathGame';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/" element={<MathGame />} /> */}
      </Routes>
    </>
  )
}

export default App
