import React, { useState, useEffect } from "react";
import userImage from "../assets/user.png";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import axios from "axios";
import BASE_URL from "./Appconfig";

const UserProfile = () => {
  const [userData, setUserData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const accessToken = localStorage.getItem("token");

  useEffect(() => {
    const fetchUserData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${BASE_URL}/api/user/`, {
          headers: {
            Authorization: `Token ${accessToken}`,
          },
        });

        console.log(accessToken);

        if (!response.data) {
          throw new Error("Failed to fetch user data");
        }

        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
        <div className="w-20 h-20 mb-4">
          <svg
            className="animate-spin h-full w-full text-blue-500"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.001 8.001 0 0017.708 15H20c.11 0 .221.034.313.104l3.983 2.655-1.275 1.91-3.983-2.655A7.963 7.963 0 0012 20v4c4.411 0 8-3.589 8-8h-4c0 2.067-.791 3.954-2.082 5.37L10 17.491V22H6v-4.709zM12 4.207c3.137 0 5.679 2.542 5.679 5.679H12V4.207z"
            ></path>
          </svg>
        </div>
        <div className="text-lg font-semibold text-gray-700">Loading...</div>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
        <div className="text-lg font-semibold text-gray-700">
          Please login to see this page.
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="profile-header bg-gradient-to-r from-purple-500 to-indigo-600 py-10 text-white text-center">
        <h1 className="text-4xl font-bold">
          Welcome, {userData && userData[0] && userData[0].username}
        </h1>
        <p className="text-lg">Explore your profile details below.</p>
      </div>
      <div className="container mx-auto mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="m-3 p-3"
          >
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={userImage}
                alt="User"
                className="mx-auto d-block rounded-full mt-3"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
              <div className="text-center p-4">
                <h3 className="text-xl font-semibold mb-2">
                  {userData && userData[0] && userData[0].username}
                </h3>
                <p className="text-gray-600">{userData[0].email}</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="m-3 p-3"
          >
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-4">User Details</h3>
                <ul className="divide-y divide-gray-300">
                  {userData &&
                    userData[0] &&
                    userData[0].form1_data &&
                    Object.entries(userData[0].form1_data).map(
                      ([key, value]) => (
                        <li key={key} className="py-2">
                          <span className="font-semibold">{key}:</span> {value}
                        </li>
                      )
                    )}
                  {userData &&
                    userData[0] &&
                    userData[0].payment_transaction_data &&
                    Object.entries(userData[0].payment_transaction_data).map(
                      ([key, value]) => (
                        <li key={key} className="py-2">
                          <span className="font-semibold">{key}:</span> {value}
                        </li>
                      )
                    )}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
