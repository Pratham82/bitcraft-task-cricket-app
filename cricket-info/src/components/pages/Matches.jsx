import React, { useEffect, useState } from 'react'
import { Row, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import matchesData from './../../data/matches'
import moment from 'moment'
import MatchCard from '../cards/MatchCard'

export default function Matches() {
  const [matches, setMatches] = useState([])

  useEffect(() => {
    setMatches(matchesData)
  })

  //console.log(moment.utc('2021-01-28T08:00:00.000Z').format('DD-MM-YYYY'))
  console.log(matches)

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
          <h1 className="text-center text-white">Matches</h1>
          {matches.map(match => (
            <MatchCard matchInfo={match} />
          ))}
        </Container>
      </Row>
    </>
  )
}
