import * as React from "react";
import know from "../assets/knowmore.png";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import BASE_URL from "./Appconfig";

function Form(props) {
  const [selectedConstitution, setSelectedConstitution] = useState([]);
  const [datea, setData] = useState([]);
  const [inputValues, setInputValues] = useState({
    name: "",
    designation: "",
    pan: "",
  });
  const [coi, setCOI] = useState([]);
  const [moaoa, setMOAOA] = useState([]);
  const [ap, setAP] = useState([]);
  const navigate = useNavigate();

  const [esign, setEsign] = useState(null);
  const [seal, setSeal] = useState(null);

  const handleEsign = (e) => {
    const selectedFile = e.target.files[0];
    setEsign(selectedFile);
    updateProperty("e_sign", selectedFile);
  };
  const handleSeal = (e) => {
    const selectedFile = e.target.files[0];
    setSeal(selectedFile);
    updateProperty("seal_image", selectedFile);
  };

  const [formData, setFormData] = useState({
    directors: [],
    Nameofapplicant: "",
    constitution: null,
    individual_name: "",
    is_individual: false,
    Businessactivity: "",
    regoffadd: "",
    acoffice: "",
    acwork: "",
    cdlan: "",
    cdphone: "",
    cdemail: "",
    cdweb: "",
    aadhar: null,
    pancardno: null,
    GSTNo: null,
    CompanyFirmRegNo: null,
    SocietyAssociationRegNo: null,
    paname: "",
    papan: "",
    paphone: "",
    padesignation: "",
    paaadhaar: "",
    pamail_id: "",
    indmain_category: "",
    indsub_category: "",
    cmdomestic: "",
    cmboth: "",
    cmpercentage_of_imports: "",
    cmglobal_market: "",
    cmpercentage_of_exports: "",
    country_name_foreign_collaboration: "",
    collaborator_name_foreign_collaboration: "",
    annual_turnover_year1: null,
    annual_turnover_year2: null,
    annual_turnover_year3: null,
    classindustry: null,
    direct_office_employees: null,
    indirect_contractual_employees: null,
    works_employees: null,
    outsourced_employees: null,
    esic: "",
    epf: "",
    branches_outside_india: "",
    is_member_of_association: null,
    association_name: "",
    is_office_bearer: null,
    association_position: "",
    reason_for_joining_chamber: "",
    e_sign: null,
    seal_image: null,
  });
  const [societyRegNoError, setSocietyRegNoError] = useState("");
  const [panCardNoError, setPanCardNoError] = useState("");
  const [companyRegNoError, setCompanyRegNoError] = useState("");
  const [aadharError, setAadharError] = useState("");
  const [GSTNoError, setGSTNoError] = useState("");
  const [societyRegNo, setSocietyRegNo] = useState("");
  const [panCardNo, setPanCardNo] = useState("");
  const [companyRegNo, setCompanyRegNo] = useState("");
  const updateProperty = (propertyName, value) => {
    if (propertyName === "SocietyAssociationRegNo") {
      if (value.length < 5) {
        setSocietyRegNoError("Invalid Society/Association Registration No");
      } else {
        setSocietyRegNoError("");
      }
      setSocietyRegNo(value);
    }

    if (propertyName === "pancardno") {
      if (value.length !== 10) {
        setPanCardNoError("Invalid PAN Card No");
      } else {
        setPanCardNoError("");
      }
      setPanCardNo(value);
    }

    if (propertyName === "CompanyFirmRegNo") {
      if (value.length < 5) {
        setCompanyRegNoError("Invalid Company/Firm Registration No");
      } else {
        setCompanyRegNoError("");
      }
      setCompanyRegNo(value);
    }
    setFormData((prevData) => ({
      ...prevData,
      [propertyName]: value,
    }));
  };

  const handleCheckboxChange = (value) => {
    if (selectedConstitution === value) {
      setSelectedConstitution(null);
      updateProperty("constitution", null);
    } else {
      setSelectedConstitution(value);
      updateProperty("constitution", value);
    }
  };

  const handleMOAOA = (value) => {
    if (moaoa.includes(value)) {
      setMOAOA([]);
      updateProperty("is_member_of_association", null);
    } else {
      setMOAOA([value]);
      updateProperty("is_member_of_association", value);
    }
  };

  const handleAP = (value) => {
    if (ap.includes(value)) {
      setAP([]);
      updateProperty("is_office_bearer", null);
    } else {
      setAP([value]);
      updateProperty("is_office_bearer", value);
    }
  };

  const handleCBC = (value) => {
    if (coi.includes(value)) {
      setCOI([]);
      updateProperty("classindustry", null);
    } else {
      setCOI([value]);
      updateProperty("classindustry", value);
    }
  };

  const handleInputChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const [allDirectors, setAllDirectors] = useState([]);

  const handleAdd = () => {
    const newDirector = { ...inputValues };
    console.log(allDirectors);
    updateProperty("directors", [...formData.directors, newDirector]);
    setData([...datea, inputValues]);
    setInputValues({ name: "", designation: "", pan: "" });
    setAllDirectors((prevDirectors) => [...prevDirectors, newDirector]);
  };

  const constitutionOptions = [
    "Individual",
    "Proprietory Firm",
    "Partnership Firm",
    "LLP",
    "Private Limited",
    "Public Limited Unlisted",
    "Public Limited Listed",
    "Trust",
    "Society",
    "Associations",
  ];

  const classindustry = ["Large", "Medium", "Small", "Micro"];

  const yesno = ["Yes", "No"];

  const handleSubmit = async () => {
    try {
      const formDataToSend = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      formDataToSend.append("e_sign", formData.e_sign);

      const accessToken = localStorage.getItem("token");

      if (!accessToken) {
        throw new Error("Access token is missing");
      }

      console.log(accessToken);
      console.log(formData);

      const response = await axios.post(`${BASE_URL}/api/form1/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `token ${accessToken}`,
        },
      });

      if (response.data["detail"] === "Success") {
        console.log(response.data["detail"]);
        console.log(formData);
        navigate("/membership2/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col bg-white">
      <Navbar />

      <div className="flex flex-col">
        <div className="flex justify-center items-center px-16 py-11 w-full font-bold text-black border border-black border-solid bg-zinc-300 bg-opacity-20 max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 justify-between w-full max-w-[1351px] max-md:flex-wrap max-md:max-w-full">
            <div className="flex-auto text-4xl ">Membership Application</div>
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
        <h1 className="font-bold text-2xl pl-[10%] pt-[2%]">
          Applications Details:{" "}
        </h1>
        <p className="pl-[15%] pt-[1%] text-lg font-semibold text-gray-800">
          You have selected for Lifemembership.
        </p>
        <p className="pl-[15%] pt-[1%] text-lg text-green-700">
          The price of membership is ₹88,500
        </p>
      </div>

      <div className="flex w-[100%] mt-[6%]">
        <div className="w-2"></div>
        <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full pl-[10%]">
          <div className="flex items-center mb-4">
            <label className="text-base font-bold">
              1. Name of the Applicant
            </label>
            <img loading="lazy" src={know} alt="logo" className="ml-2" />
          </div>
          <input
            type="text"
            placeholder="Enter the name of the applicant"
            className="border border-solid border-stone-500 px-2 py-7 rounded-xl mb-6"
            value={formData.Nameofapplicant}
            onChange={(e) => updateProperty("Nameofapplicant", e.target.value)}
          />

          <div className="flex items-center mb-4">
            <label className="text-base font-bold">3. Business Activity</label>
            <img loading="lazy" src={know} alt="logo" className="ml-2" />
          </div>
          <input
            type="text"
            placeholder="Enter Business Activity"
            className="border border-solid border-stone-500 px-2 py-7 rounded-xl mb-6"
            onChange={(e) => updateProperty("Businessactivity", e.target.value)}
          />

          <div className="flex items-center mb-4">
            <label className="text-base font-bold">
              4. Registered Office Address
            </label>
            <img loading="lazy" src={know} alt="logo" className="ml-2" />
          </div>
          <input
            type="text"
            placeholder="Enter Registered Office Address"
            className="border border-solid border-stone-500 px-2 py-7 rounded-xl mb-6"
            onChange={(e) => updateProperty("regoffadd", e.target.value)}
          />
        </div>

        <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full pl-[10%]">
          <div className="text-base font-bold mb-4">2. Constitution</div>
          <div className="flex flex-col">
            {constitutionOptions.map((option) => (
              <div key={option} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={option}
                  checked={
                    selectedConstitution &&
                    selectedConstitution.includes(option)
                  }
                  onChange={() => handleCheckboxChange(option)}
                  className="mr-2"
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
          </div>
          {selectedConstitution &&
            selectedConstitution.includes("Individual") && (
              <input
                type="text"
                placeholder="Enter the name of the Individual"
                className="border border-solid border-stone-500 px-2 py-4 rounded-xl mb-6"
                onChange={(e) =>
                  updateProperty("individual_name", e.target.value)
                }
              />
            )}
        </div>
        <div className="flex w-[30%] pl-[5%]">
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

      <label className="text-base font-bold pl-[10%]">
        5. Address for Communication
      </label>
      <div className="flex w-[100%] py-[2%]">
        <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full pl-[10%]">
          <div className="flex items-center mb-4">
            <label className="text-base font-bold">Office</label>
          </div>
          <input
            type="text"
            placeholder="Enter the address for communication"
            className="border border-solid border-stone-500 px-2 py-7 rounded-xl mb-6"
            onChange={(e) => updateProperty("acoffice", e.target.value)}
          />
        </div>

        <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full pl-[10%]">
          <div className="flex items-center mb-4">
            <label className="text-base font-bold">Works / Factory</label>
          </div>
          <input
            type="text"
            placeholder="Enter Works/Factory"
            className="border border-solid border-stone-500 px-2 py-7 rounded-xl mb-6"
            onChange={(e) => updateProperty("acwork", e.target.value)}
          />
        </div>
      </div>

      <label className="text-base font-bold pl-[10%]">
        6. Communication Details
      </label>
      <div className="flex w-[100%] py-[2%]">
        <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full pl-[10%]">
          <div className="flex items-center mb-4">
            <label className="text-base font-bold">Phone/Landline</label>
          </div>
          <input
            type="number"
            placeholder="Enter the Communication Details"
            className="border border-solid border-stone-500 px-2 py-3 rounded-xl mb-6"
            onChange={(e) => updateProperty("cdlan", e.target.value)}
          />

          <div className="flex items-center mb-4">
            <label className="text-base font-bold">Email Id</label>
          </div>
          <input
            type="email"
            placeholder="Enter the Email ID"
            className="border border-solid border-stone-500 px-2 py-3 rounded-xl mb-6"
            onChange={(e) => updateProperty("cdemail", e.target.value)}
          />
        </div>

        <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full pl-[10%]">
          <div className="flex items-center mb-4">
            <label className="text-base font-bold">Phone/Mobile</label>
          </div>
          <input
            type="number"
            placeholder="Enter Phone/Mobile Number"
            className="border border-solid border-stone-500 px-2 py-3 rounded-xl mb-6"
            onChange={(e) => updateProperty("cdphone", e.target.value)}
          />
          <div className="flex items-center mb-4">
            <label className="text-base font-bold">Website</label>
          </div>
          <input
            type="text"
            placeholder="Enter Website"
            className="border border-solid border-stone-500 px-2 py-3 rounded-xl mb-6"
            onChange={(e) => updateProperty("cdweb", e.target.value)}
          />
        </div>
      </div>

      <label className="text-base font-bold pl-[10%]">
        7. Legal Information:
      </label>
      <div className="flex w-[100%] py-[2%]">
        <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full pl-[10%]">
          <div className="flex items-center mb-4">
            <label className="text-base font-bold">Aadhaar Card No</label>
          </div>
          <input
            type="text"
            placeholder="Enter the Aadhar Card Number"
            className="border border-solid border-stone-500 px-2 py-3 rounded-xl mb-6"
            onChange={(e) => updateProperty("aadhar", e.target.value)}
          />
          {aadharError && <p className="text-red-500">{aadharError}</p>}

          <div className="flex items-center mb-4">
            <label className="text-base font-bold">GST No</label>
          </div>
          <input
            type="text"
            placeholder="Enter the GST Number"
            className="border border-solid border-stone-500 px-2 py-3 rounded-xl mb-6"
            onChange={(e) => updateProperty("GSTNo", e.target.value)}
          />
          {GSTNoError && <p className="text-red-500">{GSTNoError}</p>}

          <div className="flex items-center mb-4">
            <label className="text-base font-bold">
              Society/Association Registration No
            </label>
          </div>
          <input
            type="text"
            placeholder="Enter the Society/Association Registration No"
            className="border border-solid border-stone-500 px-2 py-3 rounded-xl mb-6"
            onChange={(e) =>
              updateProperty("SocietyAssociationRegNo", e.target.value)
            }
          />
          {societyRegNoError && (
            <p className="text-red-500">{societyRegNoError}</p>
          )}
        </div>

        <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full pl-[10%]">
          <div className="flex items-center mb-4">
            <label className="text-base font-bold">PAN Card No</label>
          </div>
          <input
            type="text"
            placeholder="Enter PAN Card Number"
            className="border border-solid border-stone-500 px-2 py-3 rounded-xl mb-6"
            onChange={(e) => updateProperty("pancardno", e.target.value)}
          />
          {panCardNoError && <p className="text-red-500">{panCardNoError}</p>}
          <div className="flex items-center mb-4">
            <label className="text-base font-bold">
              Company/Firm Registration No
            </label>
          </div>
          <input
            type="text"
            placeholder="Enter the Company/Firm Registration No"
            className="border border-solid border-stone-500 px-2 py-3 rounded-xl mb-6"
            onChange={(e) => updateProperty("CompanyFirmRegNo", e.target.value)}
          />
          {companyRegNoError && (
            <p className="text-red-500">{companyRegNoError}</p>
          )}
        </div>
      </div>

      <label className="text-base font-bold pl-[10%]">
        8. List of Directors/ Partners/ Office Bearers/ Trustees:
      </label>
      <div>
        <ul>
          <li className="text-base font-bold pl-[10%]">
            <div className="flex gap-[15%]">
              <span className="font-bold">SN No</span>
              <span>Name</span>
              <span>Designation</span>
              <span>PAN</span>
            </div>
          </li>
          {datea.map((item, index) => (
            <li key={index} className="text-base font-bold pl-[10%]">
              <div className="flex gap-[18%] pt-[1%]">
                <span>{index + 1}.</span>
                <span>{item.name}</span>
                <span>{item.designation}</span>
                <span>{item.pan}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-[5%] pl-[10%] pt-[1%]">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={inputValues.name}
          className="border border-solid border-stone-500 px-2 py-5 rounded-xl mb-6"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="designation"
          placeholder="Designation"
          value={inputValues.designation}
          className="border border-solid border-stone-500 px-2 py-5 rounded-xl mb-6"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="pan"
          placeholder="PAN"
          className="border border-solid border-stone-500 px-2 py-5 rounded-xl mb-6"
          value={inputValues.pan}
          onChange={handleInputChange}
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-[1%] py-[0.5%] rounded-3xl h-[10%]"
        >
          Add
        </button>
      </div>

      <label className="text-base font-bold pl-[10%]">
        9. Details of the Person Authorized:
      </label>
      <div className="flex w-[100%] py-[2%]">
        <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full pl-[10%]">
          <div className="flex items-center mb-4">
            <label className="text-base font-bold">Name</label>
          </div>
          <input
            type="text"
            placeholder="Enter the name "
            className="border border-solid border-stone-500 px-2 py-5 rounded-xl mb-6"
            onChange={(e) => updateProperty("paname", e.target.value)}
          />

          <div className="flex items-center mb-4">
            <label className="text-base font-bold">PAN</label>
          </div>
          <input
            type="text"
            placeholder="Enter the PAN Number"
            className="border border-solid border-stone-500 px-2 py-5 rounded-xl mb-6"
            onChange={(e) => updateProperty("papan", e.target.value)}
          />

          <div className="flex items-center mb-4">
            <label className="text-base font-bold">Phone</label>
          </div>
          <input
            type="text"
            placeholder="Enter the Phone Number"
            className="border border-solid border-stone-500 px-2 py-5 rounded-xl mb-6"
            onChange={(e) => updateProperty("paphone", e.target.value)}
          />
        </div>

        <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full pl-[10%]">
          <div className="flex items-center mb-4">
            <label className="text-base font-bold">Designation</label>
          </div>
          <input
            type="text"
            placeholder="Enter the Designation"
            className="border border-solid border-stone-500 px-2 py-5 rounded-xl mb-6"
            onChange={(e) => updateProperty("padesignation", e.target.value)}
          />
          <div className="flex items-center mb-4">
            <label className="text-base font-bold">Aadhaar</label>
          </div>
          <input
            type="text"
            placeholder="Enter Aadhaar Number"
            className="border border-solid border-stone-500 px-2 py-5 rounded-xl mb-6"
            onChange={(e) => updateProperty("paaadhaar", e.target.value)}
          />
          <div className="flex items-center mb-4">
            <label className="text-base font-bold">Mail Id</label>
          </div>
          <input
            type="text"
            placeholder="Enter Mail Id"
            className="border border-solid border-stone-500 px-2 py-5 rounded-xl mb-6"
            onChange={(e) => updateProperty("pamail_id", e.target.value)}
          />
        </div>
      </div>

      <label className="text-base font-bold pl-[10%]">
        10. Category of Industry/ Trade/ Services:
      </label>
      <div className="flex w-[100%] py-[2%]">
        <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full pl-[10%]">
          <div className="flex items-center mb-4">
            <label className="text-base font-bold">Main Category</label>
          </div>
          <input
            type="text"
            placeholder="Enter the Main Category"
            className="border border-solid border-stone-500 px-2 py-5 rounded-xl mb-6"
            onChange={(e) => updateProperty("indmain_category", e.target.value)}
          />
        </div>

        <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full pl-[10%]">
          <div className="flex items-center mb-4">
            <label className="text-base font-bold">Sub Category</label>
          </div>
          <input
            type="text"
            placeholder="Enter the Sub Category"
            onChange={(e) => updateProperty("indsub_category", e.target.value)}
            className="border border-solid border-stone-500 px-2 py-5 rounded-xl mb-6"
          />
        </div>
      </div>

      <label className="text-base font-bold pl-[10%]">
        11. Catering to Market:
      </label>
      <div className="flex w-[100%] py-[2%]">
        <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full pl-[10%]">
          <div className="flex items-center mb-4">
            <label className="text-base font-bold">Domestic</label>
          </div>
          <input
            type="text"
            onChange={(e) => updateProperty("cmdomestic", e.target.value)}
            className="border border-solid border-stone-500 px-2 py-5 rounded-xl mb-6"
          />

          <div className="flex items-center mb-4">
            <label className="text-base font-bold">Both</label>
          </div>
          <input
            type="text"
            onChange={(e) => updateProperty("cmboth", e.target.value)}
            className="border border-solid border-stone-500 px-2 py-5 rounded-xl mb-6"
          />

          <div className="flex items-center mb-4">
            <label className="text-base font-bold">% of Imports</label>
          </div>
          <input
            type="text"
            className="border border-solid border-stone-500 px-2 py-5 rounded-xl mb-6"
            onChange={(e) =>
              updateProperty("cmpercentage_of_imports", e.target.value)
            }
          />
        </div>

        <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full pl-[10%]">
          <div className="flex items-center mb-4">
            <label className="text-base font-bold">Global</label>
          </div>
          <input
            type="text"
            onChange={(e) => updateProperty("cmglobal_market", e.target.value)}
            className="border border-solid border-stone-500 px-2 py-5 rounded-xl mb-6"
          />
          <div className="flex items-center mb-4">
            <label className="text-base font-bold">% of Exports</label>
          </div>
          <input
            type="text"
            onChange={(e) =>
              updateProperty("cmpercentage_of_exports", e.target.value)
            }
            className="border border-solid border-stone-500 px-2 py-5 rounded-xl mb-6"
          />
        </div>
      </div>

      <label className="text-base font-bold pl-[10%]">
        12. Foreign Collaboration if any:
      </label>
      <div className="flex w-[100%] py-[2%]">
        <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full pl-[10%]">
          <div className="flex items-center mb-4">
            <label className="text-base font-bold">Name of the Country</label>
          </div>
          <input
            type="text"
            placeholder="Enter the name of the country"
            className="border border-solid border-stone-500 px-2 py-3 rounded-xl mb-6"
            onChange={(e) =>
              updateProperty(
                "country_name_foreign_collaboration",
                e.target.value
              )
            }
          />
        </div>

        <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full pl-[10%]">
          <div className="flex items-center mb-4">
            <label className="text-base font-bold">
              GlName of the Collaborator / Joint Venture obal
            </label>
          </div>
          <input
            type="text"
            placeholder="Enter the name of the collaborator"
            className="border border-solid border-stone-500 px-2 py-3 rounded-xl mb-6"
            onChange={(e) =>
              updateProperty(
                "collaborator_name_foreign_collaboration",
                e.target.value
              )
            }
          />
        </div>
      </div>

      <div className="flex w-[100%]">
        <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full pl-[10%]">
          <label className="text-base font-bold">
            13. Annual Turnover for the last three years (Rs in Million)
          </label>
          <div className="flex items-center mb-4">
            <label className="text-base font-bold">1st year :</label>
            <img loading="lazy" src={know} alt="logo" className="ml-2" />
          </div>
          <input
            type="text"
            placeholder="Enter the annual turnover for the 1st year"
            onChange={(e) =>
              updateProperty("annual_turnover_year1", e.target.value)
            }
            className="border border-solid border-stone-500 px-2 py-2 rounded-xl mb-6"
          />

          <div className="flex items-center mb-4">
            <label className="text-base font-bold">2nd year :</label>
            <img loading="lazy" src={know} alt="logo" className="ml-2" />
          </div>
          <input
            type="text"
            placeholder="Enter the annual turnover for the 2nd year"
            className="border border-solid border-stone-500 px-2 py-2 rounded-xl mb-6"
            onChange={(e) =>
              updateProperty("annual_turnover_year2", e.target.value)
            }
          />

          <div className="flex items-center mb-4">
            <label className="text-base font-bold">3rd year :</label>
            <img loading="lazy" src={know} alt="logo" className="ml-2" />
          </div>
          <input
            type="text"
            placeholder="Enter annual turnover for the 3rd year"
            className="border border-solid border-stone-500 px-2 py-2 rounded-xl mb-6"
            onChange={(e) =>
              updateProperty("annual_turnover_year3", e.target.value)
            }
          />
        </div>

        <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full pl-[10%]">
          <div className="text-base font-bold mb-4">
            14. Classification of Industry:
          </div>
          <div className="flex flex-col">
            {classindustry.map((option) => (
              <div key={option} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={option}
                  checked={coi.includes(option)}
                  onChange={() => handleCBC(option)}
                  className="mr-2"
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
          </div>
        </div>
      </div>

      <label className="text-base font-bold pl-[10%]">
        15. No of Persons Employed :
      </label>
      <div className="flex w-[100%] py-[2%]">
        <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full pl-[10%]">
          <div className="flex items-center mb-4">
            <label className="text-base font-bold">Direct - Office</label>
          </div>
          <input
            type="text"
            placeholder="Enter the Direct Office Employees"
            className="border border-solid border-stone-500 px-2 py-3 rounded-xl mb-6"
            onChange={(e) =>
              updateProperty("direct_office_employees", e.target.value)
            }
          />

          <div className="flex items-center mb-4">
            <label className="text-base font-bold">
              Indirect - Contractual
            </label>
          </div>
          <input
            type="text"
            placeholder="Enter the Indirect Contractual Employees"
            className="border border-solid border-stone-500 px-2 py-3 rounded-xl mb-6"
            onChange={(e) =>
              updateProperty("indirect_contractual_employees", e.target.value)
            }
          />
        </div>

        <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full pl-[10%]">
          <div className="flex items-center mb-4">
            <label className="text-base font-bold">Works</label>
          </div>
          <input
            type="text"
            placeholder="Enter the Works"
            className="border border-solid border-stone-500 px-2 py-3 rounded-xl mb-6"
            onChange={(e) => updateProperty("works_employees", e.target.value)}
          />
          <div className="flex items-center mb-4">
            <label className="text-base font-bold">Outsourced</label>
          </div>
          <input
            type="text"
            placeholder="Enter the Outsourced Employees"
            className="border border-solid border-stone-500 px-2 py-3 rounded-xl mb-6"
            onChange={(e) =>
              updateProperty("outsourced_employees", e.target.value)
            }
          />
        </div>
      </div>

      <label className="text-base font-bold pl-[10%]">
        16. Welfare Obligations:
      </label>
      <div className="flex w-[100%] py-[2%]">
        <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full pl-[10%]">
          <div className="flex items-center mb-4">
            <label className="text-base font-bold">ESIC</label>
          </div>
          <input
            type="text"
            placeholder="Enter the ESIC Number"
            onChange={(e) => updateProperty("esic", e.target.value)}
            className="border border-solid border-stone-500 px-2 py-3 rounded-xl mb-6"
          />
        </div>

        <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full pl-[10%]">
          <div className="flex items-center mb-4">
            <label className="text-base font-bold">EPF</label>
          </div>
          <input
            type="text"
            placeholder="Enter the EPF Number"
            className="border border-solid border-stone-500 px-2 py-3 rounded-xl mb-6"
            onChange={(e) => updateProperty("epf", e.target.value)}
          />
        </div>
      </div>

      <label className="text-base font-bold pl-[10%]">
        17. Details of branches / Outlet outside India
      </label>
      <div className="flex w-[100%] py-[2%] pl-[10%]">
        <input
          type="text"
          placeholder="Enter the Details of branches / Outlet outside India"
          className="border border-solid border-stone-500 py-10 px-10 rounded-xl mb-6"
          onChange={(e) =>
            updateProperty("branches_outside_india", e.target.value)
          }
        />
      </div>

      <div className="flex w-[100%]">
        <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full pl-[10%]">
          <div className="text-base font-bold mb-4">
            18. Are you member of any other Association :
          </div>
          <div className="text-base font-bold mb-4">
            If yes, mention details:
          </div>
          <div className="flex flex-col">
            {yesno.map((option) => (
              <div key={option} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={option}
                  checked={moaoa && moaoa.includes(option)}
                  onChange={() => handleMOAOA(option)}
                  className="mr-2"
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
          </div>
          {moaoa.includes("Yes") && (
            <input
              type="text"
              placeholder="Enter the name of the Individual"
              className="border border-solid border-stone-500 px-2 py-4 rounded-xl mb-6"
              onChange={(e) =>
                updateProperty("association_name", e.target.value)
              }
            />
          )}
        </div>

        <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full pl-[10%]">
          <div className="text-base font-bold mb-4">
            19. Do you hold any Office Bearers position in any Association
          </div>
          <div className="text-base font-bold mb-4">
            If yes - mention the Association Name & position
          </div>
          <div className="flex flex-col">
            {yesno.map((option) => (
              <div key={option} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={option}
                  checked={ap && ap.includes(option)}
                  onChange={() => handleAP(option)}
                  className="mr-2"
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
          </div>
          {ap.includes("Yes") && (
            <input
              type="text"
              placeholder="Enter the name of the Individual"
              onChange={(e) =>
                updateProperty("association_position", e.target.value)
              }
              className="border border-solid border-stone-500 px-2 py-4 rounded-xl mb-6"
            />
          )}
        </div>
      </div>

      <label className="text-base font-bold pl-[10%]">
        20. Reason for Joining the Chamber
      </label>
      <div className="flex w-[100%] pt-5 pl-[10%]">
        <textarea
          type="text"
          placeholder="Enter the Reason for Joining the Chamber"
          className="border border-solid border-stone-500 py-14 px-20 rounded-xl mb-6"
          onChange={(e) =>
            updateProperty("reason_for_joining_chamber", e.target.value)
          }
        ></textarea>
      </div>

      <label className="text-base font-bold pl-[40%]">
        Upload your E- Sign
      </label>
      <div className="flex w-[100%] py-[1%] pl-[40%]">
        <input
          type="file"
          accept="image/*"
          onChange={handleEsign}
          className="border border-solid border-stone-500 px-[1%] py-2 rounded-xl mb-6"
        />

        {esign && (
          <div className="flex items-center">
            <img
              src={URL.createObjectURL(esign)}
              alt="Preview"
              className="mr-4 rounded"
              style={{ maxWidth: "100px", maxHeight: "100px" }}
            />
          </div>
        )}
      </div>

      <label className="text-base font-bold pl-[40%]">Upload your seal</label>
      <div className="flex w-[100%] py-[1%] pl-[40%]">
        <input
          type="file"
          accept="image/*"
          onChange={handleSeal}
          className="border border-solid border-stone-500 px-[1%] py-2 rounded-xl mb-6"
        />

        {seal && (
          <div className="flex items-center">
            <img
              src={URL.createObjectURL(seal)}
              alt="Preview"
              className="mr-4 rounded"
              style={{ maxWidth: "100px", maxHeight: "100px" }}
            />
          </div>
        )}
      </div>

      <label className="text-base font-bold pl-[40%]">
        Signature of Authorized person with seal
      </label>

      <div className="ml-[10%] mt-[8%]">
        <button
          className="bg-blue-500 text-white px-4 py-3 rounded-3xl hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          onClick={handleSubmit}
        >
          Submit & Proceed Next
        </button>
      </div>

      <div className="p-[5%]"></div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2024 Metaverse Association. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Form;
