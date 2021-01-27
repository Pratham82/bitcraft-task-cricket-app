import React from 'react'
import { Row, Col, ListGroup, Card, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import players from '../../data/teams/players.js'
import virat from '../../assets/india-players/virat.jpeg'
import rohit from '../../assets/india-players/rohit-sharma.jpg'
import shikhar from '../../assets/india-players/shikhar-dhawan.jpg'
import ajinkya from '../../assets/india-players/ajinkya-rahane.jpg'
import hardik from '../../assets/india-players/hardik-pandya.jpg'
import rashwin from '../../assets/india-players/ravichandran-ashwin.jpg'
import klrahul from '../../assets/india-players/kl-rahul.jpg'
import shubhamg from '../../assets/india-players/shubman-gill.jpg'
import chetesh from '../../assets/india-players/cheteshwar-pujara.jpg'
import ravindra from '../../assets/india-players/ravindra-jadeja.jpg'
import manish from '../../assets/india-players/manish-pandey.jpg'

export default function PlayerScreen({ match }) {
  const currentPlayer = players.filter(
    t => Number(t.id) === Number(match.params.id)
  )
  const playersList = {
    'Virat Kohli': virat,
    'Rohit Sharma': rohit,
    'Shikhar Dhavan': shikhar,
    'Ajinkya Rahane': ajinkya,
    'Hardik Pandya': hardik,
    'R. Ashwin': rashwin,
    'KL Rahul': klrahul,
    'Shubham Gill': shubhamg,
    'Ravindra Jadeja': ravindra,
    'Cheteshwar Pujara': chetesh,
    'Manish Pandey': manish,
  }

  const { name, team, age, info } = currentPlayer[0]
  return (
    <>
      <Link to="/" className="btn btn-info" style={{ borderRadius: '7px' }}>
        <i className="fas fa-arrow-left"> &nbsp; back</i>
      </Link>
      <Container style={{ marginTop: '30px' }}>
        <Row>
          <Col md={6}>
            <h3>{name}</h3>
            <Card.Img src={playersList[name]} alt={name} />
          </Col>
          <Col md={6}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col className={{ fontSize: '25px' }}>
                      <h4>Name: {name}</h4>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Age: {age} </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Team: {team} </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  {' '}
                  <Row>
                    <Col>Info: {info} </Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}
