import React from "react";
import { users } from "../data/users";
import UserCard from "./UserCard";

function UsersList() {
  return (
    <div>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UsersList;
