import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import signupImage from "../assets/login2.png";
import logoImage from "../assets/rect.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BASE_URL from "./Appconfig";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    username: "",
    password: "",
    general: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const updateProperty = (propertyName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [propertyName]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [propertyName]: "",
      general: "",
    }));
  };

  const handlelogin = () => {
    navigate("/login");
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
      isValid = false;
    }
    if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
      isValid = false;
    }
    if (formData.password.length > 50) {
      newErrors.password = "Password must be at most 50 characters long";
      isValid = false;
    }
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(formData.password)) {
      newErrors.password =
        "Password must contain at least one lowercase letter, one uppercase letter, and one number";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async () => {
    try {
      if (!validateForm()) return;

      setIsLoading(true); // Start loading

      const response = await axios.post(`${BASE_URL}/api/signup/`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.data.message === "User created successfully") {
        navigate("/");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        const errorData = error.response.data;
        if (errorData.email) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            email: errorData.email,
          }));
        }
        if (errorData.message) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            general: errorData.message,
          }));
        }
      } else {
        console.error("An unexpected error occurred:", error);
      }
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div className="flex h-screen bg-blue-600">
      <div className="w-[50%] pt-[13%] pl-[15%] text-white font-extrabold text-[300%]">
        <h1 className="pl-[15%]">Sign Up!</h1>
        <p className="text-xl mt-4 w-[80%] pt-5">
          Join the Indian Chamber of Commerce and Industry.
        </p>
        <a href="/">
          <img
            loading="lazy"
            src={logoImage}
            className="w-[50%] pl-[10%] pt-6"
            alt="home"
          />
        </a>
        <div className="pl-[15%]">
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-full py-2 px-16 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 text-lg font-bold"
            onClick={handlelogin}
          >
            Login
          </button>
        </div>
      </div>

      <div
        className="w-[50%] pt-[05%]"
        style={{
          backgroundImage: `url(${signupImage})`,
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
              SIGN UP
            </h2>
          </div>

          {/* Username Input */}
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
            {errors.username && (
              <div className="text-red-500 text-sm pt-1">{errors.username}</div>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-lg font-bold text-indigo-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-xl bg-indigo-300 text-indigo-600 placeholder-indigo-600"
              placeholder="Enter your email"
              onChange={(e) => updateProperty("email", e.target.value)}
            />
            {errors.email && (
              <div className="text-red-500 text-sm pt-1">{errors.email}</div>
            )}
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
            {errors.password && (
              <div className="text-red-500 text-sm pt-1">{errors.password}</div>
            )}
          </div>

          <div className="pl-[30%] pt-[4%]">
            <button
              type="submit"
              className="bg-blue-500 text-white px-[20%] py-[3%] rounded-3xl hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Sign Up"}{" "}
            </button>
            {errors.general && (
              <div className="text-red-500 text-sm pt-1">{errors.general}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
