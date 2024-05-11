"use client";
import { app } from "@/firebase";
import axios from "axios";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoSend } from "react-icons/io5";
import { json } from "react-router-dom";

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
};

export default ChatRoom; // Changed export name to Page
