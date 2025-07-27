import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="about-section bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90 text-white py-16 flex items-center justify-center">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-purple-500">
          Md. Al Amin Islam
        </h2>

        {/* Navigation Links - Responsive */}

        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          <Link to="/contact">Contact</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/education">Education</Link>
          <Link to="/projects">Projects</Link>
        </nav>

        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            {
              icon: <FaFacebook />,
              link: "https://www.facebook.com/tarun.kaushik.3511041/",
            },
            {
              icon: <FaTwitter />,
              link: "https://twitter.com/CodingMaster6?s=09",
            },
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/tarun-kaushik-553b441a4",
            },
            {
              icon: <FaInstagram />,
              link: "https://www.instagram.com/coding_.master/",
            },
            {
              icon: <FaYoutube />,
              link: "https://www.youtube.com/codingmasteryt",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Al Amin Islam. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
