import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { users } from "../data/users";

function Profile({ name }) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { userId } = useParams();
  const user = users.find(user => user.id === Number(userId));
  console.log(user);
  return (
    <>
      {loading ? (
        <Navigate to='/' />
      ) : (
        <>
          <Card className='bg-dark text-white'>
            <Card.Img
              src='https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'
              alt='Card image'
              width='300px'
              height='300px'
            />
            <Card.ImgOverlay>
              <Card.Title>{user.name}</Card.Title>
              <Card.Text>
                {user.address.street} {user.address.city} {user.address.suite}
              </Card.Text>
              <Card.Text>{user.website}</Card.Text>
              <Card.Text>{user.phone}</Card.Text>
            </Card.ImgOverlay>
          </Card>
          <Button variant='secondary' onClick={() => navigate("/users")}>
            go Back
          </Button>
        </>
      )}
    </>
  );
}

export default Profile;
