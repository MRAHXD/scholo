// components/HeroSection.js

export default function HeroSection() {
    return (
        <section className="text-center p-10 bg-blue-200">
            <h1 className="text-2xl font-bold mb-2 text-blue-600">Empower Your Future with Scholarships</h1>
            <h2 className="text-xl mb-4 text-blue-600">Access opportunities to fund your education effortlessly</h2>
            <div>
                <button className="mr-2 px-5 py-2 bg-blue-500 text-white rounded">Get Started</button>
                <button className="px-5 py-2 border-blue-500 border-2 text-blue-500 rounded">Learn More</button>
            </div>
        </section>
    )
}
