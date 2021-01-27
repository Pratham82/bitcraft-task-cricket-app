import React from 'react'

import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import india from '../../assets/countries/india.jpg'
import pakistan from '../../assets/countries/pakistan.png'
import england from '../../assets/countries/england.jpeg'
import southafc from '../../assets/countries/southafc.png'
import newz from '../../assets/countries/newz.png'
import australia from '../../assets/countries/australia.png'
import bangla from '../../assets/countries/bangla.png'
import srilanka from '../../assets/countries/srilanka.jpg'

export default function TeamCard({ teamInfo }) {
  const cardText = {
    fontWeight: 'bold',
  }
  const { team, unique_id } = teamInfo
  const imageList = {
    India: india,
    England: england,
    'New Zeland': newz,
    'South Africa': southafc,
    Australia: australia,
    Pakistan: pakistan,
    Bangladesh: bangla,
    'Sri Lanka': srilanka,
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
      <Link to={`/teamscreen/${unique_id}`}>
        <h4>{team}</h4>
        <Card.Img
          src={imageList[team]}
          style={{ height: '200px', width: '280px' }}
        />
      </Link>
      <Card.Text style={cardText}></Card.Text>
      <Card.Text style={cardText}></Card.Text>
    </Card>
  )
}
