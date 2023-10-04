"use client";

import { UserType } from "@/typings";
import { TrashIcon } from "@heroicons/react/24/solid";

interface UserProp {
  user: UserType;
}

const User = ({ user }: UserProp) => {
  return (
    <div
      className="px-4 py-8 cursor-pointer mx-2 my-2 hover:bg-gray-100 w-80 rounded-md border
         border-gray-500 bg-white transition flex items-center justify-between"
    >
      <div className="flex flex-col">
        <h1 className="font-bold text-base">{`${user.id}. ${user.name}`}</h1>
        <span className="font-medium text-sm">{user.email}</span>
      </div>

      <div className="hover:cursor-pointer">
        <TrashIcon className="h-6 w-6 text-sky-500 hover:text-sky-600" />
      </div>
    </div>
  );
};

export default User;
