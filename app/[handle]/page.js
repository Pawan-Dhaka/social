import Link from "next/link"
import clientPromise from "@/lib/mongodb"
import { notFound } from "next/navigation"

export default async function Page({ params }) {
  const { handle } = await params

const client = await clientPromise
const db = client.db("linktree")
const collection = db.collection("links ") 

const doc = await collection.findOne({handle})
if(!doc){
    return notFound()
}
  
  
  return <>
  <div className="bg-purple-600 min-h-screen flex justify-center ">
    <div className="bg-[#e2eaf1] w-[50%] mt-40 rounded-3xl mb-7 flex flex-col ">
        <div className="flex flex-col justify-center items-center p-2 ">
            <img className="h-44 w-44 overflow-hidden rounded-full border-2" src={doc.pic} alt="user picture" />
            <h2 className="font-bold text-lg">@{doc.handle}</h2>
            <div className="links w-full ">
                {doc.link.map((item,index)=>{
                     return <Link href={item.link} key={index}>  <div className="w-full border-4 my-5 p-3 rounded-4xl flex justify-center items-center  font-bold  hover:scale-101 hover:bg-gray-300 ">
                       {item.linktext} <img className="h-6" src="/right-up.png" alt="" />
                     </div></Link>  
                })}
            </div>
            </div>

    </div>
  </div>
  </>
}
