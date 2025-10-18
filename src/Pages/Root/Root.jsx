import Navbar from '../../components/Header/Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../../components/Footer/Footer';
import Loader from '../../components/Loader/Loader';
import { ToastContainer } from 'react-toastify';

const Root = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);

  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <Navbar></Navbar>
        <main className='max-w-[1240px] w-full mx-auto px-2 lg:px-10 flex-1 my-4'>
          {isNavigating ? <Loader></Loader> : <Outlet></Outlet>}
        </main>
        <Footer></Footer>
      </div>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default Root;