import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    return new NextResponse("Ok");
  } catch (error) {
    return new NextResponse("Something went wrong");
  }
}

export async function POST(request: Request) {
  try {
    const { name, email, password, username }: InputUser = await request.json();
    if (!name || !email || !username || !password) {
      // const newUser = prisma.user.create({
      //   data: {
      //     name: "Alice",
      //     email: "alice@prisma.io",

      //   },
      // });

      return new NextResponse("Invalid credentials !", { status: 401 });
    }
    // return new NextResponse(JSON.stringify());
  } catch (error) {
    return new NextResponse("Something went wrong");
  }
}
