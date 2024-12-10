import React from 'react';

const Filters = ({ setStateFilter, setScholarshipTypeFilter, setApplicationStatusFilter, setEducationalLevelFilter }) => {

  const selectStyle = {
    border: '1px solid #ddd',
    padding: '0.8em',
    marginTop: '1em',
    marginBottom: '1em',
    width: '100%',
    borderRadius: '5px',
    boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.1)',
    fontSize: '0.9em',
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
      <select 
        style={selectStyle} 
        id="state" 
        onChange={(e) => setStateFilter(e.target.value)}
      >
        <option value="all">All</option>
        <option value="Madhya Pradesh">Madhya Pradesh</option>
        <option value="Kerala">Kerala</option>
      </select>
      <select 
        style={selectStyle} 
        onChange={(e) => setScholarshipTypeFilter(e.target.value)}
      >
        <option>Scholarship Type</option>
      </select>
      <select 
        style={selectStyle} 
        onChange={(e) => setApplicationStatusFilter(e.target.value)}
      >
        <option>Application Status</option>
      </select>
      <select 
        style={selectStyle} 
        onChange={(e) => setEducationalLevelFilter(e.target.value)}
      >
        <option>Educational Level</option>
      </select>
    </div>
  );
};

export default Filters;
