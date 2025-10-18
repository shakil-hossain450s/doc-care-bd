import { Link, useLoaderData, useNavigate, useParams } from 'react-router';
import DoctorDetailsCard from '../DoctorDetailsCard/DoctorDetailsCard';
import SectionHeader from '../SectionHeader/SectionHeader';
import { MessageSquareWarning } from 'lucide-react';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import { addDoctorsToStorage } from '../../utilities/storage';
import { toast } from 'react-toastify';

const DoctorDetails = () => {
  const navigate = useNavigate();
  const doctorsData = useLoaderData();
  const { id } = useParams();

  const singleDoctor = doctorsData.find(doctor => doctor.id === id);

  const handleAppointmentBook = (id, doctorName) => {
    const added = addDoctorsToStorage('doctors', id);

    if (added) {
      toast.success(`Appointment scheduled with ${doctorName} successfully`, { autoClose: 2000 });
      navigate("/bookings");
    } else {
      toast.error("Appointment allready scheduled for today", { autoClose: 2000 });

    }

  }

  const date = new Date();
  const dayName = date.toLocaleDateString("en-US", { weekday: "long" });

  const isAvailable = singleDoctor.availability.includes(dayName);

  return (
    <div className='space-y-10'>
      <div className='bg-white py-12 rounded-2xl shadow-sm'>
        <SectionHeader
          title={"Doctor’s Profile Details"}
          description={"Get to know your healthcare provider. This section highlights the doctor’s qualifications, medical expertise, professional background, and other key information to help you make informed choices about your care."}
        ></SectionHeader>
      </div>

      <DoctorDetailsCard singleDoctor={singleDoctor}></DoctorDetailsCard>

      <div className='bg-white p-6 rounded-2xl shadow-sm text-[#141414]'>
        <h2 className='text-2xl font-semibold text-center'>Book an Appoinment</h2>
        <div className="border-b border-dashed border-[#0F0F0F33] my-3"></div>
        <div className='flex justify-between'>
          <p className='font-bold'>Availability</p>

          {
            isAvailable ?
              <p className="text-[#09982F] bg-[#09982F1A] border border-[#09982F33] px-4 py-1 rounded-full font-medium">
                Doctor Available Today
              </p>
              :
              <p className="text-red-500 bg-red-100 border border-red-500 px-4 py-1 rounded-full font-medium">
                Doctor not Available
              </p>

          }

        </div>
        <div className="border-b border-[#0F0F0F33] my-3"></div>
        <p className="mb-8 flex gap-4 item-center text-[#FFA000] bg-[#FFA0001A] border border-[#FFA00033] px-4 py-1 rounded-full font-medium text-sm">
          <div className='flex justify-center items-center'>
            <MessageSquareWarning />
          </div>
          <span>
            Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.
          </span>
        </p>
        <div
          onClick={() => handleAppointmentBook(id, singleDoctor.name)}
        >
          <button
            disabled={!isAvailable}
            className={`btn rounded-full px-8 w-full ${isAvailable ?
              "bg-[#176AE5] border-none text-white " :
              "bg-gray-400 cursor-not-allowed"
              }`}>
            Book an Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;