import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";
import BASE_URL from "./Appconfig";

const MembershipForm2 = () => {
  const navigate = useNavigate();
  const [iande, setiande] = useState("");
  const [incometaxtpan, setincometaxtpan] = useState("");
  const [FactoryRegistrationCertificate, setFactoryRegistrationCertificate] =
    useState("");
  const [MemorandumArticleofAssociation, setMemorandumArticleofAssociation] =
    useState("");
  const [GSTINRegistrationCopy, setGSTINRegistrationCopy] = useState("");
  const [IECodeCertificate, setIECodeCertificate] = useState("");
  const [ProfessionalCertificate, setProfessionalCertificate] = useState("");
  const [CopyofLandDocument, setCopyofLandDocument] = useState("");
  const [LandHolding, setLandHolding] = useState("");
  const [passportsizephoto, setpassportsizephoto] = useState("");
  const [DirectorsPartners, setDirectorsPartners] = useState("");
  const location = useLocation();

  const handleiande = (e) => {
    const selectedFile = e.target.files[0];
    setiande(selectedFile ? selectedFile.name : "");
    updateProperty("iande", selectedFile);
  };

  const handleincometaxtpan = (e) => {
    const selectedFile = e.target.files[0];
    setincometaxtpan(selectedFile ? selectedFile.name : "");
    updateProperty("incometaxtpan", selectedFile);
  };

  const handleFactoryRegistrationCertificate = (e) => {
    const selectedFile = e.target.files[0];
    setFactoryRegistrationCertificate(selectedFile ? selectedFile.name : "");
    updateProperty("FactoryRegistrationCertificate", selectedFile);
  };

  const handleMemorandumArticleofAssociation = (e) => {
    const selectedFile = e.target.files[0];
    setMemorandumArticleofAssociation(selectedFile ? selectedFile.name : "");
    updateProperty("MemorandumArticleofAssociation", selectedFile);
  };

  const handleGSTINRegistrationCopy = (e) => {
    const selectedFile = e.target.files[0];
    setGSTINRegistrationCopy(selectedFile ? selectedFile.name : "");
    updateProperty("GSTINRegistrationCopy", selectedFile);
  };

  const handleIECodeCertificate = (e) => {
    const selectedFile = e.target.files[0];
    setIECodeCertificate(selectedFile ? selectedFile.name : "");
    updateProperty("IECodeCertificate", selectedFile);
  };

  const handleProfessionalCertificate = (e) => {
    const selectedFile = e.target.files[0];
    setProfessionalCertificate(selectedFile ? selectedFile.name : "");
    updateProperty("ProfessionalCertificate", selectedFile);
  };

  const handleCopyofLandDocument = (e) => {
    const selectedFile = e.target.files[0];
    setCopyofLandDocument(selectedFile ? selectedFile.name : "");
    updateProperty("CopyofLandDocument", selectedFile);
  };

  const handleLandHolding = (e) => {
    const selectedFile = e.target.files[0];
    setLandHolding(selectedFile ? selectedFile.name : "");
    updateProperty("LandHolding", selectedFile);
  };

  const handlepassportsizephoto = (e) => {
    const selectedFile = e.target.files[0];
    setpassportsizephoto(selectedFile ? selectedFile.name : "");
    updateProperty("passportsizephoto", selectedFile);
  };

  const handleDirectorsPartners = (e) => {
    const selectedFile = e.target.files[0];
    setDirectorsPartners(selectedFile ? selectedFile.name : "");
    updateProperty("DirectorsPartners", selectedFile);
  };

  const [formData, setFormData] = useState({
    iande: null,
    incometaxtpan: null,
    FactoryRegistrationCertificate: null,
    MemorandumArticleofAssociation: null,
    GSTINRegistrationCopy: null,
    IECodeCertificate: null,
    ProfessionalCertificate: null,
    CopyofLandDocument: null,
    LandHolding: null,
    passportsizephoto: null,
    DirectorsPartners: null,
  });

  const updateProperty = (propertyName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [propertyName]: value,
    }));
  };

  const accessToken = localStorage.getItem("token");

  console.log(accessToken);

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/api/form2/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Token ${accessToken}`,
        },
      });

      if (response.data["Form2"] === "Success") {
        console.log(response.data["Form2"]);
        navigate("/letter");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
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
                style={{ textDecoration: "none", color: "your-color" }}
              >
                home
              </a>
              <div className="my-auto py-0 text-xl">&gt;&gt;</div>
              <div className="grow italic my-auto">Membership Application</div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="font-bold text-2xl pl-[10%] pt-[2%]">
        Applications Details:{" "}
      </h1>
      <p className="pl-[15%] pt-[1%] text-lg font-semibold text-gray-800">
        You have selected for Lifemembership.
      </p>
      <p className="pl-[15%] pt-[1%] text-lg text-green-700">
        The price of membership is ₹88,500
      </p>

      <div className="flex mt-[1%] w-full overflow-hidden">
        <div className="pl-[10%] flex flex-col w-[50%]">
          <label className="text-base font-bold pl-[10%]">
            Income and Expenditure statement and your Assets and Liabilities
            Statement for the last three financial years
          </label>
          <div className="flex w-[100%] py-[2%]">
            <div className="flex flex-col w-[70%] max-md:w-full pl-[10%]">
              <label
                htmlFor="iande"
                className="relative cursor-pointer border-2 border-gray-300 p-2 rounded-md hover:bg-gray-100"
              >
                <span className="text-gray-700">
                  {iande || "Choose a file"}
                </span>
                <FontAwesomeIcon
                  icon={faUpload}
                  className="absolute right-2 top-2 text-gray-500"
                />
                <input
                  type="file"
                  id="iande"
                  onChange={handleiande}
                  accept="image/*"
                  className="hidden"
                />
              </label>
              <p className="text-sm text-gray-500 mt-2">
                {iande && `File Selected: ${iande}`}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Upload a scanned copy of your Income and Expenditure statement
                and your Assets and Liabilities Statement for the last three
                financial years (JPEG or PNG).
              </p>
            </div>
          </div>
          <label className="text-base font-bold pl-[10%]">Income Tax PAN</label>
          <div className="flex w-[100%] py-[2%]">
            <div className="flex flex-col w-[70%] max-md:w-full pl-[10%]">
              <label
                htmlFor="incometaxtpan"
                className="relative cursor-pointer border-2 border-gray-300 p-2 rounded-md hover:bg-gray-100"
              >
                <span className="text-gray-700">
                  {incometaxtpan || "Choose a file"}
                </span>
                <FontAwesomeIcon
                  icon={faUpload}
                  className="absolute right-2 top-2 text-gray-500"
                />
                <input
                  id="incometaxtpan"
                  type="file"
                  name="incometaxtpan"
                  onChange={handleincometaxtpan}
                  accept="image/*"
                  className="hidden"
                />
              </label>
              <p className="text-sm text-gray-500 mt-2">
                {incometaxtpan && `File Selected: ${incometaxtpan}`}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Upload a scanned copy of your Income Tax PAN (JPEG or PNG).
              </p>
            </div>
          </div>
          <label className="text-base font-bold pl-[10%]">
            Factory Registration Certificate
          </label>
          <div className="flex w-[100%] py-[2%]">
            <div className="flex flex-col w-[70%] max-md:w-full pl-[10%]">
              <label
                htmlFor="incometaxtpan"
                className="relative cursor-pointer border-2 border-gray-300 p-2 rounded-md hover:bg-gray-100"
              >
                <span className="text-gray-700">
                  {FactoryRegistrationCertificate || "Choose a file"}
                </span>
                <FontAwesomeIcon
                  icon={faUpload}
                  className="absolute right-2 top-2 text-gray-500"
                />
                <input
                  id="incometaxtpan"
                  type="file"
                  name="FactoryRegistrationCertificate"
                  onChange={handleFactoryRegistrationCertificate}
                  accept="image/*"
                  className="hidden"
                />
              </label>
              <p className="text-sm text-gray-500 mt-2">
                {FactoryRegistrationCertificate &&
                  `File Selected: ${FactoryRegistrationCertificate}`}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Upload a scanned copy of your Factory Registration Certificate
                (JPEG or PNG).
              </p>
            </div>
          </div>
          <label className="text-base font-bold pl-[10%]">
            Memorandum & Article of Association
          </label>
          <div className="flex w-[100%] py-[2%]">
            <div className="flex flex-col w-[70%] max-md:w-full pl-[10%]">
              <label
                htmlFor="MemorandumArticleofAssociation"
                className="relative cursor-pointer border-2 border-gray-300 p-2 rounded-md hover:bg-gray-100"
              >
                <span className="text-gray-700">
                  {MemorandumArticleofAssociation || "Choose a file"}
                </span>
                <FontAwesomeIcon
                  icon={faUpload}
                  className="absolute right-2 top-2 text-gray-500"
                />
                <input
                  id="MemorandumArticleofAssociation"
                  type="file"
                  name="MemorandumArticleofAssociation"
                  onChange={handleMemorandumArticleofAssociation}
                  accept="image/*"
                  className="hidden"
                />
              </label>
              <p className="text-sm text-gray-500 mt-2">
                {MemorandumArticleofAssociation &&
                  `File Selected: ${MemorandumArticleofAssociation}`}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Upload a scanned copy of your Memorandum & Article of
                Association (JPEG or PNG).
              </p>
            </div>
          </div>
          <label className="text-base font-bold pl-[10%]">
            GSTIN Registration Copy{" "}
          </label>
          <div className="flex w-[100%] py-[2%]">
            <div className="flex flex-col w-[70%] max-md:w-full pl-[10%]">
              <label
                htmlFor="GSTINRegistrationCopy"
                className="relative cursor-pointer border-2 border-gray-300 p-2 rounded-md hover:bg-gray-100"
              >
                <span className="text-gray-700">
                  {GSTINRegistrationCopy || "Choose a file"}
                </span>
                <FontAwesomeIcon
                  icon={faUpload}
                  className="absolute right-2 top-2 text-gray-500"
                />
                <input
                  id="GSTINRegistrationCopy"
                  type="file"
                  name="GSTINRegistrationCopy"
                  onChange={handleGSTINRegistrationCopy}
                  accept="image/*"
                  className="hidden"
                />
              </label>
              <p className="text-sm text-gray-500 mt-2">
                {GSTINRegistrationCopy &&
                  `File Selected: ${GSTINRegistrationCopy}`}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Upload a scanned copy of your GSTIN Registration Copy (JPEG or
                PNG).
              </p>
            </div>
          </div>
          <label className="text-base font-bold pl-[10%]">
            IE Code Certificate
          </label>
          <div className="flex w-[100%] py-[2%]">
            <div className="flex flex-col w-[70%] max-md:w-full pl-[10%]">
              <label
                htmlFor="IECodeCertificate"
                className="relative cursor-pointer border-2 border-gray-300 p-2 rounded-md hover:bg-gray-100"
              >
                <span className="text-gray-700">
                  {IECodeCertificate || "Choose a file"}
                </span>
                <FontAwesomeIcon
                  icon={faUpload}
                  className="absolute right-2 top-2 text-gray-500"
                />
                <input
                  id="IECodeCertificate"
                  type="file"
                  name="IECodeCertificate"
                  onChange={handleIECodeCertificate}
                  accept="image/*"
                  className="hidden"
                />
              </label>
              <p className="text-sm text-gray-500 mt-2">
                {IECodeCertificate && `File Selected: ${IECodeCertificate}`}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Upload a scanned copy of your IE Code Certificate (JPEG or PNG).
              </p>
            </div>
          </div>
          <label className="text-base font-bold pl-[10%]">
            Professional Certificate
          </label>
          <div className="flex w-[100%] py-[2%]">
            <div className="flex flex-col w-[70%] max-md:w-full pl-[10%]">
              <label
                htmlFor="ProfessionalCertificate"
                className="relative cursor-pointer border-2 border-gray-300 p-2 rounded-md hover:bg-gray-100"
              >
                <span className="text-gray-700">
                  {ProfessionalCertificate || "Choose a file"}
                </span>
                <FontAwesomeIcon
                  icon={faUpload}
                  className="absolute right-2 top-2 text-gray-500"
                />
                <input
                  id="ProfessionalCertificate"
                  type="file"
                  name="ProfessionalCertificate"
                  onChange={handleProfessionalCertificate}
                  accept="image/*"
                  className="hidden"
                />
              </label>
              <p className="text-sm text-gray-500 mt-2">
                {ProfessionalCertificate &&
                  `File Selected: ${ProfessionalCertificate}`}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Upload a scanned copy of your Professional Certificate (JPEG or
                PNG).
              </p>
            </div>
          </div>
          <label className="text-base font-bold pl-[10%]">
            Copy of Land Document
          </label>
          <div className="flex w-[100%] py-[2%]">
            <div className="flex flex-col w-[70%] max-md:w-full pl-[10%]">
              <label
                htmlFor="CopyofLandDocument"
                className="relative cursor-pointer border-2 border-gray-300 p-2 rounded-md hover:bg-gray-100"
              >
                <span className="text-gray-700">
                  {CopyofLandDocument || "Choose a file"}
                </span>
                <FontAwesomeIcon
                  icon={faUpload}
                  className="absolute right-2 top-2 text-gray-500"
                />
                <input
                  id="CopyofLandDocument"
                  type="file"
                  name="CopyofLandDocument"
                  onChange={handleCopyofLandDocument}
                  accept="image/*"
                  className="hidden"
                />
              </label>
              <p className="text-sm text-gray-500 mt-2">
                {CopyofLandDocument && `File Selected: ${CopyofLandDocument}`}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Upload a scanned copy of your Copy of Land Document (JPEG or
                PNG).
              </p>
            </div>
          </div>
          <label className="text-base font-bold pl-[10%]">
            Land Holding (Patta)
          </label>
          <div className="flex w-[100%] py-[2%]">
            <div className="flex flex-col w-[70%] max-md:w-full pl-[10%]">
              <label
                htmlFor="LandHolding"
                className="relative cursor-pointer border-2 border-gray-300 p-2 rounded-md hover:bg-gray-100"
              >
                <span className="text-gray-700">
                  {LandHolding || "Choose a file"}
                </span>
                <FontAwesomeIcon
                  icon={faUpload}
                  className="absolute right-2 top-2 text-gray-500"
                />
                <input
                  id="LandHolding"
                  type="file"
                  onChange={handleLandHolding}
                  name="LandHolding"
                  accept="image/*"
                  className="hidden"
                />
              </label>
              <p className="text-sm text-gray-500 mt-2">
                {LandHolding && `File Selected: ${LandHolding}`}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Upload a scanned copy of your Land Holding (Patta) (JPEG or
                PNG).
              </p>
            </div>
          </div>
          <label className="text-base font-bold pl-[10%]">
            passport size colour photographs of the Authorised Representative
          </label>
          <div className="flex w-[100%] py-[2%]">
            <div className="flex flex-col w-[70%] max-md:w-full pl-[10%]">
              <label
                htmlFor="passportsizephoto"
                className="relative cursor-pointer border-2 border-gray-300 p-2 rounded-md hover:bg-gray-100"
              >
                <span className="text-gray-700">
                  {passportsizephoto || "Choose a file"}
                </span>
                <FontAwesomeIcon
                  icon={faUpload}
                  className="absolute right-2 top-2 text-gray-500"
                />
                <input
                  id="passportsizephoto"
                  type="file"
                  onChange={handlepassportsizephoto}
                  name="passportsizephoto"
                  accept="image/*"
                  className="hidden"
                />
              </label>
              <p className="text-sm text-gray-500 mt-2">
                {passportsizephoto && `File Selected: ${passportsizephoto}`}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Upload a scanned copy of your passport size colour photographs
                of the Authorised Representative (JPEG or PNG).
              </p>
            </div>
          </div>
          <label className="text-base font-bold pl-[10%]">
            List of Directors / Partners etc
          </label>

          <div className="flex w-[100%] py-[2%]">
            <div className="flex flex-col w-[70%] max-md:w-full pl-[10%]">
              <label
                htmlFor="DirectorsPartners"
                className="relative cursor-pointer border-2 border-gray-300 p-2 rounded-md hover:bg-gray-100"
              >
                <span className="text-gray-700">
                  {DirectorsPartners || "Choose a file"}
                </span>
                <FontAwesomeIcon
                  icon={faUpload}
                  className="absolute right-2 top-2 text-gray-500"
                />
                <input
                  id="DirectorsPartners"
                  type="file"
                  onChange={handleDirectorsPartners}
                  name="DirectorsPartners"
                  accept="image/*"
                  className="hidden"
                />
              </label>
              <p className="text-sm text-gray-500 mt-2">
                {DirectorsPartners && `File Selected: ${DirectorsPartners}`}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Upload a scanned copy of your List of Directors / Partners etc
                (JPEG or PNG).
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-[30%] pl-[10%]">
          <div className="flex flex-col w-full bg-F4E3E3 border border-solid border-black p-4 rounded-xl">
            <div className="text-4xl mb-4">Membership Opportunities</div>
            <p className="text-justify mb-4">
              The Membership of the chamber is open to all those who are engaged
              in any business activity in the State of Tamil Nadu, including
              trade, industry, services, and agriculture and related activities.
              Professionals, Sole Proprietorship, LLPs, Partnerships,
              Associations, and Companies are eligible to be admitted as members
              under any one of the following categories.
            </p>
            <div className="text-xl mb-4">Membership Types</div>
            <ul className="list-disc list-inside">
              <li>For Life Membership</li>
              <li>Annual Membership</li>
            </ul>
            <div className="text-xl mt-4">Member Benefits</div>
            <ul className="list-disc list-inside">
              <li>Latest notifications of State & Central Governments.</li>
              <li>
                Trade delegations and foreign delegations related information.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="ml-[10%] mt-[8%]">
        <button
          className="bg-blue-500 text-white px-4 py-3 rounded-3xl hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          onClick={handleSubmit}
        >
          Submit & Proceed Next
        </button>
        <div className="pb-[10%]"></div>
      </div>

      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2024 Metaverse Association. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MembershipForm2;
