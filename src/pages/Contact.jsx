import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

function Contact() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Contact Us</h2>
      
      {/* Contact Details */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">Get in Touch</h3>
          <p className="text-gray-700 mb-4">Feel free to reach out to us for any queries or assistance.</p>
          <ul className="space-y-3 text-gray-800">
            <li className="flex items-center">
              <FaMapMarkerAlt className="mr-2 text-blue-600" /> 123 Main Street, Bhopal, India
            </li>
            <li className="flex items-center">
              <FaPhoneAlt className="mr-2 text-blue-600" /> +91 98765 43210
            </li>
            <li className="flex items-center">
              <FaEnvelope className="mr-2 text-blue-600" /> contact@sidhbalihospital.com
            </li>
          </ul>
        </div>

        {/* Google Map Embed */}
        <div className="w-full">
          <iframe
            title="Hospital Location"
            className="w-full h-64 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.901940857732!2d90.37739251538507!3d23.75088389459243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30b2bce7e725d935%3A0xa92d2d07e14bb51c!2sDhaka%20Medical%20College!5e0!3m2!1sen!2sbd!4v1630970000648!5m2!1sen!2sbd"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
        <h3 className="text-xl font-semibold text-blue-800 mb-4">Send Us a Message</h3>
        <form className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
            />
          </div>
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
          ></textarea>
          <button className="w-full bg-blue-700 text-white p-3 rounded-lg font-semibold hover:bg-blue-800 transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
