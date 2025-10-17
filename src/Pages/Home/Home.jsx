import { Suspense } from "react";
import Doctors from "../../components/Doctors/Doctors";
import Banner from "../../components/Header/Banner/Banner";
import Loader from "../../components/Loader/Loader";

const fetchDoctors = async () => {
  const res = await fetch("./doctors.json");
  return res.json();
}

const Home = () => {
  const doctorsPromise = fetchDoctors();

  return (
    <div>
      <Banner></Banner>
      <Suspense fallback={<Loader />}>
        <Doctors doctorsPromise={doctorsPromise}></Doctors>
      </Suspense>
    </div>
  );
};

export default Home;