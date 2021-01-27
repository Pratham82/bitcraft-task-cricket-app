import React from 'react'
import { Row, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Results() {
  return (
    <>
      <Row>
        <Container>
          <Link to="/" className="btn btn-info" style={{ borderRadius: '7px' }}>
            <i className="fas fa-arrow-left"> &nbsp; back</i>
          </Link>
          <h1 className="text-center ">Results</h1>
        </Container>
      </Row>
    </>
  )
}