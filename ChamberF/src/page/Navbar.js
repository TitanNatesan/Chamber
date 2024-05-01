import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logoImage from "../assets/rect.png";
import { useNavigate } from "react-router-dom";
import usericon from "../assets/user.png";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showNav, setShowNav] = useState(false); // State to manage navbar visibility
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const loginPage = () => {
    navigate("/login");
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/");
  };

  const profilePage = () => {
    navigate("/user");
  };

  return (
    <div className="flex gap-5 justify-between items-center self-center px-5 mt-1 w-full font-bold whitespace-nowrap max-w-[1653px] max-md:flex-wrap max-md:max-w-full">
      <img
        loading="lazy"
        src={logoImage}
        className="self-stretch max-w-full aspect-[2.5] w-[150px] md:w-[329px]"
        alt="logo"
      />
      <div className="md:hidden">
        <button onClick={() => setShowNav(!showNav)}>
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
      </div>
      <div
        className={`${
          showNav ? "flex" : "hidden"
        } md:flex md:flex-row gap-8 justify-center items-center self-stretch my-auto text-sm text-black max-md:flex-wrap max-md:max-w-full`}
      >
        <a
          href="/"
          className="nav-button px-9 hover:underline"
          style={{ textDecoration: "none", color: "black" }}
        >
          HOME
        </a>
        <a
          href="/membership"
          className="nav-button px-9 hover:underline"
          style={{ textDecoration: "none", color: "black" }}
        >
          MEMBERSHIPS
        </a>

        <a
          href="/events"
          className="nav-button px-9 hover:underline"
          style={{ textDecoration: "none", color: "black" }}
        >
          EVENTS
        </a>
        <a
          href="/members"
          className="nav-button px-9 hover:underline"
          style={{ textDecoration: "none", color: "black" }}
        >
          MEMBERS
        </a>
      </div>
      {isAuthenticated ? (
        <>
          <button className="-mr-[5%]" onClick={profilePage}>
            <img src={usericon} alt="profile" className="w-20" />
          </button>
          <button
            className="justify-center self-stretch px-3.5 py-3 my-auto text-xs text-white bg-violet-800 rounded-3xl hover:bg-violet-700 transition duration-300"
            onClick={logout}
          >
            LOGOUT
          </button>
        </>
      ) : (
        <button
          className="justify-center self-stretch px-3.5 py-3 my-auto text-xs text-white bg-violet-800 rounded-3xl hover:bg-violet-700 transition duration-300"
          onClick={loginPage}
        >
          JOIN NOW
        </button>
      )}
    </div>
  );
};

export default Navbar;
