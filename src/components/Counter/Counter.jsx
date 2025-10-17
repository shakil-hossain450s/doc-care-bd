import SectionHeader from '../SectionHeader/SectionHeader';
import totalDoctorsIcon from '../../assets/icons/total-doctors.png';
import reviewsIcon from '../../assets/icons/reviews.png';
import patientsIcon from '../../assets/icons/patients.png';
import stuffsIcon from '../../assets/icons/stuffs.png';
import CounterCard from '../CounterCard/CounterCard';

const Counter = () => {
  const cardInfo = [
    { id: 1, image: totalDoctorsIcon, counterInfo: 199, subTitle: "Total Doctors" },
    { id: 2, image: reviewsIcon, counterInfo: 467, subTitle: "Total Reviews" },
    { id: 3, image: patientsIcon, counterInfo: 1900, subTitle: "Patients" },
    { id: 4, image: stuffsIcon, counterInfo: 300, subTitle: "Total Stuffs" },
  ]
  return (
    <div>
      <SectionHeader
        title={"We Provide Best Medical Services"}
        description={"Our platform connects you with verified, experienced doctors across various specialties — all at your convenience."}
      ></SectionHeader>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {
          cardInfo.map(card => (
            <CounterCard key={card.id} card={card}></CounterCard>
          ))
        }
      </div>
    </div>
  );
};

export default Counter;