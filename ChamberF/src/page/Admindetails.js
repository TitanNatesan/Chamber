import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useBaseUrl } from '../context';

const AdminDetailsPage = () => {

  const navigate = useNavigate(); // Corrected hook name
  const { baseUrl } = useBaseUrl();


  useEffect(() => {
    try {
      const response = axios.get(`${baseUrl}api/checkAccess/`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${localStorage.getItem('token')}`,
        },
      });
      if (response.data['message'] === 'Token is valid') {
        console.log('Access Granted');
      }
      else {
        navigate('/login');
      }
    }
    catch (error) {
      console.log(error);
    }
  }, []);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}api/application/${id}/`, {
          headers: {
            "Authorization": `Token ${localStorage.getItem('token')}`,
          }
        });
        console.log(response.data);
        setformData(response.data['content'])
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchData(); // Call the fetchData function
  
  }, [id]); // Include id in the dependency array so that the effect runs whenever id changes
  



  const [formData, setformData] = useState({
    directors: [],
    Nameofapplicant: "John Doe", 
    constitution: "Some Constitution",
    individual_name: "Individual Name",
    is_individual: false,
    Businessactivity: "Some Business Activity",
    regoffadd: "Registered Office Address",
    acoffice: "Additional Contact Office",
    acwork: "Additional Contact Work",
    cdlan: "Contact Designation Landline",
    cdphone: "Contact Phone",
    cdemail: "Contact Email",
    cdweb: "Contact Website",
    aadhar: "Aadhar Number",
    pancardno: "PAN Card Number",
    GSTNo: "GST Number",
    CompanyFirmRegNo: "Company/Firm Registration Number",
    SocietyAssociationRegNo: "Society/Association Registration Number",
    paname: "Principal Applicant Name",
    papan: "Principal Applicant PAN",
    paphone: "Principal Applicant Phone",
    padesignation: "Principal Applicant Designation",
    paaadhaar: "Principal Applicant Aadhar",
    pamail_id: "Principal Applicant Email",
    indmain_category: "Industry Main Category",
    indsub_category: "Industry Sub Category",
    country_name_foreign_collaboration: "Country Name for Foreign Collaboration",
    collaborator_name_foreign_collaboration: "Collaborator Name for Foreign Collaboration",
    annual_turnover_year1: "Annual Turnover Year 1",
    annual_turnover_year2: "Annual Turnover Year 2",
    annual_turnover_year3: "Annual Turnover Year 3",
    classindustry: "Class of Industry",
    direct_office_employees: "Direct Office Employees",
    indirect_contractual_employees: "Indirect Contractual Employees",
    works_employees: "Works Employees",
    outsourced_employees: "Outsourced Employees",
    esic: "ESIC",
    epf: "EPF",
    branches_outside_india: "Branches Outside India",
    is_member_of_association: true,
    association_name: "Association Name",
    is_office_bearer: false,
    association_position: "Association Position",
    reason_for_joining_chamber: "Reason for Joining Chamber",
    e_sign: "E-Sign",
    seal_image: "Seal Image",
  })

  const handleAccept = async() => {
    // Handle accept logic here
    const response = await axios.post(`${baseUrl}api/formadmin/`, {
      status: 'approve',
      id: id,
    }, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('token')}`,
      },
    });
    console.log(response.data);
  };

  const [popup, setPopup] = useState(false);
  const [reason, setReason] = useState(''); // State to store the reason for rejection


  const handleDecline = async() => {
    // Handle decline logic here
    const response = await axios.post(`${baseUrl}api/formadmin/`, {
      status: 'rejected',
      id: id,
      ror: reason,
    }, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('token')}`,
      },
    });
    console.log(response.data);
    setPopup(false);
  };

  return (
    <div className="p-4">
      {popup && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Popup</h2>
            <p>Please Provide the reason to Reject the application of {formData['Nameofapplicant']}</p>
            <textarea
              type="text"
              className="border border-gray-300 rounded-lg w-full p-2 mt-2"
              onChange={(e) => setReason(e.target.value)}
            />
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2"
              onClick={() => handleDecline()}
            >
              Reject
            </button>
          </div>
        </div>
      )}
      <h2 className="text-2xl font-bold mb-4">Admin Details</h2>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Directors:</h3>
        <ul>
          {formData.directors && formData.directors.length === 0 && <li>No directors found</li>}
          {formData.directors && formData.directors.map((director, index) => (
            <li key={index}>{director}</li>
          ))}
        </ul>
      </div>
      {Object.entries(formData).map(([key, value]) => (
        <div key={key} className="mb-4">
          <h3 className="text-lg font-semibold">{key}:</h3>
          <p>{value}</p>
        </div>
      ))}
      <div className="mt-4">
        <button onClick={handleAccept} className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 mr-4 rounded">
          Accept
        </button>
        <button onClick={() => setPopup(true)} className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
          Decline
        </button>
      </div>
    </div>
  );
  
};

export default AdminDetailsPage;

