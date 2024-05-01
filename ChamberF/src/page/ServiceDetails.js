import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const ServiceDetails = () => {

    const navigate = useNavigate()

    const handleContact = () => {
        navigate('/contact')
    }

  const services = [
    {
      title: "Certificate of Origin",
      description: "The chamber is authorised to issue certificate of origin for manufacturers and exporters.",
      howTo: "Submit the following documents when applying for a Non – Preferential Certificate of Origin:",
      steps: [
        "Cover letter along with Invoice copy, packing list, BL or Airway bill or LR Copy.",
      ],
    },
    {
      title: "VISA Letter",
      description: "Issuing visa recommendation letters for overseas business visits to member companies.",
      howTo: "Submit the following documents when applying for a VISA letter:",
      steps: [
        "A letter of request addressed to the ICCIC, on the original letterhead of the organisation (application format should be obtained from the ICCIC Visa Recommendation Department)",
        "The person applying for the visa must submit a photocopy of their passport.",
        "A photocopy of the invitation letter you received from the country you are visiting.",
        "All documents must be received in hard copy, only that will be processed.",
      ],
    },
    {
      title: "Consultation/Advisory",
      description: "Regarding issues and procedures relating to all aspects of business right from setting up to scaling up.",
    },
    {
      title: "Business Listing",
      description: "List your business to grow. Get connections and leads to generate more revenue opportunities.",
    },
    {
      title: "Trade Delegation",
      description: "Organising trade delegations for members as well as hosting delegations from other countries.",
    },
  ];

  return (
    <div>
        < Navbar />
        <div className="w-full py-12 dark:bg-gray-900">
            <h1 className="text-4xl font-bold mb-8 text-white text-center">Our Services</h1>
            <div className="flex justify-center">
                <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="p-6">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-900">{service.title}</h2>
                        <p className="text-gray-700">{service.description}</p>
                        {service.howTo && (
                        <>
                            <h3 className="text-lg font-semibold mt-4">How to {service.title}?</h3>
                            <p className="text-gray-700">{service.howTo}</p>
                            <ul className="list-disc pl-6 mt-2">
                            {service.steps.map((step, i) => (
                                <li key={i} className="text-gray-700">{step}</li>
                            ))}
                            </ul>
                        </>
                        )}
                    </div>
                    <div className="flex justify-center self-end">
                        <button onClick={handleContact} className="bg-blue-500  hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md my-4">
                        Contact Us
                        </button>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
        <Footer />
    </div>
  );
};

export default ServiceDetails;
