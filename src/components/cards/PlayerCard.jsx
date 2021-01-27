import React from 'react'

import { Card, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import virat from '../../assets/india-players/virat.jpeg'
import rohit from '../../assets/india-players/rohit-sharma.jpg'
import shikhar from '../../assets/india-players/shikhar-dhawan.jpg'
import ajinkya from '../../assets/india-players/ajinkya-rahane.jpg'
import hardik from '../../assets/india-players/hardik-pandya.jpg'
import rashwin from '../../assets/india-players/ravichandran-ashwin.jpg'
import klrahul from '../../assets/india-players/kl-rahul.jpg'
import shubhamg from '../../assets/india-players/shubman-gill.jpg'
import chetesh from '../../assets/india-players/cheteshwar-pujara.jpg'
import ravindra from '../../assets/india-players/ravindra-jadeja.jpg'
import manish from '../../assets/india-players/manish-pandey.jpg'

export default function PlayerCard({ player }) {
  const cardText = {
    fontWeight: 'bold',
  }
  const playersList = {
    'Virat Kohli': virat,
    'Rohit Sharma': rohit,
    'Shikhar Dhavan': shikhar,
    'Ajinkya Rahane': ajinkya,
    'Hardik Pandya': hardik,
    'R. Ashwin': rashwin,
    'KL Rahul': klrahul,
    'Shubham Gill': shubhamg,
    'Ravindra Jadeja': ravindra,
    'Cheteshwar Pujara': chetesh,
    'Manish Pandey': manish,
  }
  const { id, name } = player
  return (
    <Card
      className="cardMain text-center"
      style={{
        borderRadius: '7px',
        marginTop: '10px',
        padding: '10px',
      }}
    >
      <Link to={`/playerscreen/${id}`}>
        <Image
          src={playersList[name]}
          style={{ height: '200px', width: '200px' }}
          className="text-center"
        />
        <h4 className="pt-3">{name}</h4>
      </Link>
      <Card.Text style={cardText}></Card.Text>
    </Card>
  )
}
