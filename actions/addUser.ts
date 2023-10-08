"use server";

import { TUserSchema } from "@/app/types";
import { revalidateTag } from "next/cache";

export const addUserToDatabase = async (e: FormData) => {
    const name = e.get("name")?.toString();
    const email = e.get("email")?.toString();

    if (!name || !email) return;

    const userData: TUserSchema = {
      name,
      email,
    };

    try {
      const response = await fetch(
        `${process.env.DB_BASE_URL}/users`,
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