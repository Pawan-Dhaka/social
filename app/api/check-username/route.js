import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  const { username } = await request.json();

  const client = await clientPromise;
  const db = client.db("linktree");



  const user = await db.collection("links ").findOne({
    handle: username,
  });

  console.log("Found user:", user);

  return Response.json({
    available: !user,
  });
}