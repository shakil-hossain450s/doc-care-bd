const PrimaryButton = ({ btnText, className = ""}) => {

  return (
    <button
      className={`btn rounded-full px-8 ${className} bg-[#176AE5] border-none text-white `}>
      {btnText}
    </button>
  );
};

export default PrimaryButton;