import './App.css'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/layouts/Navbar'
import HomeScreen from './components/screens/HomeScreen.jsx'

export default function App() {
  return (
    <Router>
      <Navbar />
      <main className="py-4 main-container">
        <Container>
          <HomeScreen />
        </Container>
      </main>
    </Router>
  )
}
