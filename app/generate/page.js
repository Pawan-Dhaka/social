"use client"
import React from 'react'
import { Suspense } from "react";
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

const GeneratePageContent = () => {
const searchParams = useSearchParams()

const [Links, setLinks] = useState([{ link: "", linktext: "" }])
    const [handle, sethandle] = useState(searchParams.get('handle'))
    const [picture, setpicture] = useState("")
    const [claimed, setClaimed] = useState(false);
    const route = useRouter()
 
    const submitLinks = async (Links, handle, pic) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "link": Links,
            "handle": handle,
            "pic": pic
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        const r = await fetch("/api/add", requestOptions);
        const result = await r.json();
        if(result.success){
            toast.success(result.message);
            setLinks([{ link: "", linktext: "" }])
            sethandle("")
            setpicture("")
            notify()
            setTimeout(() => {
                route.push(`/${handle}`)
            }, 1500);
        } else{
            toast.error(result.message);
            
        }



    }

    const checkUsername = async () => {
        if (!handle.trim()) {
            toast.error("Enter a username");
            return;
        }
        try {
            const response = await fetch("/api/check-username", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: handle,
                }),
            });



            const result = await response.json();
            if (result.available) {
                setClaimed(true);
                toast.success("Username is available", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            } else {
                toast.error("Username already taken", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            }
        } catch (error) {
            toast.error("Something went wrong", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    };

    useEffect(() => {
        setClaimed(false)
    }, [handle])

    const handleChange = (index, field, value) => {
        setLinks((prev) =>
            prev.map((item, i) =>
                i === index ? { ...item, [field]: value } : item
            )
        );
    };


    const addlink = () => {
        setLinks(Links.concat([{ link: "", linktext: "" }]))
    }


    const notify = () => toast.success('Profile saved succesfully!', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",



    });

    return (

        <div className='bg-[#cf8e1c] min-h-screen grid  grid-cols-1 min-[900px]:grid-cols-2  min-[700px]:-mt-24 min-[900px]:pt-18' >

            <div className="col1 flex flex-col justify-center items-center gap-8 mb-4 ">
                <h2 className=' text-3xl xl:text-4xl font-extrabold text-center'>Create your tree of links</h2>
                <div className="flex flex-col gap-2">
                    <h3 className='font-semibold '>Step 1: Claim your username.</h3>
                    <input value={handle  || ""} onChange={e => { sethandle(e.target.value) }} className='bg-[#FFFFFF] text-[#111827] border border-[#E5E7EB] p-3 rounded-lg w-[70vw] min-[900px]:w-[30vw] focus:outline-[#cf8e1c]' placeholder='Enter preffered username(like: pawan123)' type="text" />
                    <button className='bg-[#b207ac] text-white border border-[#000000] p-3 rounded-lg w-[70vw] min-[900px]:w-[30vw] hover:scale-101 font-bold disabled:text-slate-950 disabled:bg-[#7c941b] disabled:hover:scale-100 ' disabled={claimed} onClick={checkUsername}>{claimed ? `${handle} is availbe ✅` : "claim "}</button>
                </div>
                <div className="flex flex-col gap-2 ">
                    <h3 className='font-semibold '>Step 2: Add links.</h3>
                    {Links && Links.map((item, index) => {
                        return <div key={index} className="flex flex-col gap-4">
                            <p className='-mb-3 mt-2 font-semibold'>Link-{index+1}</p>
                            <input value={item.linktext  || "" }
                                onChange={(e) =>
                                    handleChange(index, "linktext", e.target.value)
                                } className='bg-[#FFFFFF] text-[#111827] border border-[#E5E7EB] p-3 rounded-lg w-[70vw] min-[900px]:w-[30vw] focus:outline-[#cf8e1c]' placeholder='Enter link text (like: instagram)' type="text" />
                            <input value={item.link  || ""}
                                onChange={(e) =>
                                    handleChange(index, "link", e.target.value)
                                } className='bg-[#FFFFFF] text-[#111827] border border-[#E5E7EB] p-3 rounded-lg w-[70vw] min-[900px]:w-[30vw] focus:outline-[#cf8e1c]' placeholder='Enter link (like: https://www.instagram.com/arisepawan)' type="text" />
                        </div>
                    })}
                    <div className="flex w-full justify-between">
                        <button onClick={() => addlink()} className='bg-[#b207ac] text-white border border-[#000000] p-3 rounded-lg w-[70vw] min-[900px]:w-[30vw] hover:scale-101 font-bold disabled:bg-[#111827] disabled:hover:scale-100 '
                        disabled={!claimed || Links[0].link.length<3 || Links[0].linktext.length<2 } 
                        > + Add More</button>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className='font-semibold w-[70vw] min-[900px]:w-[30vw] '>Step 3: Set your profile picture and Complete Profile.</h3>
                    <input value={picture  || ""} onChange={e => { setpicture(e.target.value) }} className='bg-[#FFFFFF] text-[#111827] border border-[#E5E7EB] p-3 rounded-lg w-[70vw] min-[900px]:w-[30vw] focus:outline-[#cf8e1c]' placeholder='Enter profile picture link(like: https://google.com[File-ID]/view)' type="text" />
                    <button onClick={() => { submitLinks(Links, handle, picture) }} className='bg-[#8ddf11] text-[#111827] border border-[#000000] p-3 rounded-lg w-[70vw] min-[900px]:w-[30vw] hover:scale-101 font-bold disabled:bg-[#111827] disabled:hover:scale-100 disabled:text-white ' disabled={!claimed || picture.length<3} >Complete Profile</button>
                </div>

            </div>
            <div className="col2 flex order-first   m-auto -mb-28  "><img className=' w-[70vw] min-[900px]:w-[40vw]' src="/pic6.png" alt="" /></div>
            <ToastContainer />
        </div>

    )

}


const page = () => {
    

    
    return (
      <Suspense fallback={<div>Loading...</div>}>
            <GeneratePageContent />
        </Suspense>

    )
}

export default page
