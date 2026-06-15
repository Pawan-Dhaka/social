"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
const words = ["monetizers", "Designer", "Creator", "health educators", "streamers", "vloggers", "fitness coaches", "ecommerce sellers", "retailers", "products"];

export default function Home() {


  const [index, setIndex] = useState(0);
  const router = useRouter()



  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const [text, settext] = useState("Social/")

  const creteTree = () => {
    let link;
    if(text.startsWith("Social/")){
      link =  text.split("/")[1]
    } else{
      link = text
    }
    router.push(`/generate?handle=${link}`)
  }
  
  return (
    <>
      <main>
        <section className="bg-[#c8f20a] min-h-screen grid grid-cols-1 min-[600px]:grid-cols-2  m-auto gap-1  ">
          <div className=" flex flex-col justify-center items-center gap-5">
            <h1 className="text-[#254f1a] min-[1100px]:text-7xl text-5xl font-bold min-[900px]:px-24 min-[600px]:px-4 px-12 text-center pt-40 ">A link in bio built for you.</h1>
            <p className="text-[#254f1a] text-[18px] font-bold min-[900px]:px-24 min-[600px]:px-4 px-12 text-center">Join 70M+ people using &lt;Social/&gt; for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
            <div className="flex flex-col min-[1100px]:flex-row gap-4">
              <input value={text || ""} onChange={(e)=> settext(e.target.value)} className="text-gray-600 bg-white p-4 min-[1100px]:text-xl text-lg rounded-sm focus:outline-none focus:ring-0 focus:border-2 focus:border-[#254f1a] " type="text" placeholder="social/" />
              <button onClick={()=>creteTree()}  className="text-white bg-[#254f1a] p-4 text-xl rounded-full min-[1100px]:px-10 px-4 font-semibold hover:scale-101">Get started for free</button>
            </div>
          </div>
          <div className=" flex justify-center items-center my-10"><img className=" w-[80vw] min-[600px]:w-[45vw] min-[1100px]:w-[30vw]  rounded-3xl " src="/pawan.png" alt="" /></div>
        </section>


        <section className="bg-[#0a86f2] min-h-screen grid grid-cols-1 min-[600px]:grid-cols-2  m-auto gap-1  ">
          <div className=" flex justify-center items-center order-last min-[600px]:order-first"><img className="  scale-130  w-[80vw] min-[600px]:w-[45vw] min-[1100px]:w-[30vw] rounded-3xl " src="/Pawan_Dhaka_4K.png" alt="" /></div>
          <div className=" flex flex-col justify-center items-center gap-5">
            <h1 className="text-[#c8f20a] min-[1100px]:text-7xl text-5xl font-bold  min-[900px]:px-24 min-[600px]:px-4 px-12 text-center ">Create and customize your Social.com in minutes.</h1>
            <p className="text-[#c8f20a] text-[18px] font-bold  min-[900px]:px-24 min-[600px]:px-4 px-12 text-center">Connect all your content across social media, websites, stores and more in one link in bio. Customize every detail or let &lt;Social/&gt; automatically enhance it to match your brand and drive more clicks.</p>
            <div className="flex ">
              <Link href={"/generate"} className="text-black bg-[#d1e822] p-4 text-xl rounded-full min-[1100px]:px-10 px-4 font-semibold hover:scale-101">Get started for free</Link>
            </div>
          </div>
        </section>

        <section className="bg-[#800810] min-h-screen grid grid-cols-1 min-[600px]:grid-cols-2  m-auto gap-1  ">
          <div className=" flex flex-col justify-center items-center gap-5">
            <h1 className="text-[#e9c0e9] min-[1100px]:text-7xl text-5xl font-bold  min-[900px]:px-24 min-[600px]:px-4 px-12 text-center ">Share your Social.com anywhere you like!</h1>
            <p className="text-[#e9c0e9] text-[18px] font-bold  min-[900px]:px-24 min-[600px]:px-4 px-12 text-center">Add your unique &lt;Social/&gt; URL to all the platforms and places you find your audience. Then use your QR code to drive your offline traffic back to your link in bio.</p>
            <div className="flex gap-4">

              <Link href={"/generate"} className="text-black bg-[#e9c0e9] p-4 text-xl rounded-full min-[1100px]:px-10 px-4 font-semibold hover:scale-101">Get started for free</Link>
            </div>
          </div>
          <div className=" flex justify-center items-center"><img className=" w-[80vw] min-[600px]:w-[45vw] min-[1100px]:w-[30vw]  rounded-3xl " src="/pic5.png" alt="" /></div>
        </section>


        <section className="bg-[#f0e9cc] min-h-screen grid grid-cols-1 min-[600px]:grid-cols-2  m-auto gap-1  ">
          <div className=" flex justify-center items-center"><img className="w-[80vw] min-[600px]:w-[45vw] min-[1100px]:w-[30vw]  rounded-3xl " src="/pic4.png" alt="" /></div>
          <div className=" flex flex-col justify-center items-center gap-5">
            <h1 className="text-[#1e2330] min-[1100px]:text-7xl text-5xl font-bold  min-[900px]:px-24 min-[600px]:px-4 px-12 text-center ">Analyze your audience and keep them engaged.</h1>
            <p className="text-[#1e2330] text-[18px]  font-bold  min-[900px]:px-24 min-[600px]:px-4 px-12 text-center">Track your engagement over time, monitor revenue and learn what’s converting your audience. Make informed updates on the fly to keep them coming back.</p>
            <div className="flex ">
              <Link href={"/generate"} className="text-[#f0e9cc] bg-[#1e2330] p-4 text-xl rounded-full min-[1100px]:px-10 px-4 font-semibold hover:scale-101">Get started for free</Link>
            </div>
          </div>
        </section>

        <section className="bg-[#f3f3f1] min-h-screen flex  m-auto  pb-4  overflow-auto">
          <div className=" flex flex-col justify-center items-center gap-5 mt-36">
            <h1 className="text-[#1e2330] min-[1100px]:text-7xl text-5xl font-bold  min-[900px]:px-24 min-[600px]:px-4 px-2 text-center ">The only link in bio trusted by 70M+.</h1>
            <h1 className="text-[#0038c5] text-4xl  min-[600px]:text-5xl font-bold  min-[900px]:px-24 min-[600px]:px-4 px-2 text-center ">{words[index]}.</h1>
            <div className=" overflow-hidden w-screen">
            <div className="flex gap-12 animate-marquee h-72  -rotate-1 mt-12">
              <img className="rounded-xl mb-5"  src="/b4.jpeg" alt="" />
              <img className="rounded-xl mb-5"   src="/g1.png" alt="" />
              <img className="rounded-xl mb-5"  src="/b3.jpeg" alt=""/>
              <img  className="rounded-xl mb-5" src="/g2.png" alt="" />
              <img className="rounded-xl mb-5"  src="/b2.jpeg" alt=""/>
              <img className="rounded-xl mb-5"  src="/g3.png" alt="" />
              <img className="rounded-xl mb-5"  src="/b1.jpeg" alt=""/>
              <img className="rounded-xl mb-5"  src="/g1.png" alt="" />
              <img className="rounded-xl mb-5"  src="/b2.jpeg" alt=""/>
              <img className="rounded-xl mb-5"  src="/g2.png" alt="" />
              <img  className="rounded-xl mb-5" src="/b3.jpeg" alt=""/>
              <img  className="rounded-xl mb-5" src="/g3.png" alt=""/>
              <img className="rounded-xl mb-5"  src="/b4.jpeg" alt=""/>
            </div>
            </div>
              <h1 className="text-[#1e2330] text-4xl min-[600px]:text-6xl font-bold mt-10 mx-[25vw]  text-center">The fast, friendly and powerful link in bio tool.</h1>
              <Link href={"/generate"} className="text-[#f0e9cc] bg-[#1e2330] p-4 text-xl rounded-full min-[1100px]:px-10 px-4 font-semibold hover:scale-101 mt-12">Explore more plans</Link>
          </div>
        </section>

      </main>
    </>
  );
}
