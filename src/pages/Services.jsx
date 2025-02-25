import { FaHeartbeat, FaStethoscope, FaUserNurse, FaAmbulance, FaPills, FaHospital } from "react-icons/fa";

function Services() {
  return (
    <div className="container mx-auto p-6 text-center">
      <h1 className="text-4xl font-bold text-blue-700">Our Services</h1>
      <p className="text-lg mt-4 text-gray-600">We provide top-notch medical services to ensure the best healthcare for our patients.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {/* Service Cards */}
        <div className="p-6 shadow-lg rounded-lg bg-white">
          <FaHeartbeat className="text-red-500 text-5xl mx-auto" />
          <h2 className="text-xl font-semibold mt-4">Cardiology</h2>
          <p className="text-gray-600 mt-2">Advanced heart care and diagnostics.</p>
        </div>

        <div className="p-6 shadow-lg rounded-lg bg-white">
          <FaStethoscope className="text-blue-500 text-5xl mx-auto" />
          <h2 className="text-xl font-semibold mt-4">General Checkup</h2>
          <p className="text-gray-600 mt-2">Routine medical checkups and health assessments.</p>
        </div>

        <div className="p-6 shadow-lg rounded-lg bg-white">
          <FaUserNurse className="text-green-500 text-5xl mx-auto" />
          <h2 className="text-xl font-semibold mt-4">Nursing Care</h2>
          <p className="text-gray-600 mt-2">Professional nursing and patient support.</p>
        </div>

        <div className="p-6 shadow-lg rounded-lg bg-white">
          <FaAmbulance className="text-yellow-500 text-5xl mx-auto" />
          <h2 className="text-xl font-semibold mt-4">Emergency Services</h2>
          <p className="text-gray-600 mt-2">24/7 emergency response and ambulance services.</p>
        </div>

        <div className="p-6 shadow-lg rounded-lg bg-white">
          <FaPills className="text-purple-500 text-5xl mx-auto" />
          <h2 className="text-xl font-semibold mt-4">Pharmacy</h2>
          <p className="text-gray-600 mt-2">In-house pharmacy with all essential medicines.</p>
        </div>

        <div className="p-6 shadow-lg rounded-lg bg-white">
          <FaHospital className="text-indigo-500 text-5xl mx-auto" />
          <h2 className="text-xl font-semibold mt-4">Inpatient Care</h2>
          <p className="text-gray-600 mt-2">Comfortable inpatient facilities with top care.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
