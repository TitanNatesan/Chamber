import React from "react";
import Navbar from "./Navbar";
import "../index.css";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();

  const handleMembership = () => {
    navigate("/membership");
  };

  return (
    <div>
      <header className="pl-[7%]">
        <Navbar />
      </header>
      <div className="bg-black/60 overflow-x-hidden relative pt-40 pb-20 lg:pt-44 dark:bg-gray-900">
        <div className="relative xl:container m-auto px-6 md:px-12 lg:px-6">
          <div className="w-10 h-10 bg-transparent border-4 border-blue-600 animate-spin1"></div>
          <h1 className="sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-blue-900 text-4xl text-center sm:text-5xl md:text-6xl lg:w-auto lg:text-left xl:text-7xl dark:text-white">
            The Indian Chamber of Commerce and Industry{" "}
            <br className="lg:block hidden" />
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
              Branding coimbatore is our business
            </span>
            .
          </h1>
          <div className="relative mt-8 md:mt-16  sm:w-10/12   sm:mx-auto  lg:text-left  lg:w-7/12">
            <p className="sm:text-lg text-center text-gray-700  dark:text-gray-300 ">
              The Indian Chamber of Commerce and Industry, Coimbatore endeavours
              to be a catalyst and an instrument for making Coimbatore Region
              prosperous and thereby making it a great place to live and work.
            </p>
          </div>
        </div>
      </div>
      <div className=" dark:bg-gray-900">
        <h1 className="text-white font-bold text-center py-[3%]">
          Chamber Services
        </h1>
        <div className="flex justify-around flex-wrap gap-[10%]">
          <div class="max-w-sm my-4 bg-gray-400 hover:shadow-lg transition-all rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                class="rounded-t-lg"
                src="/docs/images/blog/image-1.jpg"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#" className=" no-underline">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Certificate of Origin
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                The chamber is authorised to issue certificate of orgin for
                manufacturers and exporters.
              </p>
              <a
                href="/Servicedetails"
                class="inline-flex no-underline items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div class="max-w-sm my-4 bg-gray-400 hover:shadow-lg transition-all rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#" className="no-underline">
              <img
                class="rounded-t-lg"
                src="/docs/images/blog/image-1.jpg"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#" className="no-underline">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Visa Letter
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Issuing visa recommendation letters for overseas business visits
                to members. The chamber is authorised to issue visa letters for
                all countries.
              </p>
              <a
                href="/Servicedetails"
                class="inline-flex no-underline items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div class="max-w-sm my-4 bg-gray-400 hover:shadow-lg transition-all rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#" className="no-underline">
              <img
                class="rounded-t-lg"
                src="/docs/images/blog/image-1.jpg"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#" className="no-underline">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Consultation/Advisory
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Regarding issues and procedures relating to all aspects of
                business right from setting up to scaling up.
              </p>
              <a
                href="/Servicedetails"
                class="inline-flex no-underline items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div class="max-w-sm my-4 bg-gray-400 hover:shadow-lg transition-all rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                class="rounded-t-lg"
                src="/docs/images/blog/image-1.jpg"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#" className=" no-underline">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Trade Delegation
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Organising trade delegations for members as well as hosting
                delegations from other countries.
              </p>
              <a
                href="/Servicedetails"
                class="inline-flex  no-underline items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div class="max-w-sm  bg-gray-400 hover:shadow-lg transition-all rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                class="rounded-t-lg"
                src="/docs/images/blog/image-1.jpg"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#" className=" no-underline">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Business Listing
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                List your business to grow. Get connections and leads to
                generate more revenue opportunities.
              </p>
              <a
                href="/Servicedetails"
                class="inline-flex  no-underline items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-10 pb-20">
        <h1 className="text-center text-white py-[5%] font-bold">
          Pricing Plans
        </h1>
        <div className="align-middle justify-evenly flex flex-wrap">
          <div class="w-full max-w-sm p-4 bg-stone-200 border border-gray-200 rounded-lg shadow sm:p-8">
            <h5 class="mb-4 text-xl font-medium text-black dark:text-gray-400">
              Standard Plan
            </h5>
            <div class="flex items-baseline text-gray-900 dark:text-black">
              <span class="text-3xl font-semibold">₹7, 375 - ₹12, 685</span>
              <span class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                /ANNUM
              </span>
            </div>
            <ul role="list" class="space-y-3 my-4">
              <li class="flex items-center">
                <svg
                  class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 1a9 9 0 0 0-6.93 14.6L16.6 3.07A9 9 0 0 0 10 1ZM3.07 16.6l11.53-7.53a7 7 0 0 1-7.53 11.53ZM16.6 3.07L3.07 16.6a7 7 0 0 0 9.53-9.53Zm0 0L16.6 3.07a7 7 0 0 0-9.53 9.53Z" />
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                  Access to ICCICBE Events
                </span>
              </li>
              <li class="flex items-center">
                <svg
                  class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 1a9 9 0 0 0-6.93 14.6L16.6 3.07A9 9 0 0 0 10 1ZM3.07 16.6l11.53-7.53a7 7 0 0 1-7.53 11.53ZM16.6 3.07L3.07 16.6a7 7 0 0 0 9.53-9.53Zm0 0L16.6 3.07a7 7 0 0 0-9.53 9.53Z" />
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                  Exclusive Industry Reports
                </span>
              </li>
              <li class="flex items-center">
                <svg
                  class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 1a9 9 0 0 0-6.93 14.6L16.6 3.07A9 9 0 0 0 10 1ZM3.07 16.6l11.53-7.53a7 7 0 0 1-7.53 11.53ZM16.6 3.07L3.07 16.6a7 7 0 0 0 9.53-9.53Zm0 0L16.6 3.07a7 7 0 0 0-9.53 9.53Z" />
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                  Priority Access to Business Workshops
                </span>
              </li>
            </ul>
            <button
              type="button"
              onClick={handleMembership}
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center mt-4"
            >
              Choose Plan
            </button>
          </div>
          <div class="w-full max-w-sm p-4 bg-stone-200 border border-gray-200 rounded-lg shadow sm:p-8">
            <h5 class="mb-4 text-xl font-medium text-black dark:text-gray-400">
              Lifetime Subscription
            </h5>
            <div class="flex items-baseline text-gray-900 dark:text-black">
              <span class="text-3xl font-semibold">₹88,500</span>
            </div>
            <ul role="list" class="space-y-3 my-4">
              <li class="flex items-center">
                <svg
                  class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 1a9 9 0 0 0-6.93 14.6L16.6 3.07A9 9 0 0 0 10 1ZM3.07 16.6l11.53-7.53a7 7 0 0 1-7.53 11.53ZM16.6 3.07L3.07 16.6a7 7 0 0 0 9.53-9.53Zm0 0L16.6 3.07a7 7 0 0 0-9.53 9.53Z" />
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                  Access to ICCICBE Events
                </span>
              </li>
              <li class="flex items-center">
                <svg
                  class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 1a9 9 0 0 0-6.93 14.6L16.6 3.07A9 9 0 0 0 10 1ZM3.07 16.6l11.53-7.53a7 7 0 0 1-7.53 11.53ZM16.6 3.07L3.07 16.6a7 7 0 0 0 9.53-9.53Zm0 0L16.6 3.07a7 7 0 0 0-9.53 9.53Z" />
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                  Exclusive Industry Reports
                </span>
              </li>
              <li class="flex items-center">
                <svg
                  class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 1a9 9 0 0 0-6.93 14.6L16.6 3.07A9 9 0 0 0 10 1ZM3.07 16.6l11.53-7.53a7 7 0 0 1-7.53 11.53ZM16.6 3.07L3.07 16.6a7 7 0 0 0 9.53-9.53Zm0 0L16.6 3.07a7 7 0 0 0-9.53 9.53Z" />
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                  Priority Access to Business Workshops
                </span>
              </li>
            </ul>
            <button
              type="button"
              onClick={handleMembership}
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center mt-4"
            >
              Choose Plan
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HeroSection;
