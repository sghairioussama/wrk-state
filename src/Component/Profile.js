import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { propTypes } from 'react-bootstrap/esm/Image'
// Creating Profile component which will be the card that contains the img and name,age,bio,profession a,d the laert button

const Profile = (props) => {
  return (
    <div className='Carta'>
    <Card style={{ width: '18rem' }}>
    {props.children}
    <Card.Body>
      <Card.Title>{props.name}</Card.Title>
      <Card.Text>{props.age}</Card.Text>
      <Card.Text>{props.bio}</Card.Text>
      <Card.Text>{props.profession}</Card.Text>
      <Button onClick={props.data} variant="primary"  > Click for more information </Button>
    </Card.Body>
  </Card>
    </div>
  )
}
Profile.propTypes={age:propTypes.number}
Profile.defaultProps={name:"oussama"}
export default Profile