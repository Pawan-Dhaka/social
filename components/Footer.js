import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
   <footer className="py-3 flex flex-col text-center gap-3 text-zinc-500 text-sm border-t border-white/1 bg-slate-900">
     <ul className='flex  text-md items-center justify-around mx-4'>
                            <li> <Link className='hover:text-blue-500'  href={"/"} >Home</Link></li>
                            <li> <Link className='hover:text-blue-500'  href={"/generate"} >Start now</Link></li>
                            <li> <Link className='hover:text-blue-500'  href={"/arisepawan"} >Developer</Link></li>
                            <li> <Link className='hover:text-blue-500'  href={"/help"} >Help and Support</Link></li>
                        </ul>
  <p className='text-center'>&copy;2026 Social • Built with ❤️ By Pawan Dhaka,</p>
</footer>
  )
}

export default Footer
