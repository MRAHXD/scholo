// components/Footer.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";


export default function Footer() {
    return (
        <footer className="p-5 bg-blue-200 block md:flex justify-between items-center">
            <div>
                <h2 className="font-bold text-lg mb-2 text-black">Quick Links</h2>
                <nav className="space-y-1">
                    <h3 className="text-black">Home</h3>
                    <h3 className="text-black">About</h3>
                    <h3 className="text-black">Contact</h3>
                </nav>
            </div>
            <div className="mt-5 md:mt-0">
                <h2 className="font-bold text-lg mb-4 text-black">Contact Information</h2>
                <p className="text-black">Attapur, Hyderabad </p>
                <p className="text-black">Email: sahebabdullah7860@gmail.com</p>
                <p className="text-black">Phone: +91 7337341443</p>
            </div>
            <div className="mt-5 md:mt-0">
                <h2 className="font-bold text-lg mb-2 text-black">Follow Us</h2>
                <div className="flex space-x-2">
    <FontAwesomeIcon icon={faTwitter} color="blue" />
    <FontAwesomeIcon icon={faInstagram} color="red" />
</div>

            </div>
            <div className="mt-5 md:mt-0 text-center md:text-right">
                <p className="text-black">© 2024 Scholarship Portal. All rights reserved.</p>
            </div>
        </footer>
    )
}
