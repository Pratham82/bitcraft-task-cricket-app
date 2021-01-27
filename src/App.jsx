import './App.css'
import { Container } from 'react-bootstrap'
import { BrowserRouter, BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/layouts/Navbar'
import HomeScreen from './components/screens/HomeScreen.jsx'
import Teams from './components/pages/Teams'
import Matches from './components/pages/Matches'
import ScoreTable from './components/pages/ScoreTable'
import Players from './components/pages/Players'
import TeamScreen from './components/screens/TeamScreen'
import Venues from './components/pages/Venues'
import Results from './components/pages/Results'
import PlayerScreen from './components/screens/PlayerScreen'

export default function App() {
  return (
    <BrowserRouter>
      <Router>
        <Navbar />
        <main className="py-4 main-container">
          <Container>
            <Route path="/" component={HomeScreen} exact={true} />
            <Route path="/teams" component={Teams} />
            <Route path="/players" component={Players} />
            <Route path="/matches" component={Matches} />
            <Route path="/scores" component={ScoreTable} />
            <Route path="/venues" component={Venues} />
            <Route path="/results" component={Results} />
            <Route path="/teamscreen/:id" component={TeamScreen} />
            <Route path="/playerscreen/:id" component={PlayerScreen} />
          </Container>
        </main>
      </Router>
    </BrowserRouter>
  )
}
