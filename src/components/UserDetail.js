import React from "react";
import icon from "../img/icon.svg";

const UserDetail = ({ userDetails, isLoading }) => {
  //If image fails to load
  const imgError = (e) => {
    e.target.src = icon;
  };

  return (
    <div>
      <div className="w-96 bg-slate-200 rounded-md pb-4 ">
        <div className="w-full py-3 mb-2 rounded-t-md text-center font-semibold text-xl bg-blue-200 ">USERS DETAILS</div>
        {Object.keys(userDetails).length === 0 ? (
          <>
            <p className="text-center mt-4 font-medium">Select any user to get details</p>
            {isLoading ? <p className="text-center mt-3 text-sm">Loading...</p> : ""}
          </>
        ) : (
          <>
            <div className="flex flex-col justify-center items-center my-5 px-14 w-full">
              {isLoading ? (
                <div className="w-20 h-20 rounded-full animate-skeleton"></div>
              ) : (
                <img className="w-40 h-40 animate-skeleton rounded-full" onError={imgError} src={userDetails.avatar} alt="Avatar" />
              )}
              {isLoading ? <p className="animate-skeleton mt-3 h-2.5 mb-3 rounded w-3/5"></p> : <p className="mt-2 text-lg font-semibold">{`@${userDetails.profile.username}`}</p>}
            </div>
            <div className="px-12 ">
              <div className="rounded-md mt-1 bg-gray-300 ">
                {isLoading ? (
                  <div className="p-3">
                    <p className="animate-skeleton h-2.5 mb-3 rounded "></p>
                    <p className="animate-skeleton h-2.5  rounded  w-4/5"></p>
                  </div>
                ) : (
                  <p className="p-2 rounded-md mb-7 font-serif">{userDetails.Bio}</p>
                )}
              </div>
              <div className="mt-3">
                <h5 className="text-base font-sans ">Full Name</h5>
                <div className="rounded-md mt-1 bg-gray-300 ">
                  {isLoading ? (
                    <div className="p-3">
                      <p className="animate-skeleton h-2.5  rounded  w-4/5"></p>
                    </div>
                  ) : (
                    <p className="mt-1 p-2  font-serif w-full">{`${userDetails.profile.firstName} ${userDetails.profile.lastName} `}</p>
                  )}
                </div>
              </div>
              <div className="mt-3">
                <h5 className="text-base font-sans ">Job Title</h5>
                <div className="rounded-md mt-1 bg-gray-300 ">
                  {isLoading ? (
                    <div className="p-3">
                      <p className="animate-skeleton h-2.5  rounded  w-4/5"></p>
                    </div>
                  ) : (
                    <p className="mt-1 p-2 font-serif w-full">{userDetails.jobTitle}</p>
                  )}
                </div>
              </div>
              <div className="mt-3">
                <h5 className="text-base font-sans ">Email</h5>
                <div className="rounded-md mt-1 bg-gray-300 ">
                  {isLoading ? (
                    <div className="p-3">
                      <p className="animate-skeleton h-2.5  rounded  w-4/5"></p>
                    </div>
                  ) : (
                    <p className="mt-1 p-2  font-serif w-full">{userDetails.profile.email}</p>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UserDetail;
