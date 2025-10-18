import { Link, useLoaderData } from "react-router";
import { getDoctorsFromStorage, removeFromStorage } from "../../utilities/storage";
import { useEffect } from "react";
import { useState } from "react";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import AppointCard from "../../components/AppointCard/AppointCard";
import { toast } from "react-toastify";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import AppointmentRechart from "../../components/AppoinmentRechart/AppointmentRechart";

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
    toast.success("Appoinment Cancelled Successfully", {autoClose: 2000});
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
          <div className="space-y-8">
            <SectionHeader
              title={"My Today Appointments"}
              description={"Our platform connects you with verified, experienced doctors across various specialties — all at your convenience."}
            ></SectionHeader>
            <div className="bg-white p-10 shadow-sm rounded-2xl">
              <AppointmentRechart appointedDoctors={appointedDoctors}></AppointmentRechart>
            </div>
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
          </div>

      }

    </div>
  );
};

export default Bookings;