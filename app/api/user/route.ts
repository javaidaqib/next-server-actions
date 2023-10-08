import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function DELETE(req: Request, res: Response) {
  const request = await req.json();
  try {
    const response = await fetch(
      `${process.env.DB_BASE_URL}/users/${request.id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    revalidateTag("users");
    return NextResponse.json(
      { message: `User with ID ${request.id} has been deleted successfully.` },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 401 });
  }
}
