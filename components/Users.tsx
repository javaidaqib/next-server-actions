import { UserType } from "@/typings";
import User from "./User";

interface UsersProps {
  users: UserType[];
}

const Users = ({ users }: UsersProps) => {
  return (
    <div className="mt-10 p-8  border-t-[1px] border-zinc-400">
      <div className="text-center font-bold text-[24px]">Users List is</div>

      {/* Map all user details */}
      <div className="mt-6 flex flex-wrap items-center justify-center">
        {users.map((user) => (
          <div key={user.id}>
            {/* Individual User information */}
            <User user={user} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
