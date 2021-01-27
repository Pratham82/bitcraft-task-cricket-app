import React from 'react'

import { Card } from 'react-bootstrap'
import moment from 'moment'

export default function MatchCard({ matchInfo }) {
  const cardText = {
    fontWeight: 'bold',
  }
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
      <Card.Text style={cardText}>
        Date: {moment.utc(matchInfo.dateTimdateeGMT).format('DD-MM-YYYY')}
      </Card.Text>
      <Card.Text style={cardText}>
        Match Type: <strong>{matchInfo.type}</strong>{' '}
      </Card.Text>
    </Card>
  )
}
