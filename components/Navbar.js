"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [showNav, setShowNav] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [search, setSearch] = useState("");

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


    return (
        <nav className={`bg-white top-10 w-[90vw] left-[5vw] fixed rounded-full p-3 z-10 transition-transform duration-1500 ${
    showNav ? "translate-y-0" : "-translate-y-64"}`}>
            <div className="top flex justify-between items-center">
                <div className="left flex items-center text-black  gap-14">
                    <Link href={"/"}><div className="logo text-2xl ml-7"><span className='text-black font-bold'>&lt;Social</span><span className='text-red-700 font-extrabold'>/&gt;</span></div></Link>
                    <div className="options">
                        <ul className='flex gap-8 text-md items-center'>
                            <li> <Link href={"/"} >Home</Link></li>
                            <li> <Link href={"/generate"} >Start now</Link></li>
                            <li> <Link href={"/arisepawan"} >Developer</Link></li>
                            <li> <Link href={"/help"} >Help and Support</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="right flex gap-5">
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search users" className="w-full bg-gray-200 backdrop-blur-xl border  rounded-full px-3  text-lg placeholder:text-black outline-none border-gray-950 transition-all text-black"/>
                    <Link href={`/${search}`} className='bg-gray-900 p-4 rounded-full text-white font-bold hover:scale-101 flex justify-center items-center gap-3 px-8'><span>Search</span><img className='h-5  invert' src="/search.png" alt="search png" /></Link>
                </div>
            </div>

        </nav>
    )
}

export default Navbar



