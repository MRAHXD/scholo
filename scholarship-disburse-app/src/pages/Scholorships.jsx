import ScholarshipCard from '../components/ScholorshipCard.jsx';
import Filters from '../components/Filter.jsx';
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';

export default function Scholarships() {

  
  const scholarships = [
    {
      id: 1,
      name: 'Mukhyamantri Medhavi Vidyarthi Yojana',
      state: 'Madhya Pradesh',
      scholarshipType: 'merit-based',
      applicationStatus: 'open',
      educationalLevel: 'undergraduate',
      description: 'This scheme provides financial assistance to meritorious students who have scored 85% or above in their Class 12 state board exams or 75% or above in CBSE/ICSE.',  
      Benefits: 'Covers tuition fees for engineering, medical, law, and other professional courses up to ₹1.5 Lakh per year.',
      eligibility: 'Must be a domicile of Madhya Pradesh and Family income should be less than ₹6 Lakhs per annum.',
      deadline: '20 Feb 2025',
    },
    {
      id: 2,
      name: 'E-Grantz Scholarship',
      state: 'Kerala',
      scholarshipType: 'Need-Based',
      applicationStatus: 'open',
      educationalLevel: 'School to Postgraduate',
      description: 'A scholarship for economically backward students from SC/ST/OBC categories pursuing education from recognized institutions in Kerala. ',  
      Benefits: 'Provides monthly stipends and tuition fee waivers directly credited to the students bank account.',
      eligibility: 'Must belong to SC/ST/OBC categories and Annual family income should not exceed ₹2.5 Lakhs for SC/ST and ₹1 Lakhs for OBC.',
      deadline: '03 march 2025',
    },
    {
      id: 3,
      name: 'Prime Minister’s Scholarship Scheme for RPF/RPSF',
      state: 'all states',  
      scholarshipType: 'Special Category',
      applicationStatus: '(next cycle begins in April 2025)', 
      educationalLevel: 'Undergraduate/Postgraduate',
      description: 'Aimed at the wards of RPF/RPSF personnel to support higher education.',  
      Benefits: '₹2,250 per month for girls and ₹2,000 per month for boys and Covers tuition fees for professional courses like B.Tech, MBBS, MCA, etc.',
      eligibility: 'Must have secured at least 60% in Class 12 and Applicable only for dependent wards of RPF/RPSF personnel.',
      deadline: '03 march 2025',
    },
  ];  

  const [stateFilter, setStateFilter] = useState("all");  
  const [scholarshipTypeFilter, setScholarshipTypeFilter] = useState("");  
  const [applicationStatusFilter, setApplicationStatusFilter] = useState("");  
  const [educationalLevelFilter, setEducationalLevelFilter] = useState("");  
  
  const filteredScholarships = scholarships.filter(scholarship => {  
    const matchesState = stateFilter === 'all' || scholarship.state === stateFilter;  
    const matchesType = scholarship.scholarshipType === scholarshipTypeFilter || scholarshipTypeFilter === "";  
    const matchesStatus = scholarship.applicationStatus === applicationStatusFilter || applicationStatusFilter === "";  
    const matchesLevel = scholarship.educationalLevel === educationalLevelFilter || educationalLevelFilter === "";  
  
    return matchesState && matchesType && matchesStatus && matchesLevel;  
  });
  

  const wrapperStyle = {
     display: 'flex', 
     padding: '2em',
     background: '#f9f9f9',
  };

  const filterStyle = {
     width: '20%',  
     marginRight: '2em',
     background: '#fff',
     borderRadius: '5px',
     padding: '1em',
     boxShadow: '0px 0px 15px 0px rgba(0,0,0,0.1)',
     height: 'fit-content'
  };

  const cardsStyle = {
     width: '80%',   
     display: 'flex',
     gap: '1em',  
     flexWrap: 'wrap',
     height: 'fit-content'  
  };

  const linkContainerStyle = {
    display: 'inline-block',
    marginTop: '0.5rem',
    backgroundColor: '#007BFF',
    color: '#FFF',
    borderRadius: '8px',
    padding: '8px'
  };

  return (
    
    <div style={wrapperStyle}>
    <div style={filterStyle}>  
   
    <Link href="/" >
    <div style={linkContainerStyle}>Home</div>
    </Link>
    
      <Filters   
         setStateFilter={setStateFilter}  
         setScholarshipTypeFilter={setScholarshipTypeFilter}  
         setApplicationStatusFilter={setApplicationStatusFilter}  
         setEducationalLevelFilter={setEducationalLevelFilter}  
      />  
    </div>  
    <div style={cardsStyle}>  
      {filteredScholarships.map(scholarship => (  
        <ScholarshipCard key={scholarship.id} scholarship={scholarship} />  
      ))}  
    </div>  
  </div>  
);      
}
