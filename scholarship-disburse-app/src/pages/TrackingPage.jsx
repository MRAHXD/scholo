import { useState } from "react";
import Link from 'next/link';

const StatusText = ({ status }) => {
    const colorStatus = { 
        Submitted: "lightblue",
        "Under Review": "yellow",
        Approved: "lightgreen",
        Rejected: "tomato",
    };
    return (
        <span
            style={{
                padding: "4px 8px",
                backgroundColor: colorStatus[status],
                borderRadius: "5px",
                fontWeight: "600",
            }}
        >
            {status}
        </span>
    );
};

const ProgressBar = ({ status }) => {
    const progressStatus = {
        Submitted: 25,
        "Under Review": 50,
        Approved: 100,
        Rejected: 0,
    };
    return (
        <div
            style={{ 
                width: "100%", 
                height: "5px", 
                backgroundColor: "silver",
                borderRadius: "5px",
            }}
        >
            <div
                style={{ 
                    width: `${progressStatus[status]}%`, 
                    height: "5px", 
                    backgroundColor: "green", 
                    borderRadius: "5px",
                }}
            ></div>
        </div>
    );
};

const TrackingPage = () => {
    const [applications] = useState([
        { id: '1', 
          name: 'Application 1', 
          status: 'Submitted', 
          applicationDate: new Date().toString(), 
          description: 'The Future Scholars National Scholarship aims to empower bright students who wish to pursue higher education in the fields of Science, Technology, Engineering, and Mathematics (STEM). This prestigious scholarship is available for students from all over the country, offering a one-time financial award of ₹50,000 for undergraduate or postgraduate courses. The scholarship is based on merit, with additional consideration given to students from underprivileged backgrounds. Students are required to submit academic transcripts, a personal statement, and a recommendation letter from a teacher.' 
        },
        { id: '2', 
          name: 'Application 2', 
          status: 'Under Review', 
          applicationDate: new Date().toString(),
          description: 'The Tech Innovators State Scholarship is a state-level initiative that supports talented students aspiring to enter the world of technology and innovation. Open to residents of [State Name], the scholarship offers a grant of ₹30,000 per year to students enrolled in computer science, engineering, or IT-related degree programs. Applicants must demonstrate exceptional problem-solving skills through a technical project submission or coding challenge. The scholarship is awarded based on both academic performance and technical aptitude.' 
        },
        { id: '3', 
          name: 'Application 3', 
          status: 'Approved', 
          applicationDate: new Date().toString(),
          description: 'The Global Excellence Merit Scholarship is an international program designed to recognize students who excel academically and demonstrate strong leadership qualities. The scholarship covers full tuition fees for up to 4 years of undergraduate study in any recognized university worldwide. Applicants must have a GPA of 3.8 or above and provide proof of leadership experience through extracurricular activities or community service. This scholarship encourages students to continue their education abroad and make a positive impact globally.' 
        },
        { id: '4', 
          name: 'Application 4', 
          status: 'Rejected', 
          applicationDate: new Date().toString(), 
          description: 'The Women in STEM Empowerment Scholarship is an initiative to support female students pursuing studies in Science, Technology, Engineering, and Mathematics (STEM) fields. This scholarship offers ₹20,000 annually to female students enrolled in undergraduate or postgraduate STEM programs. The scholarship aims to bridge the gender gap in these fields by providing financial support to women who show promise in STEM subjects. Applicants are required to submit a personal essay outlining their passion for STEM and how they plan to contribute to the field in the future.' 
        },
    ]);

    const linkContainerStyle = {
        display: 'inline-block',
        marginTop: '0.5rem',
        backgroundColor: '#007BFF',
        color: '#FFF',
        borderRadius: '8px',
        padding: '8px'
      };

    return (
        <div
            style={{
                minHeight: "100vh",
                padding: "40px",
                backgroundColor: "#f0f0f0",
                textAlign: "center",
            }}
        >
            <Link href="/" >  
            <div style={linkContainerStyle}>Home</div>  
          </Link>  
            <h1 style={{ fontWeight: "600", marginBottom: "40px" }}>
                Application Status
            </h1>
            {applications.map((app, i) => (
                <div
                    key={i}
                    style={{
                        border: "1px solid lightgray",
                        padding: "20px",
                        borderRadius: "5px",
                        boxShadow: "0px 0px 10px lightgray",
                        backgroundColor: "white",
                        marginBottom: "15px",
                        lineHeight: "2",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <span style={{ fontSize: "20px", fontWeight: "500" }}>
                            {app.name}
                        </span>
                        <StatusText status={app.status} />
                    </div>
                    <p>{app.description}</p>
                    <ProgressBar status={app.status} />
                    <span style={{ color: "gray", fontSize: "14px" }}>
                        Last updated: {new Date(app.applicationDate).toLocaleString()}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default TrackingPage;
