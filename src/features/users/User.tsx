import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Buttons from "../../components/Buttons";
import { RootStateModel } from "../../models/rootStateModel";
import { addUsers, State } from "./userSlice";

const User = () => {
  // const user = useSelector((state: RootStateModel) => state.user);
  // console.log(user);
  // const renderCard = () =>
  //   user.map((users: any) => (
  //     <div key={users.id}>
  //       <div className="bg-gray-500 p-5 flex items-center justify-between rounded-md hover:bg-gray-300 cursor-pointer ">
  //         <div>
  //           <h3 className="font-bold text-lg text-black">{users.name}</h3>
  //           <span className="font-normal text-black">{users.lastname}</span>
  //         </div>
  //       </div>
  //     </div>
  //   ));

  return (
    <>
      <Link to="/add-user">
        <Buttons>Add users</Buttons>
      </Link>
      {/* <div className="grid gap-5 md:grid-cols-2">
        {user.length ? (
          renderCard()
        ) : (
          <p className="text-center col-span-2 text-gray-700 font-semibold">
            No users here
          </p>
        )}
      </div> */}
    </>
  );
};
export default User;
