import React from 'react'
import { Row, Container, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import players from '../../data/teams/players.js'
import PlayerCard from '../cards/PlayerCard.jsx'

export default function Players() {
  const players1 = players.slice(0, 6)
  const players2 = players.slice(6)
  return (
    <>
      <Row>
        <Container>
          <Link to="/" className="btn btn-info" style={{ borderRadius: '7px' }}>
            <i className="fas fa-arrow-left"> &nbsp; back</i>
          </Link>

          <h1 className="text-center ">Players</h1>
          <Row>
            <Col>
              {players1.map(player => (
                <PlayerCard player={player} />
              ))}
            </Col>
            <Col>
              {players2.map(player => (
                <PlayerCard player={player} />
              ))}
            </Col>
          </Row>
        </Container>
      </Row>
    </>
  )
}
