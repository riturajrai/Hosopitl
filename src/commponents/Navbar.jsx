import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaPhoneAlt, FaUserMd, FaHome, FaInfoCircle } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-700 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold flex items-center">
          🏥 Sidhbali Hospital
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/" className="hover:text-yellow-300 transition duration-300 flex items-center">
              <FaHome className="mr-1" /> Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-yellow-300 transition duration-300 flex items-center">
              <FaInfoCircle className="mr-1" /> About
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-yellow-300 transition duration-300 flex items-center">
              <FaUserMd className="mr-1" /> Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-300 transition duration-300 flex items-center">
              <FaPhoneAlt className="mr-1" /> Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-3xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-blue-800 text-white space-y-4 p-4 text-center">
          <li>
            <Link to="/" className="flex items-center justify-center" onClick={() => setIsOpen(false)}>
              <FaHome className="mr-2" /> Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="flex items-center justify-center" onClick={() => setIsOpen(false)}>
              <FaInfoCircle className="mr-2" /> About
            </Link>
          </li>
          <li>
            <Link to="/services" className="flex items-center justify-center" onClick={() => setIsOpen(false)}>
              <FaUserMd className="mr-2" /> Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="flex items-center justify-center" onClick={() => setIsOpen(false)}>
              <FaPhoneAlt className="mr-2" /> Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
