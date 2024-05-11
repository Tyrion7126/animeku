import axios from "axios"
import { NextRequest, NextResponse } from "next/server"
import { SearchParamsType } from "@/utils/types"

export async function GET(req: NextRequest) {
  try {
    const BASE_URL = process.env.BASE_URL
    const url = new URL(req.url)

    interface SearchParams extends SearchParamsType {
      perPage: number | string
    }
    const params: SearchParams = {
      perPage: url.searchParams.get("perPage") || 25,
    }

    Object.assign(params, Object.fromEntries(
      Array.from(url.searchParams).map(([key, value]) => [key, value] as const)
    ))

    const { data } = await axios.get(`${BASE_URL}/meta/anilist/advanced-search`, { params })

    return NextResponse.json(data, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 })
  }
}