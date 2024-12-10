// components/HeroSection.js
import Link from 'next/link';

export default function HeroSection() {
    return (
        <section className="text-center p-10 bg-blue-200 h-80 flex flex-col items-center justify-items-center">
            <div style={{marginTop:'40px'}}>
            <h1 className="text-2xl font-bold mb-2 text-blue-600 mt-100px">Empower Your Future with Scholarships</h1>
            <h2 className="text-xl mb-4 text-blue-600">Access opportunities to fund your education effortlessly</h2>
            </div>
            <div style={{marginTop:'20px'}}>
                <Link href="/Signup" className='h-10' legacyBehavior>
                    <a className="mr-2 px-5 py-2 bg-blue-500 text-white rounded ">Get Started</a>
                </Link>

                <button className="px-5 py-2 border-blue-500 border-2 text-blue-500 rounded h-10 ">Learn More</button>
            </div>
        </section>
    )
}
