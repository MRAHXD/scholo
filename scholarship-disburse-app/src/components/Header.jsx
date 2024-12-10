// components/Header.js

import Link from 'next/link';

export default function Header() {

    return (
      <header className="sticky top-0 z-50 bg-white shadow-md p-2 flex justify-between items-center ">
        <Link href="/">
                <img className="cursor-pointer rounded-full w-15 h-10" src="/logo.jpg" alt="Company logo"/>
        </Link>
        
        
        <nav className="mx-auto lg:mx-32 flex items-center h-10 justify-center">
          <Link href="/" className='text-blue-700 font-semibold mr-10' >Home</Link>
          <Link href="/about" className='text-blue-700 font-semibold mr-10'>About</Link>
          <Link href="/Scholorships" className='text-blue-700 font-semibold mr-10'>Scholorships</Link>
          <Link href="/contact" className='text-blue-700 font-semibold'>Contact</Link>
        </nav>

        <button className="text-white bg-blue-500 rounded-full p-2">Sign Up</button>
      </header>
    )
}
