import React from 'react'
import { Row, Container, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import TeamCard from '../cards/TeamCard.jsx'
import teams from './../../data/teams/teams.js'

export default function Teams() {
  const teams1 = teams.slice(0, 4)
  const teams2 = teams.slice(4)
  return (
    <>
      <Row>
        <Container>
          <Link to="/" className="btn btn-info" style={{ borderRadius: '7px' }}>
            <i className="fas fa-arrow-left"> &nbsp; back</i>
          </Link>

          <h1 className="text-center ">Teams</h1>
          <Row>
            <Col>
              {teams1.map(team => (
                <TeamCard teamInfo={team} key={team.unique_id} />
              ))}
            </Col>
            <Col>
              {teams2.map(team => (
                <TeamCard teamInfo={team} key={team.unique_id} />
              ))}
            </Col>
          </Row>
        </Container>
      </Row>
    </>
  )
}
