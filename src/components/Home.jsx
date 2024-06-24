import useAuth from "../../hooks/UseAuth";
import { useState, useEffect } from "react";
import ServiceCard from "./ServiceCard";

export default function Home() {
  const { isLoggedIn } = useAuth();

  const [services, setServices] = useState([]);

  // LOAD ALL SERVICES 
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/services`);
        if (res.status === 200) {
          const data = await res.json();
          setServices(data);
          // console.log(data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchServices();
  }, []);

  return (
    <div className="grid grid-cols-5 gap-2 mx-3">
      {services?.length > 0 &&
        services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
    </div>
  );
}
