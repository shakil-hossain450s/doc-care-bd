const PrimaryButton = ({ btnText, className = "" }) => {
  return (
    <button className={`btn bg-[#176AE5] border-none text-white rounded-full px-8 ${className}`}>
      {btnText}
    </button>
  );
};

export default PrimaryButton;