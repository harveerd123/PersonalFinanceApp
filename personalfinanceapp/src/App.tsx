
import './App.css'
import WelcomeScreen from './pages/WelcomeScreen'
import IncomeOutcomeScreen from "./pages/IncomeOutcomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {

  return (
      <>
          <Router>
              <Routes>
                  <Route path="/" element={<WelcomeScreen />} />
                  <Route path="/income-outcome" element={<IncomeOutcomeScreen />} />
              </Routes>
          </Router>
    </>
  )
}

export default App
