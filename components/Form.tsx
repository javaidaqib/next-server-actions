"use client";

import { useRef } from "react";

import { addUserToDatabase } from "@/actions/addUser";
import AddUserButton from "./AddUserButton";

const Form = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const actionHandler = async (e: FormData) => {
    const status = await addUserToDatabase(e);
    if (status) {
      formRef.current?.reset();
    } else {
      console.log("Something went wrong!");
    }
  };

  return (
    <div>
      <form
        action={actionHandler}
        className="flex w-[20rem] flex-col space-y-6"
        ref={formRef}
      >
        <input
          className="border border-gray-400 px-4 py-3 font-normal text-base rounded-md"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="border border-gray-400 px-4 py-3 font-normal text-base rounded-md "
          type="text"
          placeholder="Email"
          name="email"
        />
        <AddUserButton label="ADD USER" />
      </form>
    </div>
  );
};

export default Form;
