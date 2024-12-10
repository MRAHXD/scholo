// components/Features.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';


export default function Features() {
    const features = [
        { title: 'Streamlined Scholarship Application', description: 'Apply for scholarships effortlessly with our intuitive step-by-step process. Say goodbye to confusion and incomplete applications!.' } ,
        { title: 'Real-Time Application Tracking', description: 'Track your scholarship application status in real-time. Stay informed about every step of the process!.' },
        { title: 'Comprehensive Administrative Dashboards', description: 'Empower administrators with advanced tools to verify, approve, and manage scholarships seamlessly.' },
        { title: 'Financial Insights and Transparency', description: 'Transparent financial insights to manage scholarships effectively and ensure every student gets the support they deserve.' }
    ];
    
    const featureComponents = features.map((feature, index) => 
        <div key={index}>
            <FontAwesomeIcon icon={faStar} className=" h-5 w-5"/>
            <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
            <p>{feature.description}</p>
        </div>)

    return (
        <section className="p-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {featureComponents}
        </section>
    )
}
