import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const page = searchParams.get("page") || 1;
    const perPage = searchParams.get("perPage") || 25;

    const BASE_URL = process.env.BASE_URL
    const { data } = await axios.get(`${BASE_URL}/meta/anilist/trending`, {
      params: {
        page: page,
        perPage: perPage
      }
    });

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}