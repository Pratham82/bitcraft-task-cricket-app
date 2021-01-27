import React, { useEffect, useState } from 'react'
import { Row, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import matchesData from './../../data/matches'
import MatchCard from '../cards/MatchCard'

export default function Matches() {
  const [matches, setMatches] = useState([])

  useEffect(() => {
    setMatches(matchesData)
  }, [])

  return (
    <>
      <Row>
        <Container>
          <Link to="/" className="btn btn-info" style={{ borderRadius: '7px' }}>
            <i className="fas fa-arrow-left"> &nbsp; back</i>
          </Link>
          <h1 className="text-center ">Matches</h1>
          {matches.map(match => (
            <MatchCard matchInfo={match} key={match.unique_id} />
          ))}
        </Container>
      </Row>
    </>
  )
}
