import React, { useEffect } from "react";
import UserListItem from "./UserListItem";

const UserList = (props) => {
  const { fetchAllUsers, users, fetchUserDetails, activeId } = props;
  useEffect(() => {
    fetchAllUsers();
  }, []);
  return (
    <div className="w-96 bg-slate-100 rounded-md ">
      <div className="bg-blue-200 w-full py-3 mb-2 rounded-t-md text-center font-semibold text-xl ">USERS LIST</div>
      {users.length === 0 ? <p className="text-center my-3 ">Loading...</p> : ""}
      {users.map((user) => {
        return <UserListItem key={user.id} user={user} fetchUserDetails={fetchUserDetails} activeId={activeId} />;
      })}
    </div>
  );
};

export default UserList;
