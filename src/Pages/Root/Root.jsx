import Navbar from '../../components/Header/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';

const Root = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar></Navbar>
      <main className='max-w-[1240px] w-full mx-auto px-2 lg:px-10 flex-1 my-4'>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Root;