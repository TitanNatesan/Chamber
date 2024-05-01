import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import loginImage from "../assets/login2.png";
import logoImage from "../assets/rect.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useBaseUrl } from "../context";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const {baseUrl}=useBaseUrl();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false); // State for loading animation

  const updateProperty = (propertyName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [propertyName]: value,
    }));
  };

  const handleSignup = () => {
    navigate("/Signup");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!formData.username.trim()) {
        throw new Error("Username is required");
      } else if (!formData.password.trim()) {
        throw new Error("Password is required");
      }

      setLoading(true); // Set loading state to true

      const formDataToSend = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await axios.post(
        `${baseUrl}/obtainAuthToken/`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.data["login"] === "Success") {
        console.log(response.data["login"]);
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        navigate("/");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setError("Check your username and password");
      } else if (error.response && error.response.status === 401) {
        setError("Invalid credentials");
      } else if (error.response && error.response.status === 403) {
        setError("Invalid credentials");
      } else if (error.response && error.response.status === 500) {
        setError("There is a problem with the server. Please try again later.");
      } else {
        setError(error.message);
      }
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-indigo-600">
      <div className="w-[50%] pt-[13%] pl-[15%] text-white font-extrabold text-[300%]">
        <h1 className="pl-[10%]">Welcome Back!</h1>
        <p className="text-xl mt-4 w-[80%]">
          This website is for membership applications for the Indian Chamber of
          Commerce and Industry.
        </p>
        <img
          loading="lazy"
          src={logoImage}
          className="w-[50%] pl-[10%] pt-6"
          alt="home"
        />
        <div className="pl-[15%]">
          <button
            type="button"
            className="bg-blue-500 text-white rounded-full py-2 px-16 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 text-lg font-bold"
            onClick={handleSignup}
          >
            Sign Up
          </button>
        </div>
      </div>

      <div
        className="w-[50%] pt-[10%]"
        style={{
          backgroundImage: `url(${loginImage})`,
          height: "100vh",
          width: "50%",
        }}
      >
        <div className="max-w-md mx-auto">
          <div className="pl-[40%]">
            <FontAwesomeIcon
              icon={faUsers}
              className="text-indigo-600 text-6xl pb-[10%]"
            />
            <h2 className="text-2xl font-bold mb-6 text-indigo-600 pb-[5%]">
              SIGNIN
            </h2>
          </div>

          <form>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-lg font-bold text-indigo-600"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="mt-1 p-2 w-full border rounded-xl bg-indigo-300 text-indigo-600 placeholder-indigo-600"
                placeholder="Enter your username"
                onChange={(e) => updateProperty("username", e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-lg font-bold text-indigo-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 p-2 w-full border rounded-xl bg-indigo-300 text-indigo-600 placeholder-indigo-600"
                placeholder="Enter your password"
                onChange={(e) => updateProperty("password", e.target.value)}
              />
            </div>

            {error && <p className="text-red-500">{error}</p>}

            <div className="pl-[30%] pt-[4%]">
              <button
                type="button" // Change the type to button
                className="bg-blue-500 text-white px-[20%] py-[3%] rounded-3xl hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                disabled={loading}
                onClick={handleSubmit} // Call handleSubmit function on button click
              >
                {loading ? "Loading..." : "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
