import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const data: Response = await fetch("https://api.jikan.moe/v4/top/anime", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!data.ok) throw new Error(data.statusText);
    const resData = await data.json();

    return NextResponse.json(resData, { status: 200 });

  } catch (error) {
    return NextResponse.json({ message: (error as Error).message }, { status: 500 });
  }
}