import { Row, Container } from 'react-bootstrap'
import teamsData from './../../data/teams/teams.js'

export default function TeamScreen({ match }) {
  const currentTeam = teamsData.filter(
    t => t.unique_id === Number(match.params.id)
  )

  return (
    <>
      <Row>
        <Container>
          <h1 className="text-center">{currentTeam[0].team}</h1>
        </Container>
        <p>{}</p>
      </Row>
    </>
  )
}
