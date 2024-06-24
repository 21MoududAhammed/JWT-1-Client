import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ServiceDetails() {
  const { id } = useParams();
  const [service, setService] = useState({});
  useEffect(() => {
    const fetchServiceDetails = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/services/${id}`
        );
        if (res.status === 200) {
          setService(res?.data);
          console.log(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchServiceDetails();
  }, []);

  return (
    <section className="flex justify-center">
      <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <img
          className="object-cover w-full h-64"
          src={`${service?.photo}`}
          alt="service"
        />
        <div className="p-6">
          <div>
            <h3 className='text-2xl font-serif font-semibold'>{service?.serviceName}</h3>
            <h5 className='text-xl'> Price:  {service?.price} TK</h5>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
             Details: {service?.details}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
