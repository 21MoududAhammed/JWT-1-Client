import { Link } from "react-router-dom";

export default function ServiceCard({ service }) {
  return (
    <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <div className="px-4 py-2">
        <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">
          {service.serviceName}
        </h1>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          {service.details}
        </p>
      </div>
      <img
        className="object-cover w-full h-48 mt-2"
        src={service.photo}
        alt="thumb"
      />
      <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
        <h1 className="text-lg font-bold text-white">${service.price}</h1>
        <Link
          to={`/services/${service._id}`}
          className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
        >
          Details
        </Link>
      </div>
    </div>
  );
}
