import * as React from "react";
import logoImage from "../assets/rect.png";
import rectImage from "../assets/logo.png";
import overlay from "../assets/overlay.png";

function Home(props) {

  
  return (
    <div className="flex flex-col bg-white">
      <div className="flex gap-5 justify-between items-center self-center px-5 mt-1 w-full font-bold whitespace-nowrap max-w-[1653px] max-md:flex-wrap max-md:max-w-full">
        <img
          loading="lazy"
          src={logoImage}
          className="self-stretch max-w-full aspect-[2.5] w-[329px]"
          alt="logo"
        />
        <div className="flex flex-row gap-8 justify-center items-center self-stretch my-auto text-sm text-black max-md:flex-wrap max-md:max-w-full">
          <a href="/" className="nav-button px-9">
            HOME
          </a>
          <a href="/membership" className="nav-button px-9">
            MEMBERSHIPS
          </a>
          <a href="#journals" className="nav-button px-9">
            JOURNALS
          </a>
          <a href="#members" className="nav-button px-9">
            MEMBERS
          </a>
        </div>
        <div className="justify-center self-stretch px-3.5 py-3 my-auto text-xs text-white bg-violet-800 rounded-3xl">
          JOIN NOW
        </div>
      </div>
      <div className="flex overflow-hidden relative flex-col justify-center mt-1.5 w-full text-sm font-bold text-white min-h-[615px] max-md:max-w-full" id="home">
        <img
          loading="lazy"
          src={rectImage}
          className="object-cover absolute inset-0 size-full"
          alt="home"
        />
        <img
          loading="lazy"
          src={overlay}
          className="object-cover absolute inset-0 size-full"
          alt="overlay"
        />
        <div className="flex relative flex-col justify-center items-start px-16 py-12 w-full max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col mt-24 mb-28 ml-60 max-w-full w-[331px] max-md:my-10 max-md:ml-2.5">
            <div className="text-3xl text-left font-extrabold">BRANDING </div>
            <div className="mt-8 text-6xl font-extrabold">COIMBATORE</div>
            <div className=" mt-8 text-3xl text-right font-extrabold">
              IS OUR BUSINESS
            </div>
            <div className="flex gap-5 justify-between mt-14 text-center max-md:mt-10">
              <div className="w-5 h-5 rounded-full bg-zinc-300 bg-opacity-60 stroke-[1px]" />
              <div className="flex-auto my-auto">995 Active Industries</div>
            </div>
            <div className="flex gap-5 justify-between mt-2.5 text-center">
              <div className="w-5 h-5 rounded-full bg-zinc-300 bg-opacity-60 stroke-[1px]" />
              <div className="flex-auto">903+Job opportunities</div>
            </div>
            <div className="flex gap-5 justify-between mt-2.5 text-center whitespace-nowrap">
              <div className="w-5 h-5 rounded-full bg-zinc-300 bg-opacity-60 stroke-[1px]" />
              <div className="flex-auto">1002+Internships</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="self-center px-5 mt-8 max-w-full w-[1265px] max-md:mt-6 flex gap-5">
          <div className="flex flex-col w-full max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-center self-stretch pt-0.5 pb-12 my-auto w-full text-white border-black border-solid border-[3px] max-md:mt-10">
              <div className="justify-center self-stretch px-7  py-9 text-lg font-extrabold whitespace-nowrap bg-indigo-600 max-md:px-5">
                ANNUAL SUBSCRIPTION
              </div>
              <div className="mt-24 text-5xl text-center text-violet-950 max-md:mt-10 max-md:text-4xl">
                <span className="text-blue-950">₹2,360 - ₹8,260</span>
                <br />
                <br />
                <span className="text-base text-violet-950">/ANNUM</span>
              </div>
              <div className="px-5 pt-4 pb-2.5 mt-16 text-sm font-bold whitespace-nowrap bg-violet-800 rounded-3xl max-md:pr-5 max-md:mt-10">
                JOIN NOW
              </div>
            </div>
          </div>
          <div className="flex flex-col grow items-center pb-12 w-full text-white border-black border-solid border-[3px] max-md:mt-10">
            <div className="justify-center self-stretch px-10 py-10 text-xl font-extrabold bg-indigo-600 max-md:px-5">
              FOR LIFE SUBSCRIPTION
            </div>
            <div className="mt-44 text-6xl text-center text-blue-950 max-md:mt-10 max-md:text-4xl">
              ₹88,500
            </div>
            <div className="justify-center px-7 py-5 mt-48 text-xl font-bold bg-violet-800 rounded-3xl max-md:px-5 max-md:mt-10">
              JOIN NOW
            </div>
          </div>
          <div className="flex flex-col items-center self-stretch pb-12 my-auto w-full text-white border-black border-solid border-[3px] max-md:mt-10">
            <div className="justify-center self-stretch px-7 py-8 text-lg font-extrabold whitespace-nowrap bg-indigo-600 max-md:px-5">
              CO-CHAMBER JOURNAL
            </div>
            <div className="mt-32 text-5xl text-center text-violet-950 max-md:mt-10 max-md:text-4xl">
              <span className="text-blue-950">₹295</span>
              <span className="text-base text-violet-950">/ANNUM</span>
            </div>
            <div className="px-5 pt-4 pb-2.5 mt-36 text-sm font-bold whitespace-nowrap bg-violet-800 rounded-3xl max-md:pr-5 max-md:mt-10">
              JOIN NOW
            </div>
          </div>
        </div>
      </div>
      <div className="mt-28 w-full max-md:mt-10 max-md:max-w-full" />
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
