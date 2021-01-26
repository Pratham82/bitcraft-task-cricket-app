import React, { useState, useEffect } from 'react'
import { Row, Col, Container, Card, Image } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
import bg from './../../bg.jpg'
import teams from './../../assets/teams.jpg'
import players from './../../assets/players.png'

const HomeScreen = () => {
  return (
    <main className="py-2">
      <Container>
        <Row>
          <LinkContainer to="/teams">
            <Col>
              <Card
                className="cardMain"
                style={{
                  borderRadius: '7px',
                  marginTop: '10px',
                }}
              >
                <Card.Body>
                  <Image src={teams} fluid />
                  <h2 className="cardHeading text-center">Teams</h2>
                </Card.Body>
              </Card>
            </Col>
          </LinkContainer>
          <LinkContainer to="/player">
            <Col>
              <Card
                style={{
                  borderRadius: '7px',
                  marginTop: '10px',
                }}
              >
                <Card.Body>
                  <Image src={players} fluid />
                  <h2 className="cardHeading text-center">Players</h2>
                </Card.Body>
              </Card>
            </Col>
          </LinkContainer>
        </Row>
        <Row>
          <LinkContainer to="/matches">
            <Col>
              <Card
                style={{
                  borderRadius: '7px',
                  marginTop: '10px',
                }}
              >
                <Card.Body>
                  <Image src={bg} fluid />

                  <h2 className="cardHeading">Matches</h2>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </LinkContainer>
          <LinkContainer to="/socres">
            <Col>
              <Card
                style={{
                  borderRadius: '7px',
                  marginTop: '10px',
                }}
              >
                <Card.Body>
                  <Image src={bg} fluid />

                  <h2 className="cardHeading">Score Table</h2>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </LinkContainer>
        </Row>
      </Container>
    </main>
  )
}

export default HomeScreen
