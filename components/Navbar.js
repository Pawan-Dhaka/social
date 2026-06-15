"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [showNav, setShowNav] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [search, setSearch] = useState("");
    const [showHam, setshowHam] = useState(true)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setShowNav(false);
            } else {
                setShowNav(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const closeMenu = () => setshowHam(true);


    return (
        <>
        <nav className={`bg-white top-10 w-[90vw] left-[5vw] fixed rounded-full py-3 min-[700px]:p-3 z-20 transition-transform duration-1500 ${showNav ? "translate-y-0" : "-translate-y-64"}`}>
            <div className="top flex justify-between items-center">
                <div className="left flex items-center text-black  gap-14">
                    <Link href={"/"}><div className="logo text-2xl ml-7"><span className='text-black font-bold'>&lt;Social</span><span className='text-red-700 font-extrabold'>/&gt;</span></div></Link>
                    <div className="options hidden xl:flex">
                        <ul className='flex gap-8 text-md items-center'>
                            <li> <Link  href={"/"} >Home</Link></li>
                            <li> <Link  href={"/generate"} >Start now</Link></li>
                            <li> <Link  href={"/arisepawan"} >Developer</Link></li>
                            <li> <Link  href={"/help"} >Help and Support</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="right flex gap-1 min-[700px]:gap-5">
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search users" className="w-full bg-gray-200  border  rounded-full px-1 min-[900px]:px-3  text-lg placeholder:text-black outline-none border-gray-950 transition-all text-black" />
                    <Link href={`/${search}`} className='bg-gray-900 px-2 min-[900px]:p-4 rounded-full text-white font-bold hover:scale-101 flex justify-center items-center gap-3  min-[600px]:px-8'><span className='hidden min-[600px]:flex'>Search</span><img className=' w-12 min-[600px]:w-6 invert ' src="/search.png" alt="search png" /></Link>

                    <div className="hideded hamburger xl:hidden  mr-3 min-[700px]:mr-10 flex items-center  ">
                        <img className='w-18 ' src={showHam ? "/more.png" : "/close.png"} alt="" onClick={()=>{setshowHam(!showHam)}} />

                       


                    </div>
                </div>
            </div>

        </nav> 
         {!showHam &&  <div className="options  fixed z-10 xl:hidden ">
            <div className=" flex flex-col w-screen  h-[150vh]  bg-amber-50 pt-40">
                        <ul className='flex flex-col gap-8 text-md items-center mx-20'>
                            <li className='bg-slate-950 w-full text-center p-3 rounded-4xl text-white font-bold text-2xl '> <Link onClick={closeMenu} href={"/"} >Home</Link></li>
                            <li className='bg-slate-950 w-full text-center p-3 rounded-4xl text-white font-bold text-2xl '> <Link onClick={closeMenu} href={"/generate"} >Start now</Link></li>
                            <li className='bg-slate-950 w-full text-center p-3 rounded-4xl text-white font-bold text-2xl '> <Link onClick={closeMenu} href={"/arisepawan"} >Developer</Link></li>
                            <li className='bg-slate-950 w-full text-center p-3 rounded-4xl text-white font-bold text-2xl '> <Link onClick={closeMenu} href={"/help"} >Help and Support</Link></li>
                        </ul>
            </div>
                    </div> }
        </>
    )
}

export default Navbar



