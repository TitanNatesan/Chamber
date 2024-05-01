import React from "react";
import Navbar from "./Navbar";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../index.css";

const Letter = () => {

  const navigate = useNavigate();


  const handleproceed = () => {
    navigate("/payment");
  };

  
  return (
    <div className=" min-h-screen">
      <div className="w-full pl-7">
        <Navbar />
      </div>
      <div className="flex flex-col">
        <div className="flex justify-center items-center px-16 py-11 w-full font-bold text-black border border-black border-solid bg-zinc-300 bg-opacity-20 max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 justify-between w-full max-w-[1351px] max-md:flex-wrap max-md:max-w-full">
            <div className="flex-auto text-4xl">Membership Application</div>
            <div className="flex gap-5 justify-between my-auto text-sm whitespace-nowrap">
              <a href="/" className="my-auto grow italic">home</a>
              <div className="my-auto py-0 text-xl">&gt;&gt;</div>
              <div className="grow italic my-auto">Membership Application</div>
            </div>
          </div>
        </div>
        </div>
      <div className="max-w-6xl mx-auto mt-8 px-6 md:px-8">
        <div className="bg-gray-100 rounded-lg shadow-2xl p-8">
          <h1 className="text-2xl text-center mb-[10%] font-bold">Application Letter Head</h1>
          <div>
            <label className="font-extrabold">To:</label>
            <div className="pl-[2%] pt-[1%]">The President</div>
            <div className="pl-[2%]">The Indian Chamber of Commerce and Industry</div>
            <div className="pl-[2%]">Coimbatore.</div>
          </div>
          <div className="my-4 font-extrabold">
            <label>Dear Sir,</label>
          </div>
          <div className="my-4 pl-[2%]">
            <label>Sub: Application for Chamber Membership</label>
          </div>
          <div className=" space-y-4 pl-[2%]">
            <label>
              I / We desire to apply for membership of The Indian Chamber of Commerce and Industry, Coimbatore, and hereby submit the application along with required enclosures.
            </label>
            <div className=" space-y-4 ">
              <label>
                I / We also enclose the DD/ Cheque No{" "}
                <input
                  className="border-2 mx-2 rounded-lg"
                  type="number"
                  min={5}
                  max={6}
                  name=""
                  id=""
                />
                Drawn on
                <input
                  className="border-2 mx-2 rounded-lg"
                  type="date"
                  name="date"
                  id="date"
                />{" "}
                for Rs towards
                <input
                  className="border-2 mx-2 rounded-lg"
                  type="number"
                  name=""
                  id=""
                />
              </label>
              <div className="flex flex-col space-y-4">
                <label>
                  ANNUAL SUBSCRIPTION Rs
                  <input
                    className="border-2 mx-2 rounded-lg"
                    type="number"
                    name=""
                    id=""
                  />
                </label>
                <label>
                  LIFE MEMBERSHIP
                  <input
                    className="border-2 mx-2 rounded-lg"
                    type="number"
                    name=""
                    id=""
                  />
                </label>
                <label>
                  CO CHAMBER JOURNAL
                  <input
                    className="border-2 mx-2 rounded-lg"
                    type="number"
                    name=""
                    id=""
                  />
                </label>
                <label>
                  CHAMBER DAY CELEBRATION
                  <input
                    className="border-2 mx-2 rounded-lg"
                    type="number"
                    name=""
                    id=""
                  />
                </label>
                <label>
                  OTHER FEE IF ANY
                  <input
                    className="border-2 mx-2 rounded-lg"
                    type="number"
                    name=""
                    id=""
                  />
                </label>
                <label>
                  TOTAL
                  <input
                    className="border-2 mx-2 rounded-lg"
                    type="number"
                    name=""
                    id=""
                  />
                </label>
              </div>
              <span className="font-bold ">NOTE</span>: To be taken printout on Applicant’s Letter Head
              <br />
              (Applicant Letter Head) <br />
              <div className="flex flex-col space-y-4">
                <label>
                  Proposed by Name:
                  <input type="text" name="" id="" />
                </label>
                <label>
                  Membership No:
                  <input type="text" name="" id="" />
                </label>
                <label>
                  Signature:
                  <input type="text" name="" id="" />
                </label>
                <label>
                  Seconded by Name:
                  <input type="text" name="" id="" />
                </label>
                <label>
                  Membership No:
                  <input type="text" name="" id="" />
                </label>
                <label>
                  Signature:
                  <input type="text" name="" id="" />
                </label>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between my-10 pl-[2%]">
            <div className="flex flex-col space-y-4">
              <p className="font-bold">Yours Sincerely,</p>
              <p className="font-bold mb-4">Authorized Signatory</p>
              <label
                htmlFor="AuthorizedSignatory"
                className="relative cursor-pointer border-2 border-gray-300 p-2 rounded-md hover:bg-gray-100"
              >
                <span className="text-gray-700">Choose a file</span>
                <FontAwesomeIcon icon={faUpload} className="absolute right-2 top-2 text-gray-500" />
                <input
                  id="AuthorizedSignatory"
                  type="file"
                  name="Authorized Signatory"
                  accept="image/*"
                  className="hidden"
                />
              </label>
            </div>
            <div className="flex flex-col space-y-4">
              <h6 className="font-bold mb-4">Photo of Authorized Person</h6>
              <label
                htmlFor="AuthorizedSignatory"
                className="relative cursor-pointer border-2 border-gray-300 p-2 rounded-md hover:bg-gray-100"
              >
                <span className="text-gray-700">Choose a file</span>
                <FontAwesomeIcon icon={faUpload} className="absolute right-2 top-2 text-gray-500" />
                <input
                  id="AuthorizedSignatory"
                  type="file"
                  name="Authorized Signatory"
                  accept="image/*"
                  className="hidden"
                />
              </label>
            </div>
          </div>
          <div className="flex justify-end mt-[8%]">
            <button
              className="bg-blue-500 text-white px-4 py-3 rounded-3xl hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 mx-2"
            >
              Download
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-3 pt rounded-3xl hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 mx-2"
              onClick={handleproceed}
            >
              Submit & Proceed Next
            </button>
          </div>
        </div>
      </div>
      <div className="pb-[6%]"></div>
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2024 Metaverse Association. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Letter;
