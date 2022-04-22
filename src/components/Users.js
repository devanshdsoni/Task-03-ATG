import React, { useEffect, useState } from "react";
import UserDetail from "./UserDetail";
import UserList from "./UserList";

const Users = () => {
  const apiUrl = "https://602e7c2c4410730017c50b9d.mockapi.io/users";
  // Fetch all users
  const [users, setUsers] = useState([]);
  const fetchAllUsers = async () => {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    let fetchedUsers = json.map((item) => {
      return {
        id: item.id,
        avatar: item.avatar,
        fullName: `${item.profile.firstName} ${item.profile.lastName} `,
      };
    });
    setUsers(fetchedUsers);
  };

  // Loading state
  const [isLoading, setisLoading] = useState(false);

  // Fetch specific user details
  const [userDetails, setUserDetails] = useState({});
  const fetchUserDetails = async (id) => {
    setisLoading(true);
    const response = await fetch(`${apiUrl}?id=${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setisLoading(false);
    setUserDetails(json[0]);
  };

  return (
    <div className="mt-20 flex justify-evenly">
      <UserList fetchAllUsers={fetchAllUsers} users={users} fetchUserDetails={fetchUserDetails} activeId={userDetails.id} />
      <UserDetail userDetails={userDetails} isLoading={isLoading} />
    </div>
  );
};

export default Users;
