import React from 'react'
import { Row, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function ScoreTable() {
  return (
    <>
      <Row>
        <Container>
          <Link to="/" className="btn btn-info" style={{ borderRadius: '7px' }}>
            <i class="fas fa-arrow-left"> Back</i>
          </Link>
          <h1 className="text-center ">Score Table</h1>
        </Container>
      </Row>
    </>
  )
}
