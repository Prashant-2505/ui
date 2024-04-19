import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='  text-white h-[4rem] w-full flex justify-between items-center px-4'>
            <div className="logo  ">
                <p className=' font-semibold text-2xl'>
                    MicroLearning
                </p>
            </div>
            <div className="nav_items ">
                <ul className='flex justify-between items-center gap-8'>
                    <li>About us</li>
                    <li>Contact</li>
                    <li>
                        <button className=' bg-blue-500 px-4 py-2 rounded-md font-semibold hover:bg-blue-600 duration-200 ease-in-out'><Link href={'/signIn'}>
                            Login</Link></button>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar
