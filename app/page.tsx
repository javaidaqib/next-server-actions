import { UserType } from "@/typings";
import Form from "../components/Form";
import Users from "../components/Users";

export default async function Home() {
  const response = await fetch(
    "https://651ab486340309952f0db99a.mockapi.io/users",
    {
      cache: "no-cache",
      next: {
        tags: ["users"],
      },
    }
  );

  const users: UserType[] = await response.json();

  return (
    <div className="">
      <div className="flex flex-col items-center justify-center space-y-8 mt-10">
        <h1 className="font-bold text-[32px]">User Database</h1>
        {/* Form */}
        <Form />
      </div>

      {/* Users Info */}
      <Users users={users} />
    </div>
  );
}
