import { FaHospital, FaHeartbeat, FaEye } from "react-icons/fa";

function About() {
  return (
    <div className="container mx-auto p-6 text-center max-w-4xl">
      {/* Title */}
      <h1 className="text-4xl font-bold text-blue-700 flex justify-center items-center gap-2">
        <FaHospital /> About Sidhbali Hospital
      </h1>
      <p className="text-lg mt-4 text-gray-700">
        Sidhbali Hospital has been providing exceptional healthcare services for over 20 years,
        ensuring the well-being of our community with world-class medical facilities.
      </p>

      {/* Mission Section */}
      <div className="mt-8 p-6 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-700 flex items-center justify-center gap-2">
          <FaHeartbeat /> Our Mission
        </h2>
        <p className="mt-2 text-gray-700">
          To deliver high-quality, patient-centered healthcare with compassion, innovation,
          and integrity, ensuring a healthier future for all.
        </p>
      </div>

      {/* Vision Section */}
      <div className="mt-8 p-6 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-700 flex items-center justify-center gap-2">
          <FaEye /> Our Vision
        </h2>
        <p className="mt-2 text-gray-700">
          To be a leading healthcare provider recognized for excellence in patient care,
          research, and education, fostering a healthier world.
        </p>
      </div>
    </div>
  );
}

export default About;