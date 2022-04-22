import React from "react";
import icon from "../img/icon.svg";
import arrow from "../img/arrow.svg";

const UserListItem = (props) => {
  const imgError = (e) => {
    e.target.src = icon;
  };
  return (
    <div
      onClick={() => {
        props.fetchUserDetails(props.user.id);
      }}
      className={`group bg-slate-200 flex items-center py-2 px-2.5 mt-3 rounded-sm cursor-pointer hover:bg-slate-300 transition-all ${props.user.id === props.activeId ? "bg-slate-300" : ""}`}
    >
      <img className="w-12 h-12 animate-skeleton rounded-full" onError={imgError} src={props.user.avatar} alt="Avatar" />
      <p className="ml-2 font-medium text-lg ">{props.user.fullName}</p>
      <img
        className={`ml-auto w-6  group-hover:visible group-active:translate-x-2 transition hover:translate-x-1 ${props.user.id === props.activeId ? "visible" : "invisible"}`}
        src={arrow}
        alt="See Details"
      />
    </div>
  );
};

export default UserListItem;
