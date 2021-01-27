import React from 'react'
import { Row, Col, Container, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const HomeScreen = () => {
  return (
    <main className="py-2">
      <Container>
        <h1 className="text-center">Welcome to Cricket feed</h1>
        <Row className="pt-5">
          <Col>
            <Card className="cardMain">
              <Card.Body>
                <Link to="/teams">
                  <h2 className="cardHeading text-center">
                    Teams <i class="fas fa-arrow-right"></i>
                  </h2>
                </Link>
                <Card.Text style={{ padding: '5px', fontWeight: 'bold' }}>
                  Check out the teams. Description of all the teams that are
                  playig in this tournament
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="cardMain">
              <Card.Body>
                <Link to="/players">
                  <h2 className="cardHeading text-center">
                    Players <i class="fas fa-arrow-right"></i>
                  </h2>
                </Link>
                <Card.Text style={{ padding: '5px', fontWeight: 'bold' }}>
                  Check out player's profile. Checkout stats and profile of your
                  favourite player
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="cardMain">
              <Card.Body>
                <Link to="/matches">
                  <h2 className="cardHeading text-center">
                    Matches <i class="fas fa-arrow-right"></i>
                  </h2>
                </Link>
                <Card.Text style={{ padding: '5px', fontWeight: 'bold' }}>
                  Checkout upcoming matches that are going to take place.
                  Support your favourite team
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="cardMain">
              <Card.Body>
                <Link to="/scores">
                  <h2 className="cardHeading text-center">
                    Score Table <i class="fas fa-arrow-right"></i>
                  </h2>
                </Link>
                <Card.Text style={{ padding: '5px', fontWeight: 'bold' }}>
                  Checkout score table. Chekout the current Scores and rakings
                  of all teams woldwide.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="cardMain">
              <Card.Body>
                <Link to="/venues">
                  <h2 className="cardHeading text-center">
                    Venues <i class="fas fa-arrow-right"></i>
                  </h2>
                </Link>
                <Card.Text style={{ padding: '5px', fontWeight: 'bold' }}>
                  Checkout upcoming matches that are going to take place.
                  Support your favourite team
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="cardMain">
              <Card.Body>
                <Link to="/results">
                  <h2 className="cardHeading text-center">
                    Results <i class="fas fa-arrow-right"></i>
                  </h2>
                </Link>
                <Card.Text style={{ padding: '5px', fontWeight: 'bold' }}>
                  Checkout the results of all mathces, Nationl, Iternational.
                  Root for your favourite team.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  )
}

export default HomeScreen
