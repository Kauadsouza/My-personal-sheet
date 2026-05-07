import { NextRequest, NextResponse } from "next/server";
import { getAllPosts } from "@/lib/mdx";

export async function GET(req: NextRequest) {
  const locale = req.nextUrl.searchParams.get("locale") ?? "pt-BR";
  const posts = getAllPosts(locale);
  return NextResponse.json(posts);
}