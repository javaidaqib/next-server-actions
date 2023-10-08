import { TUserSchema, userSchema } from "./types";
import Form from "../components/Form";
import Users from "../components/Users";
import { useCallback } from "react";

export default function Home() {
  const fetchAllUsers = useCallback(async () => {
    "use server";
    const response = await fetch(`${process.env.DB_BASE_URL}/users`, {
      cache: "no-cache",
      next: {
        tags: ["users"],
      },
    });

    const users: TUserSchema[] = await response.json();
    const validatedUsers = userSchema?.safeParse(users[0]);

    if (!validatedUsers.success) {
      console.error(validatedUsers.error);
      return <></>;
    } else {
      return (
        <div className="">
          <div className="flex flex-col items-center justify-center space-y-8 mt-10">
            <h1 className="font-bold text-[32px]">User Info</h1>
            <Form />
          </div>
          {validatedUsers.success ? <Users users={users} /> : null}
        </div>
      );
    }
  }, []);

  return fetchAllUsers();
}
