import React from "react";
import { useParams } from "react-router-dom";

function Contact() {
  const { name, id } = useParams();

  return (
    <div>
      <h2>{`Hello from ${name} with id ${id}`}</h2>
    </div>
  );
}

export default Contact;
