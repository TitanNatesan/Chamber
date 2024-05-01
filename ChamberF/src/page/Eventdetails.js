import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import BASE_URL from './Appconfig';
import { useParams } from 'react-router-dom';

const EventDetails = () => {
  const [event, setEvent] = useState(null); // State to hold the event detail
  const { eventId } = useParams(); // Get the eventId from the URL params

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/events/${eventId}/`);

        if (!response.data) {
          throw new Error('Failed to fetch event data');
        }

        setEvent(response.data); // Set the event state with the fetched event data
      } catch (error) {
        console.error('Error fetching event data:', error);
      }
    };

    fetchEvent();
  }, [eventId]); 


  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Navbar />
      <div className="w-full top-4 bg-gray-300 relative">
        <img src={`${BASE_URL}${event.Eventimage}`} alt="Event" className="w-full h-[80vh]" />
        <div className="absolute top-[40%] left-[15%] p-4">
          <span className="text-2xl text-red-400 font-bold caveat-Caveatfont">
            #{' '}
            <a
              href="/"
              className="text-red-400 font-bold caveat-Caveatfont no-underline "
            >
              Home
            </a>{' '}
            &gt;&gt; Events Schedule
          </span>
          <br />
          <br />
          <span className="text-white josefin-sans-Josefin text-5xl top-[5%]">
            Events Details
          </span>
        </div>
      </div>
      <div className="mt-8">
        <img src={`${BASE_URL}${event.Eventimage}`} alt={event.NameofEvent} className="w-[50%]" />
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-semibold my-4">{event.NameofEvent}</h2>
          <p className="text-gray-700 mb-2">{event.Description}</p>
          <p className="text-gray-700 mb-2">Date: {event.DateofEvent}</p>
          <p className="text-gray-700 mb-2">Location: {event.Location}</p>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
