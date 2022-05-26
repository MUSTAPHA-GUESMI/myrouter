import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function UserCard({ user }) {
  return (
    <Card className='text-center'>
      <Card.Header>{user.name}</Card.Header>
      <Card.Body>
        <Card.Title>{user.email}</Card.Title>
        <Card.Text>
          {user.address.street} {user.address.city} {user.address.suite}
        </Card.Text>
        <Link to={`/profile/${user.id}`}>
          <Button variant='primary'>Profile</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default UserCard;
