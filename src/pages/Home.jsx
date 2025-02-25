import { Link } from "react-router-dom";
import { FaUserMd, FaAmbulance, FaHeartbeat, FaHospital } from "react-icons/fa";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-700 text-white text-center py-16 px-6">
        <h1 className="text-5xl font-bold">Welcome to Sidhbali Hospital</h1>
        <p className="text-lg mt-4">Providing world-class healthcare with expert doctors and modern facilities.</p>
        <Link to="/contact">
          <button className="mt-6 bg-yellow-400 text-blue-900 px-6 py-2 rounded-md font-bold hover:bg-yellow-500 transition">
            Book an Appointment
          </button>
        </Link>
      </section>

      {/* Services Section */}
      <section className="container mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold text-center text-blue-700">Our Services</h2>
        <p className="text-center text-lg mt-4">We offer top-quality healthcare services for all your needs.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Service Cards */}
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <FaUserMd className="text-blue-600 text-5xl mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Expert Doctors</h3>
            <p className="text-gray-600">Highly experienced doctors across various specialties.</p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <FaHospital className="text-blue-600 text-5xl mx-auto" />
            <h3 className="text-xl font-semibold mt-4">24/7 Emergency</h3>
            <p className="text-gray-600">Round-the-clock emergency care for urgent medical needs.</p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <FaHeartbeat className="text-blue-600 text-5xl mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Heart Care</h3>
            <p className="text-gray-600">Advanced cardiology treatments for heart-related conditions.</p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <FaAmbulance className="text-blue-600 text-5xl mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Ambulance Service</h3>
            <p className="text-gray-600">Fast and reliable ambulance service available 24/7.</p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-blue-700 text-white text-center py-12 px-6">
        <h2 className="text-3xl font-bold">Need Medical Assistance?</h2>
        <p className="mt-2 text-lg">Call us now or book an appointment online.</p>
        <Link to="/contact">
          <button className="mt-4 bg-yellow-400 text-blue-900 px-6 py-2 rounded-md font-bold hover:bg-yellow-500 transition">
            Contact Us
          </button>
        </Link>
      </section>
    </div>
  );
}

export default Home;
