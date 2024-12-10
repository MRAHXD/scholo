import React from 'react';

const states = ['National', 'Madhya Pradesh', 'Kerala'];
const scholarshipTypes = ['merit-based', 'Need-Based', 'Special Category'];
const applicationStatus = ['open', 'closed'];
const educationalLevels = ['undergraduate', 'School to Postgraduate', 'Undergraduate/Postgraduate'];

const Filters = ({ setStateFilter, setScholarshipTypeFilter, setApplicationStatusFilter, setEducationalLevelFilter }) => {

  const selectStyle = {
    border: '1px solid #ddd',
    padding: '0.8em',
    marginBottom: '1em',
    width: '100%',
    borderRadius: '5px',
    boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.1)',
    fontSize: '0.9em',
    alignItems: 'center',
  };

  const containerStyle = {
    padding: '1em'
  };

  const headingStyle = {
    fontWeight: 'bold', 
    fontSize: '1.1em', 
    marginBottom: '1em',
    color: '#007BFF'
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Filters:</h2>
      <h4>State Filter</h4>
      <select 
        style={selectStyle} 
        id="state" 
        onChange={(e) => setStateFilter(e.target.value)}
      >
        {['all', ...states].map(state => <option key={state} value={state}>{state}</option>)}
      </select>
      <h4>Scolorship Type</h4>
      <select 
        style={selectStyle} 
        onChange={(e) => setScholarshipTypeFilter(e.target.value)}
      >
        {['all', ...scholarshipTypes].map(type => <option key={type} value={type}>{type}</option>)}
      </select>
      <h4>Application Status</h4>
      <select 
        style={selectStyle} 
        onChange={(e) => setApplicationStatusFilter(e.target.value)}
      >
        {['all', ...applicationStatus].map(status => <option key={status} value={status}>{status}</option>)}
      </select>
      <h4>Education </h4>
      <select 
        style={selectStyle} 
        onChange={(e) => setEducationalLevelFilter(e.target.value)}
      >
        {['all', ...educationalLevels].map(level => <option key={level} value={level}>{level}</option>)}
      </select>
    </div>
  );
};

export default Filters;
