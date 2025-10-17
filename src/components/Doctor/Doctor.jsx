

const Doctor = ({ doctor }) => {
  const { image, name, experience, Reg_no, education } = doctor;

  return (
    <div className="bg-base-100 shadow-sm p-5 rounded-2xl">
      <figure>
        <img
          className="rounded-2xl"
          src={image}
          alt="Shoes" />
      </figure>
      <div className="p-0 pt-4">
        <div className="flex gap-4 items-center mb-4">
          <span
            className="text-[#09982F] bg-[#09982F1A] border border-[#09982F33] px-4 py-1 rounded-full font-medium">
            <small>Available</small>
          </span>
          <span
            className="text-[#176AE5] bg-[#176AE51A] border border-[#176AE533] px-4 py-1 rounded-full font-medium capitalize">
            <small>{experience} Experience</small>
          </span>
        </div>

        <h3 className="text-2xl font-bold mb-3">{name}</h3>
        <p className="text-lg font-semibold text-[#0F0F0F99]">{education}</p>

        <div className="border-b border-dashed border-[#0F0F0F33] my-3"></div>

        <p className="text-lg font-semibold text-[#0F0F0FB3]">Reg no: {Reg_no}</p>
        <button className="btn w-full mt-4 rounded-full border-[#176AE5] text-[#176AE5] hover:bg-[#176AE5] hover:text-white">View Details</button>
      </div>
    </div>
  );
};

export default Doctor;