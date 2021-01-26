import React from 'react'
import { Row, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Teams() {
  return (
    <>
      <Row>
        <Container>
          <Link
            to="/"
            className="btn btn-light"
            style={{ borderRadius: '7px' }}
          >
            <i class="fas fa-arrow-left"> Back</i>
          </Link>

          <h1 className="text-center text-white">Teams</h1>
          <p>{}</p>
        </Container>
      </Row>
    </>
  )
}
