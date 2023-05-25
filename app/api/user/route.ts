import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    return new NextResponse("Ok");
  } catch (error) {
    return new NextResponse("Something went wrong");
  }
}

type Input = {
  name?: string;
  email?: string;
  username?: string;
};

export async function POST(request: Request) {
  try {
    const input: Input = await request.json();
    if (!input.name || !input.email || !input.username) {
      return new NextResponse("Invalid credentials !");
    }
    return new NextResponse(JSON.stringify(input));
  } catch (error) {
    return new NextResponse("Something went wrong");
  }
}
