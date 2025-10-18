const AppointCard = ({ singleDoctor, handleCancelAppointment }) => {
  const { id, name, details, Reg_no, education, fee } = singleDoctor;

  return (
    <div className='bg-white p-6 rounded-2xl shadow-sm text-[#141414]'>
      <div className="flex justify-between items-center text-[#0f0f0f99]">
        <div className="space-y-3">
          <h4 className='text-lg font-bold text-black' >{name}</h4>
          <p className="">
            <span>{education}</span>
            <span> - </span>
            <span>{details}</span>
          </p>
        </div>
        <p>Appointment Fee : {fee} Taka + Vat</p>
      </div>

      <div className="border-b border-dashed border-[#0F0F0F33] my-4"></div>


      <button
        onClick={() => handleCancelAppointment(id)}
        className="btn bg-transparent outline-none border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white w-full">
        Cancel Appointment
      </button>


    </div>
  );
};

export default AppointCard;