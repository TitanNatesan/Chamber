import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import Avvvatars from "avvvatars-react";
import rectImage from "../assets/rect.png";

const MembersPage = () => {
  const [members, setMembers] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const accessToken = localStorage.getItem("token");

  useEffect(() => {
    const fetchMembers = async () => {
      if (!accessToken) {
        setErrorMessage("Please login to see the members");
        return;
      }

      try {
        const response = await fetch(
          "http://64.227.134.220:8002/api/members/",
          {
            headers: {
              Authorization: `Token ${accessToken}`,
            },
          }
        );
        const data = await response.json();
        console.log(data);
        if (Array.isArray(data)) {
          setMembers(data);
        } else if (data.message === "Username not found") {
          setErrorMessage("Username not found");
        } else if (data.message === "Wrong password") {
          setErrorMessage("Wrong password");
        }
      } catch (error) {
        console.error("Error fetching members:", error);
        setErrorMessage("Error fetching members");
      }
    };

    fetchMembers();
  }, []);

  return (
    <div className="members-page">
      <div className="w-[100%] pl-[7%]">
        <Navbar />
      </div>
      <div className="flex flex-col">
        <div className="flex justify-center items-center px-16 py-11 w-full font-bold text-black border border-black border-solid bg-zinc-300 bg-opacity-20 max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 justify-between w-full max-w-[1351px] max-md:flex-wrap max-md:max-w-full">
            <div className="flex-auto text-4xl">Membership Application</div>
            <div className="flex gap-5 justify-between my-auto text-sm whitespace-nowrap">
              <a
                href="/"
                className="my-auto grow italic"
                style={{ textDecoration: "none", color: "blue" }}
              >
                home
              </a>
              <div className="my-auto py-0 text-xl">&gt;&gt;</div>
              <div className="grow italic my-auto">Members</div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-4xl font-bold my-[2%] text-center ">
        Registered Members
      </h1>
      {errorMessage && (
        <p className="text-red-500 text-center">{errorMessage}</p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-[80%] pl-[20%]">
        <AnimatePresence>
          {Array.isArray(members) &&
            members.map((member) => {
              console.log(member);
              return (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-Slate-100 rounded-lg overflow-hidden shadow-xl p-6 border hover:shadow-2xl hover:border-teal-500 transition duration-300 ease-in-out"
                >
                  <div className="mb-4 text-center">
                    {member.profilePic ? (
                      <img
                        src={member.profilePic}
                        alt={`${member.username}'s profile`}
                        className="w-20 h-20 rounded-full mx-auto"
                      />
                    ) : (
                      <div className="avatar-container self-center text-center pl-[30%] w-20 h-20">
                        <Avvvatars
                          value={member.gmail}
                          size="100"
                          round={true}
                        />
                      </div>
                    )}
                  </div>
                  <h2 className="text-xl font-semibold text-gray-800 text-center pt-[10%]">
                    {member.username}
                  </h2>
                  <p className="text-gray-500 text-sm text-center">
                    Registration Date: {member.registrationDate}
                  </p>
                </motion.div>
              );
            })}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MembersPage;
