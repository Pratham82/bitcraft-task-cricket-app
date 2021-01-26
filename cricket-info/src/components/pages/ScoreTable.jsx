import React from 'react'
import { Row, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function ScoreTable() {
  return (
    <>
      <Row>
        <Container>
          <Link
            to="/"
            className="btn btn-light"
            style={{ borderRadius: '7px' }}
          >
            back
          </Link>
          <h1 className="text-center text-white">Score Table</h1>
        </Container>
      </Row>
    </>
  )
}