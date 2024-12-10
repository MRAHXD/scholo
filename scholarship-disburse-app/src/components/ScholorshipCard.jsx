import React from 'react';
import Link from 'next/link';

const ScholarshipCard = ({scholarship}) => {
 
  const containerStyle = {
    border: '1px solid #000',
    padding: '16px',
    margin: '8px',
    borderRadius: '8px',
    width: '65vw'
  };

  const textStyle = {
    color: '#555',
    marginBottom: '0.5rem'
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
    <div style={containerStyle}>  
    <h2 style={{...textStyle, fontWeight: 'bold', fontSize: '1.125rem'}}>{scholarship.name}</h2>  
    <p style={textStyle}>Type: {scholarship.scholarshipType}</p>  
    <p style={textStyle}>state: {scholarship.state}</p>  
    <p style={textStyle}>Status: {scholarship.applicationStatus}</p>  
    <p style={textStyle}>Level: {scholarship.educationalLevel}</p>  
    <p style={textStyle}>Description: {scholarship.description}</p>  
    <p style={textStyle}>Benefits: {scholarship.Benefits}</p>  
    <p style={textStyle}>Eligibility: {scholarship.eligibility}</p>  
    <p style={textStyle}>Deadline: {scholarship.deadline}</p>  
    <Link href={`/${scholarship.id}`} passHref>  
      <div style={linkContainerStyle}>Apply Now</div>  
    </Link>  
  </div>  
  );
};

export default ScholarshipCard; 
