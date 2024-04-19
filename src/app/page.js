'use client'
import Navbar from "@/components/Navbar";
import { app } from "@/firebase";
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const auth = getAuth(app)
  const [loggedIn, setLoggedIn] = useState(false)
  const router = useRouter()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
        router.push('/chatRoom')
      }
      else {
        setLoggedIn(false);
      }
    })
  }, [auth])


  return (
    <>
      <Navbar />
      <main className=" flex flex-col  items-center w-full h-[100vh] pt-[6rem]">
        <p className=" text-5xl font-bold">MIcroLearning UI</p>
        <p className=" mt-4 font-semibold text-2xl">Chat with ML Model.</p>

        <Link href={loggedIn ? '/chatRoom' : '/signIn'}>
          <button className=" bg-blue-500 mt-8 px-6 py-4 rounded-md font-semibold text-lg capitalize hover:bg-blue-600 duration-200 ease-in-out">Start chating</button>
        </Link>
      </main>
    </>
  );
}
