"use client";
import { app } from "@/firebase";
<<<<<<< HEAD
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoSend } from "react-icons/io5";
import ScrollableFeed from 'react-scrollable-feed'
=======
import axios from "axios";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoSend } from "react-icons/io5";
import { json } from "react-router-dom";
>>>>>>> 0c3ca694d8cc60f9faedb9d9b6aa58ca83dadf93

const ChatRoom = () => {
  // Changed component name to start with uppercase letter

  const auth = getAuth(app);
  const [loggedIn, setLoggedIn] = useState(false); // Initialized loggedIn state
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
        router.push("/");
      }
    });
  }, [auth]); // Added auth to the dependency array

<<<<<<< HEAD
    const dummyData = [{
        "generated_text": "Exploring the concept of python-pip.com, with the idea of a place where people can share and talk \"things with one another\".\n\n\"We were very open with our community and everyone was there, I think in general. For a time it seemed like that was all there was to say,\" said Alex. \"But I think recently we noticed everyone was using the community and the group was really growing and I think people are becoming more and more active this year,\" said Alex",
        "query_summary": "python2-python3-python4-python",
        "related_links": [
            {
                "topic": "Python",
                "link": "website: https://www.python.org/",
                "reference": "https://en.wikipedia.org/wiki/Python_(programming_language)"
            },
            {
                "topic": "Python",
                "link": "YouTube playlist: https://www.youtube.com/watch?v=nLRL_NcnK-4"
            }
        ]
    }]


    return (
        <div className='h-[100vh] w-full flex flex-col items-center'>

            <ScrollableFeed className=" pt-12 pb-4 px-4">
                {!dummyData && <p className='pt-[9rem] font-bold text-5xl md:text-8xl lg:text-7xl'>MicroLearning</p>}

                {dummyData && dummyData.map((data, index) => (
                    <div key={index}>
                        <p>Topic : {data.query_summary}</p>
                        <p className="font-bold pt-4">Related Links:</p>
                        <ul>
                            {data.related_links.map((link, linkIndex) => {
                                const parts = link.link.split(": ");
                                const originalLink = parts.length > 1 ? parts[1] : link.link;
                                return (
                                    <li className=" border-b-2 mb-2 text-blue-300"
                                        key={linkIndex}>
                                        <Link href={originalLink}>{originalLink}</Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ))}


            </ScrollableFeed>


            <div className="w-[90%] rounded-xl absolute bottom-6 bg-white flex justify-between items-center px-4">
                <input
                    className='w-full p-4 rounded-3xl outline-none text-black'
                    type="text"
                    placeholder='Start typing.....'
                />
                <IoSend className='text-black text-3xl cursor-pointer' />
            </div>

            <button onClick={() => router.push('/')} className=" absolute top-2 left-0 bg-white text-black px-2 py-2 rounded-md hover:opacity-80 duration-200">
                MicroLearning
            </button>
        </div>
    );
=======
  const getData = async () => {
    const queryInput = document.getElementById("queryInput"); // Get the input element
    const query = queryInput.value; // Get the value from the input box

    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/process_query?query=${encodeURIComponent(query)}`
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="h-[100vh] w-full flex flex-col items-center">
      <p className="pt-[9rem] font-bold text-5xl md:text-8xl lg:text-7xl">
        MicroLearning
      </p>
      <div className="w-[90%] rounded-xl absolute bottom-6 bg-white flex justify-between items-center px-4">
        <input
          className="w-full p-4 rounded-3xl outline-none text-black"
          type="text"
          placeholder="Start typing....."
          id="queryInput"
        />
        <IoSend
          onClick={getData}
          className="text-black text-3xl cursor-pointer"
        />
      </div>
    </div>
  );
>>>>>>> 0c3ca694d8cc60f9faedb9d9b6aa58ca83dadf93
};

export default ChatRoom; // Changed export name to Page
