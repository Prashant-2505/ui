'use client'
import { app } from "@/firebase";
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoSend } from "react-icons/io5";

const page = () => {

    const auth = getAuth(app)
  const [loggedIn, setLoggedIn] = useState(false)
  const router = useRouter()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            setLoggedIn(true);
          }
          else {
            setLoggedIn(false);
            router.push('/')

          }
        })
      }, [auth])

    return (
        <div className=' h-[100vh] w-full flex flex-col items-center '>

            <p className=' pt-[9rem] font-bold text-5xl md:text-8xl lg:text-7xl'>MicroLearning</p>
            <div className=" w-[90%]  rounded-xl absolute bottom-6 bg-white flex justify-between items-center px-4">
                <input
                    className=' w-full p-4 rounded-3xl outline-none text-black'
                    type="text"
                    placeholder=' start typing.....'
                />
                <IoSend className=' text-black text-3xl cursor-pointer' />
            </div>
        </div>
    )
}

export default page
