import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Event from '../assets/events.png';
import Navbar from './Navbar';
import BASE_URL from './Appconfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Card = ({ image, title, description, eventDate, location }) => {

  return (
    <div className="bg-white rounded-lg shadow-2xl flex mb-4">
      <img
        src={image}
        alt="Event"
        className="object-cover w-[15%] cursor-pointer"
      />
      <div className="p-4 flex flex-col justify-between">
        <div>
          <a href='/eventdetails' className="text-lg font-semibold no-underline cursor-pointer text-black .josefin-sans-Josefin">{title}</a>
          <p className="text-sm text-gray-600 mt-2">{description}</p>
        </div>
        <div className='flex gap-5'>
          <div className="flex flex-row items-center">
            <FontAwesomeIcon icon={faCalendarAlt} className="text-blue-800 mr-2" />
            <p className="text-sm text-blue-800 pt-3 caveat-Caveatfont ">Event Date: {eventDate}</p>
          </div>
          <div className="flex flex-row items-center">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-800 mr-2" />
            <p className="text-sm text-blue-800 pt-3 caveat-Caveatfont">Location: {location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};


const EventPage = () => {
  const [events, setEvents] = useState([]); 

  const accessToken = localStorage.getItem('token');

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/events/`, {
          headers: {
            Authorization: `Token ${accessToken}`,
          },
        });

        if (!response.data) {
          throw new Error('Failed to fetch event data');
        }

        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching event data:', error);
      }
    };

    fetchEvent();
  }, [accessToken]); 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Navbar />
      <div className="w-full top-4 bg-gray-300 relative">
        <img src={Event} alt="Event" className="w-full h-[80vh]" />
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
            Events Schedule
          </span>
        </div>
      </div>
      <div className="w-[70%] pt-[5%]">
        {events.map((event, index) => (
          <Card
            key={index}
            image={BASE_URL + event.Eventimage}
            title={event.NameofEvent}
            description={event.Description}
            eventDate={event.DateofEvent}
            location={event.Location}
          />
        ))}
      </div>
      <div className=""></div>
    </div>
  );
};

export default EventPage;
