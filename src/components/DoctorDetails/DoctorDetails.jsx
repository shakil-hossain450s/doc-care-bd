import { useLoaderData, useParams } from 'react-router';

const DoctorDetails = () => {
  const doctorsData = useLoaderData();
  const { id } = useParams();

  const singleDoctor = doctorsData.find(doctor => doctor.id === id);

  const { image, name, designation, hospital, details, Reg_no, education, availability, fee } = singleDoctor;

  return (
    <>
      <div className="card card-side bg-base-100 shadow-sm p-8 rounded-2xl">
        <figure className='w-3/12 rounded-2xl'>
          <img className=''
            src={image}
            alt="Movie" />
        </figure>
        <div className="card-body w-9/12">

          <h3 className="text-2xl font-bold mb-3">{name}</h3>
          <p className="text-lg font-semibold text-[#16141499]">{education}</p>
          <p className="text-lg font-semibold text-[#0F0F0F99]">{designation}</p>
          <p className="text-lg font-semibold text-[#1d1b1b99]">
            <span className='text-[#111010] font-bold'>Specialties:</span>
            {details}
          </p>
          <div className="text-lg font-semibold text-[#0F0F0F99] my-6">
            <p>Working at</p>
            <p className='text-black mt-2'>{hospital}</p>
          </div>

          <div className="border-b border-dashed border-[#0F0F0F33] my-2"></div>
          <p className="text-lg font-semibold text-[#0F0F0FB3]">Reg no: {Reg_no}</p>
          <div className="border-b border-dashed border-[#0F0F0F33] my-2"></div>

          <div>
            <p className=''>Availability:
              {
                availability.map(item => (
                  <span
                    className="ml-4 text-[#FFA000] bg-[#FFA0001A] border border-[#FFA00033] px-4 py-1 rounded-full font-medium">
                    <small>{item}</small>
                  </span>
                ))
              }
            </p>
          </div>

          <div className='mt-4 font-bold'>
            <p>Consultation Fee:
              <span className='text-[#14141480] space-x-2 ml-2'>
                <span className='text-[#176AE5]'>Taka: {fee}</span>
                (incl. Vat)
                <span className='text-[#176AE5] ml-2'>Per consultation</span>
              </span>
            </p>

          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorDetails;