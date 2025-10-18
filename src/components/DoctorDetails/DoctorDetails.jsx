import { useLoaderData, useParams } from 'react-router';
import DoctorDetailsCard from '../DoctorDetailsCard/DoctorDetailsCard';
import SectionHeader from '../SectionHeader/SectionHeader';

const DoctorDetails = () => {
  const doctorsData = useLoaderData();
  const { id } = useParams();

  const singleDoctor = doctorsData.find(doctor => doctor.id === id);

  return (
    <>
      <div className='bg-white py-12 mb-6 rounded-2xl'>
        <SectionHeader
          title={"Doctor’s Profile Details"}
          description={"Get to know your healthcare provider. This section highlights the doctor’s qualifications, medical expertise, professional background, and other key information to help you make informed choices about your care."}
        ></SectionHeader>
      </div>
      <DoctorDetailsCard singleDoctor={singleDoctor}></DoctorDetailsCard>
    </>
  );
};

export default DoctorDetails;