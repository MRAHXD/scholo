import { useState } from "react";
import Link from 'next/link';

const StatusChanger = ({ id, status, onStatusChange }) => {
  return (
    <div>
      <select
        value={status}
        onChange={(e) => onStatusChange(id, e.target.value)}
        style={{
          padding: '5px 10px',
          borderRadius: '5px',
          border: '1px solid lightgrey',
          backgroundColor: '#f9f9f9',
          fontSize: '14px',
          margin: '15px 0px',
        }}
      >
        <option value="Submitted">Submitted</option>
        <option value="Under Review">Under Review</option>
        <option value="Approved">Approved</option>
        <option value="Rejected">Rejected</option>
      </select>
    </div>
  );
};
const linkContainerStyle = {
    display: 'inline-block',
    marginTop: '0.5rem',
    backgroundColor: '#007BFF',
    color: '#FFF',
    borderRadius: '8px',
    padding: '8px',
    marginLeft: '46vw'
  };
const AdminPage = () => {
  const [applications, setApplications] = useState([
    {
      id: "1",
      name: "Pragati Scholarship",
      status: "Submitted",
      applicant: "Anita Sharma",
      date: "2022/09/23",
      scholarshipType: "Pragati Scheme",
      scholarshipAmount: "₹50,000 per annum",
      applicationDate: new Date().toString(),
      description: "Application for Pragati Scheme by Anita Sharma.",
    },
    {
      id: "2",
      name: "Central Sector Scheme of Scholarships",
      status: "Under Review",
      applicant: "Ravi Mehta",
      date: "2022/08/10",
      scholarshipType: "CSSS",
      scholarshipAmount: "₹1,00,000 per annum",
      applicationDate: new Date().toString(),
      description: "Application for CSSS by Ravi Mehta.",
    },
    {
      id: "3",
      name: "AICTE-Saksham Scholarship",
      status: "Submitted",
      applicant: "Hari Krishnan",
      date: "2022/09/01",
      scholarshipType: "AICTE-Saksham",
      scholarshipAmount: "₹30,000 per annum",
      applicationDate: new Date().toString(),
      description: "Application for AICTE-Saksham Scholarship by Hari Krishnan.",
    },
  ]);
  
  const handleStatusChange = (id, newStatus) => {
    setApplications((prev) =>
      prev.map((app) =>
        app.id === id ? { ...app, status: newStatus } : app
      )
    );
  };

  return (
    <div>
        <Link href="/" >  
            <div style={linkContainerStyle}>Home</div>  
          </Link> 
      <h1 style={{ textAlign: 'center', margin: '20px' }}>Admin Page</h1>
      {applications.map((app) => (
        <div 
          key={app.id} 
          style={{
            border: '1px solid #ccc',
            borderRadius: '10px',
            boxShadow: '2px 2px 10px #aaa',
            padding: '20px',
            margin: '10px',
            backgroundColor: app.status === "Approved" ? "lightgreen" : app.status === "Rejected" ? "tomato" : "#fff",
          }}
        >
          <h2>{app.name} - {app.scholarshipType}</h2>
          <p><b>Applicant:</b> {app.applicant}</p>
          <p><b>Application Date:</b> {app.date}</p>
          <p><b>Scholarship Amount:</b> {app.scholarshipAmount}</p>
          <p><b>Description:</b> {app.description}</p>
          <StatusChanger
            id={app.id}
            status={app.status}
            onStatusChange={handleStatusChange}
          />
        </div>
      ))}
    </div>
  );
};

export default AdminPage;
