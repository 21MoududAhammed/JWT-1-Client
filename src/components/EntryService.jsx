import { useState } from "react";

export default function EntryService() {
  const [service, setService] = useState({
    serviceName: "",
    photo: "",
    details: "",
    price: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/services`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(service),
      });
      if (res.status === 201) {
        const data = await res.json();
        console.log(data);
        alert("Inserted");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
      <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
        Post A Service
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="serviceName"
            >
              Service Name
            </label>
            <input
              id="serviceName"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              value={service.serviceName}
              onChange={(e) =>
                setService({ ...service, serviceName: e.target.value })
              }
            />
          </div>
          <div>
            <label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="details"
            >
              Details
            </label>
            <input
              id="details"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              value={service.details}
              onChange={(e) =>
                setService({ ...service, details: e.target.value })
              }
            />
          </div>
          <div>
            <label className="text-gray-700 dark:text-gray-200" htmlFor="price">
              Price
            </label>
            <input
              id="price"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              value={service.price}
              onChange={(e) =>
                setService({ ...service, price: e.target.value })
              }
            />
          </div>
          <div>
            <label className="text-gray-700 dark:text-gray-200" htmlFor="photo">
              Photo
            </label>
            <input
              id="photo"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              value={service.photo}
              onChange={(e) =>
                setService({ ...service, photo: e.target.value })
              }
            />
          </div>
        </div>
        <div className="flex justify-end mt-6">
          <input
            className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </section>
  );
}
