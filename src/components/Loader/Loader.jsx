import { DNA } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#0F0F0FB3] z-50">
      <DNA
        visible={true}
        height="100"
        width="100"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};

export default Loader;
