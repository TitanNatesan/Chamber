import React, { useMemo, useState, useEffect } from 'react';
import { MantineReactTable, useMantineReactTable } from 'mantine-react-table';
import axios from 'axios';
import BASE_URL from './Appconfig';
import Navbar from './Navbar';

const MembersDetailsTable = () => {
  const [data, setData] = useState([]);

  const accessToken = localStorage.getItem('token');

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/formadmin/`, {
          headers: {
            Authorization: `Token ${accessToken}`,
          },
        });

        if (!response.data) {
          throw new Error('Failed to fetch data');
        }

        // Merge Form 2 data into Form 1 data
        const mergedData = response.data.map(item => ({
          ...item,
          ...item.Form2[0],
          e_sign: BASE_URL + item.e_sign,
          seal_image: BASE_URL + item.seal_image,
          iande: BASE_URL + item.iande,
          incometaxtpan : BASE_URL + item.incometaxtpan,
          FactoryRegistrationCertificate: BASE_URL + item.FactoryRegistrationCertificate,
          MemorandumArticleofAssociation: BASE_URL + item.MemorandumArticleofAssociation,
          GSTINRegistrationCopy: BASE_URL + item.GSTINRegistrationCopy,
          IECodeCertificate: BASE_URL + item.IECodeCertificate,
          ProfessionalCertificate: BASE_URL + item.ProfessionalCertificate,
          CopyofLandDocument: BASE_URL + item.CopyofLandDocument,
          LandHolding: BASE_URL + item.LandHolding,
          passportsizephoto: BASE_URL + item.passportsizephoto,
          DirectorsPartners: BASE_URL + item.DirectorsPartners,
        }));

        setData(mergedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchEvent();
  }, [accessToken]); 

  const columns = useMemo(
    () => [
      {
        accessorKey: 'Nameofapplicant',
        header: 'Applicant Name',
      },
      {
        accessorKey: 'constitution',
        header: 'Constitution',
      },
      {
        accessorKey: 'Businessactivity',
        header: 'Business Activity',
      },
      {
        accessorKey: 'regoffadd',
        header: 'Registered Office Address',
      },
      {
        accessorKey: 'acoffice',
        header: 'Office Address',
      },
      {
        accessorKey: 'acwork',
        header: 'Work Address',
      },
      {
        accessorKey: 'cdlan',
        header: 'Landline',
      },
      {
        accessorKey: 'cdphone',
        header: 'Phone',
      },
      {
        accessorKey: 'cdemail',
        header: 'Email',
      },
      {
        accessorKey: 'cdweb',
        header: 'Website',
      },
      {
        accessorKey: 'aadhar',
        header: 'Aadhar',
      },
      {
        accessorKey: 'pancardno',
        header: 'PAN Card No',
      },
      {
        accessorKey: 'GSTNo',
        header: 'GST No',
      },
      {
        accessorKey: 'CompanyFirmRegNo',
        header: 'Company/Firm Reg No',
      },
      {
        accessorKey: 'SocietyAssociationRegNo',
        header: 'Society/Association Reg No',
      },
      {
        accessorKey: 'paname',
        header: 'PAN Name',
      },
      {
        accessorKey: 'papan',
        header: 'PAN No',
      },
      {
        accessorKey: 'paphone',
        header: 'Phone',
      },
      {
        accessorKey: 'padesignation',
        header: 'Designation',
      },
      {
        accessorKey: 'paaadhaar',
        header: 'AADHAAR',
      },
      {
        accessorKey: 'pamail_id',
        header: 'Email',
      },
      {
        accessorKey: 'indmain_category',
        header: 'Main Category',
      },
      {
        accessorKey: 'indsub_category',
        header: 'Sub Category',
      },
      {
        accessorKey: 'cmdomestic',
        header: 'Domestic',
      },
      {
        accessorKey: 'cmboth',
        header: 'Both',
      },
      {
        accessorKey: 'cmpercentage_of_imports',
        header: 'Percentage of Imports',
      },
      {
        accessorKey: 'cmglobal_market',
        header: 'Global Market',
      },
      {
        accessorKey: 'cmpercentage_of_exports',
        header: 'Percentage of Exports',
      },
      {
        accessorKey: 'country_name_foreign_collaboration',
        header: 'Country Name for Foreign Collaboration',
      },
      {
        accessorKey: 'collaborator_name_foreign_collaboration',
        header: 'Collaborator Name for Foreign Collaboration',
      },
      {
        accessorKey: 'annual_turnover_year1',
        header: 'Annual Turnover Year 1',
      },
      {
        accessorKey: 'annual_turnover_year2',
        header: 'Annual Turnover Year 2',
      },
      {
        accessorKey: 'annual_turnover_year3',
        header: 'Annual Turnover Year 3',
      },
      {
        accessorKey: 'classindustry',
        header: 'Industry Class',
      },
      {
        accessorKey: 'direct_office_employees',
        header: 'Direct Office Employees',
      },
      {
        accessorKey: 'indirect_contractual_employees',
        header: 'Indirect Contractual Employees',
      },
      {
        accessorKey: 'works_employees',
        header: 'Works Employees',
      },
      {
        accessorKey: 'outsourced_employees',
        header: 'Outsourced Employees',
      },
      {
        accessorKey: 'esic',
        header: 'ESIC',
      },
      {
        accessorKey: 'epf',
        header: 'EPF',
      },
      {
        accessorKey: 'branches_outside_india',
        header: 'Branches Outside India',
      },
      {
        accessorKey: 'is_member_of_association',
        header: 'Is Member of Association',
      },
      {
        accessorKey: 'association_name',
        header: 'Association Name',
      },
      {
        accessorKey: 'is_office_bearer',
        header: 'Is Office Bearer',
      },
      {
        accessorKey: 'association_position',
        header: 'Association Position',
      },
      {
        accessorKey: 'reason_for_joining_chamber',
        header: 'Reason for Joining Chamber',
      },
      {
        accessorKey: 'e_sign',
        header: 'E-Sign',
      },
      {
        accessorKey: 'seal_image',
        header: 'Seal Image',
      },
      {
        accessorKey: 'iande',
        header: 'I and E',
      },
      {
        accessorKey: 'incometaxtpan',
        header: 'Income Tax PAN',
      },
      {
        accessorKey: 'FactoryRegistrationCertificate',
        header: 'Factory Registration Certificate',
      },
      {
        accessorKey: 'MemorandumArticleofAssociation',
        header: 'Memorandum Article of Association',
      },
      {
        accessorKey: 'GSTINRegistrationCopy',
        header: 'GSTIN Registration Copy',
      },
      {
        accessorKey: 'IECodeCertificate',
        header: 'IE Code Certificate',
      },
      {
        accessorKey: 'ProfessionalCertificate',
        header: 'Professional Certificate',
      },
      {
        accessorKey: 'CopyofLandDocument',
        header: 'Copy of Land Document',
      },
      {
        accessorKey: 'LandHolding',
        header: 'Land Holding',
      },
      {
        accessorKey: 'passportsizephoto',
        header: 'Passport Size Photo',
      },
      {
        accessorKey: 'DirectorsPartners',
        header: 'Directors/Partners',
      },      
    ],
    []
  );


  

  const table = useMantineReactTable({
    columns,
    data,
  });

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="pt-12 pb-10 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold mb-4">Members Details Table</h1>
        </div>
      </div>
      <div className="flex-1 px-4 py-8 ">
        <div className="overflow-x-auto ">
          <MantineReactTable table={table} />
        </div>
      </div>
    </div>  
  );
};

export default MembersDetailsTable;
