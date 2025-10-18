import { Link, useLoaderData } from "react-router";
import { getDoctorsFromStorage, removeFromStorage } from "../../utilities/storage";
import { useEffect } from "react";
import { useState } from "react";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import AppointCard from "../../components/AppointCard/AppointCard";
import { toast } from "react-toastify";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";

const Bookings = () => {
  const [appointedDoctors, setAppointedDoctors] = useState([]);
  const doctorsData = useLoaderData();


  useEffect(() => {
    const getStoredIds = getDoctorsFromStorage("doctors");
    const singleDoctors = doctorsData.filter(doctor => getStoredIds.includes(doctor.id));
    setAppointedDoctors(...appointedDoctors, singleDoctors);
  }, []);

  const handleCancelAppointment = (id) => {
    const remainigAppointment = appointedDoctors.filter(doctor => doctor.id !== id);
    setAppointedDoctors(remainigAppointment);
    removeFromStorage("doctors", id);
    toast.success("Appoinment Cancelled Successfully");
  }

  return (
    <div>


      {
        appointedDoctors.length === 0 ?
          <>
            <SectionHeader
              title={"You Does not have any appointment yet"}
              description={"Our platform connects you with verified, experienced doctors across various specialties — all at your convenience."}
            ></SectionHeader>
            <Link to="/" className="flex justify-center w-full">
              <button className="btn bg-[#176AE5] px-8 text-white">Book an Appointment</button>
            </Link>
          </> :
          <>
            <SectionHeader
              title={"My Today Appointments"}
              description={"Our platform connects you with verified, experienced doctors across various specialties — all at your convenience."}
            ></SectionHeader>
            <div className="flex flex-col gap-6">
              {
                appointedDoctors.map(singleDoctor => (
                  <AppointCard
                    key={singleDoctor.id}
                    singleDoctor={singleDoctor}
                    handleCancelAppointment={handleCancelAppointment}
                  ></AppointCard>
                ))
              }
            </div>
          </>

      }

    </div>
  );
};

export default Bookings;