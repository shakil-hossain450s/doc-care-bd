import { use, useEffect, useState } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import Doctor from "../Doctor/Doctor";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const Doctors = ({ doctorsPromise }) => {
  const doctorsData = use(doctorsPromise);
  const [showAll, setShowAll] = useState(false);
  const [visibleDoctors, setVisibleDoctors] = useState([]);

  useEffect(() => {
    if (doctorsData && doctorsData.length > 0) {
      setVisibleDoctors(showAll ? doctorsData : doctorsData.slice(0, 6));
    }
  }, [doctorsData, showAll])


  return (
    <div className='my-20'>
      <SectionHeader
        title={"Our Best Doctors"}
        description={"Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust."}
      ></SectionHeader>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          visibleDoctors.map(doctor => (
            <Doctor key={doctor.id} doctor={doctor}></Doctor>
          ))
        }
      </div>

      <div onClick={() => setShowAll(true)} className={`flex justify-center mt-10 ${showAll && 'hidden'}`}>
        <PrimaryButton btnText={!showAll && "View All Doctors"}></PrimaryButton>
      </div>
    </div>
  );
};

export default Doctors;