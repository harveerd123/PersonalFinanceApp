
import './App.css'
import WelcomeScreen from './pages/WelcomeScreen'
import IncomeExpensesScreen from "./pages/IncomeExpensesScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {

  return (
      <>
          <Router>
              <Routes>
                  <Route path="/" element={<WelcomeScreen />} />
                  <Route path="/income-expense" element={<IncomeExpensesScreen />} />
              </Routes>
          </Router>
    </>
  )
}

export default App
