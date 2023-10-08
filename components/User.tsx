"use client";

import { TUserSchema } from "../app/types";
import { TrashIcon } from "@heroicons/react/24/solid";

type UserProp = {
  user: TUserSchema;
};

const User = ({ user }: UserProp) => {
  const handleUserDelete = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/user", {
        method: "DELETE",
        body: JSON.stringify({ id: user?.id }),
      });
      const data = await response.json();

      console.log("\nResponse Data is : ", data);
    } catch (error) {
      console.log("\nError is : ", error);
    }
  };

  return (
    <div
      className="px-4 py-8 cursor-pointer mx-2 my-2 hover:bg-gray-100 w-80 rounded-md border
         border-gray-500 bg-white transition flex items-center justify-between"
    >
      <div className="flex flex-col">
        <h1 className="font-bold text-base">{`${user.id}. ${user.name}`}</h1>
        <span className="font-medium text-sm">{user.email}</span>
      </div>

      <div className="hover:cursor-pointer" onClick={() => handleUserDelete()}>
        <TrashIcon className="h-6 w-6 text-sky-500 hover:text-sky-600" />
      </div>
    </div>
  );
};

export default User;
