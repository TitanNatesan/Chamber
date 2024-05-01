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
    <div>
      {popup &&
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Popup</h2>
            <p>Please Provide the reason to Reject the application of {formData['Nameofapplicant']}</p>
            <textarea type="text" className="border border-gray-300 rounded-lg w-full p-2 mt-2" onChange={(e) => setReason(e.target.value)}/>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-all"
              onClick={() => handleDecline()}
            >
              Reject
            </button>
          </div>
        </div>
      }
      <h2>Admin Details</h2>
      <div>
        <h3>Directors:</h3>
        <ul>
          {
            formData.directors && formData.directors.length === 0 && <li>No directors found</li>
          }
          {formData.directors && formData.directors.map((director, index) => (
            <li key={index}>{director}</li>
          ))}

        </ul>
      </div>
      <div>
        <h3>Name of Applicant: {formData.Nameofapplicant}</h3>
        <h3>Constitution: {formData.constitution}</h3>
        <h3>Is Individual: {formData.is_individual ? 'Yes' : 'No'}</h3>
        <h3>Business Activity: {formData.Businessactivity}</h3>
        <h3>Registered Office Address: {formData.regoffadd}</h3>
        <h3>Additional Contact Office: {formData.acoffice}</h3>
        <h3>Additional Contact Work: {formData.acwork}</h3>
        <h3>Contact Designation Landline: {formData.cdlan}</h3>
        <h3>Contact Phone: {formData.cdphone}</h3>
        <h3>Contact Email: {formData.cdemail}</h3>
        <h3>Contact Website: {formData.cdweb}</h3>
        <h3>Aadhar Number: {formData.aadhar}</h3>
        <h3>PAN Card Number: {formData.pancardno}</h3>
        <h3>GST Number: {formData.GSTNo}</h3>
        <h3>Company/Firm Registration Number: {formData.CompanyFirmRegNo}</h3>
        <h3>Society/Association Registration Number: {formData.SocietyAssociationRegNo}</h3>
        <h3>Principal Applicant Name: {formData.paname}</h3>
        <h3>Principal Applicant PAN: {formData.papan}</h3>
        <h3>Principal Applicant Phone: {formData.paphone}</h3>
        <h3>Principal Applicant Designation: {formData.padesignation}</h3>
        <h3>Principal Applicant Aadhar: {formData.paaadhaar}</h3>
        <h3>Principal Applicant Email: {formData.pamail_id}</h3>
        <h3>Industry Main Category: {formData.indmain_category}</h3>
        <h3>Industry Sub Category: {formData.indsub_category}</h3>
        <h3>Country Name for Foreign Collaboration: {formData.country_name_foreign_collaboration}</h3>
        <h3>Collaborator Name for Foreign Collaboration: {formData.collaborator_name_foreign_collaboration}</h3>
        <h3>Annual Turnover Year 1: {formData.annual_turnover_year1}</h3>
        <h3>Annual Turnover Year 2: {formData.annual_turnover_year2}</h3>
        <h3>Annual Turnover Year 3: {formData.annual_turnover_year3}</h3>
        <h3>Class of Industry: {formData.classindustry}</h3>
        <h3>Direct Office Employees: {formData.direct_office_employees}</h3>
        <h3>Indirect Contractual Employees: {formData.indirect_contractual_employees}</h3>
        <h3>Works Employees: {formData.works_employees}</h3>
        <h3>Outsourced Employees: {formData.outsourced_employees}</h3>
        <h3>ESIC: {formData.esic}</h3>
        <h3>EPF: {formData.epf}</h3>
        <h3>Branches Outside India: {formData.branches_outside_india}</h3>
        <h3>Is Member of Association: {formData.is_member_of_association ? 'Yes' : 'No'}</h3>
        <h3>Association Name: {formData.association_name}</h3>
        <h3>Is Office Bearer: {formData.is_office_bearer ? 'Yes' : 'No'}</h3>
        <h3>Association Position: {formData.association_position}</h3>
        <h3>Reason for Joining Chamber: {formData.reason_for_joining_chamber}</h3>
        <h3>E-Sign: {formData.e_sign}</h3>
        {formData.e_sign && <img src={baseUrl+formData.e_sign} alt="E-Signature" />}
        <h3>Seal Image: {formData.seal_image}</h3>
        {formData.e_sign && <img src={baseUrl+formData.seal_image} alt="E-Signature" />}
        <h3>Application Status: {formData.form_status}</h3>

      </div>
      <div className="mt-8">
        <button onClick={handleAccept} className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 mr-4 rounded">Accept</button>
        <button onClick={() => setPopup(true)} className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">Decline</button>
      </div>
    </div>
  );
};

export default AdminDetailsPage;

