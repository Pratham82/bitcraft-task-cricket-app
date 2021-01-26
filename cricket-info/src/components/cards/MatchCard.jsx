import React from 'react'

import { Row, Col, Container, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import moment from 'moment'

export default function MatchCard({ matchInfo }) {
  console.log(matchInfo)
  return (
    <Card
      className="cardMain text-center"
      style={{
        borderRadius: '7px',
        marginTop: '10px',
        padding: '10px',
      }}
    >
      <h4>
        {matchInfo.team1} Vs. {matchInfo.team2}
      </h4>
      <Card.Text>
        {moment.utc(matchInfo.dateTimdateeGMT).format('DD-MM-YYYY')}
      </Card.Text>
      <Card.Text>
        Match Type: <strong>{matchInfo.type}</strong>{' '}
      </Card.Text>
    </Card>
  )
}
