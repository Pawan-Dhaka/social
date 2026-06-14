import clientPromise from "@/lib/mongodb"



export async function POST(req) {
const body = await req.json()
const client = await clientPromise
const db = client.db("linktree")
const collection = db.collection("links ")

const doc = await collection.findOne({handle:body.handle})
if(doc){
    return Response.json({success: false , error:true ,message: 'Profile or Username already exists ! ',result: null })
}

const result = await collection.insertOne(body)
console.log(body)
  return Response.json({success: true , error:false ,message: 'Your Link-tree has been generated.',result: result })

}