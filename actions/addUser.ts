"use server";

import { UserType } from "@/typings";
import { revalidateTag } from "next/cache";

export const addUserToDatabase = async (e: FormData) => {
    const name = e.get("name")?.toString();
    const email = e.get("email")?.toString();

    if (!name || !email) return;

    const userData: UserType = {
      name,
      email,
    };

    try {
      const response = await fetch(
        "https://651ab486340309952f0db99a.mockapi.io/users",
        {
          method: "POST",
          body: JSON.stringify(userData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      revalidateTag("users");
      return response.status;
    } catch (error) {
      console.log("Error is : ", error);
      return false;
    }
  };