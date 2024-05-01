import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useBaseUrl } from '../context';

const Adminconf = () => {
  const navigate = useNavigate(); // Corrected hook name
  const { baseUrl } = useBaseUrl();
  const [data, setData] = useState([]);
  const [popup, setPopup] = useState(false);
  const [rejectingRecord, setRejectingRecord] = useState({}); // State to store the record that is being rejected
  const [reason, setReason] = useState(''); // State to store the reason for rejection



  useEffect(() => {

    try{
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
    catch(error){
      console.log(error);   
    }

    axios.get(`${baseUrl}api/formadmin/`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('token')}`,
      },
    })
      .then((response) => {
        setData(response.data);
        console.log(data[0]['GSTNo']);
        // setAdmin(response.data); 
      })
      .catch((error) => {
        console.log(error);
      });
  }, [baseUrl]);

  const handleFirstNameClick = (item) => {
    console.log("Clicked on first name:", item.firstName); // Debugging statement
    // Navigate to admin details page
    const itemID = item.id;
    navigate(`/admindetails/${itemID}`); // Corrected function call
  };
  const handleAccept =  async(item) => {
    console.log("Accepting item:", item); // Dummy implementation, you can replace this with your actual logic
    const response = await axios.post(`${baseUrl}api/formadmin/`, {
      status: 'approve',
      id: item['id'],
    }, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('token')}`,
      },
    });
    console.log(response.data);
    setData(response.data['content'])

  };

  const handleReject = (item) => {
    setPopup(true);
    setRejectingRecord(item);
    console.log("Rejecting item:", item); // Dummy implementation, you can replace this with your actual logic
  };

  const handleSubmit = () => {
    // Implement your logic to reject the application here
    console.log('Reason for rejection:', reason);
    console.log('Record to be rejected:', rejectingRecord);
    setPopup(false);

    axios.post(`${baseUrl}api/formadmin/`, {
      status: 'rejected',
      id: rejectingRecord['id'],
      ror:reason  
    }, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('token')}`,
      },
    })
      .then((response) => {
        console.log(response.data);
        if (response.data['message'] === 'Application Rejected') {
          setData(response.data['content']);
        }
      })
      .catch((error) => {
        console.log(error);
      }); // Corrected function call

  }



  return (
    <>
      {popup &&
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Popup</h2>
            <p>Please Provide the reason to Reject the application of {rejectingRecord['Nameofapplicant']}</p>
            <textarea type="text" className="border border-gray-300 rounded-lg w-full p-2 mt-2" onChange={(e) => setReason(e.target.value)}/>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-all"
              onClick={() => handleSubmit()}
            >
              Reject
            </button>
          </div>
        </div>
      }
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sno</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First Name</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">

          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{item.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <a
                    href="#"
                    className="text-indigo-600 hover:text-indigo-900"
                    onClick={(e) => {
                      e.preventDefault();
                      handleFirstNameClick(item);
                    }}
                  >
                    {item['Nameofapplicant']}
                  </a>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{item['form_status']}</td>
                {item['form_status'] === 'pending' && (
                  <>
                  <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleAccept(item)}
                  >
                    Accept
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleReject(item)}
                  >
                    Reject
                  </button>
                </td>
                </>
                )}

                {
                  item['form_status'] === 'rejected' && (
                    <>
                    <p className='px-6 py-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider mt-3'>{item['ror']}</p>
                    </>
                  )
                }
                
              </tr>
            );
          })}

        </tbody>
      </table></>
  );
};

export default Adminconf;
