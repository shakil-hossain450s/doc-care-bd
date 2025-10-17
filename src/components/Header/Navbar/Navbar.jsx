import { Link, NavLink } from "react-router";
import logo from "../../../assets/logo.png";
import PrimaryButton from "../../PrimaryButton/PrimaryButton";

const Navbar = () => {
  const links = [
    { path: "/", pathName: "Home" },
    { path: "/bookings", pathName: "Bookings" },
    { path: "/blogs", pathName: "Blogs" },
    { path: "/contact", pathName: "Contact" }
  ];
  return (
    <div className=' bg-base-100 shadow-sm '>
      <div className="navbar max-w-[1240px] w-full mx-auto px-2 lg:px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {
                links.map(link => (
                  <li key={link.path}>
                    <NavLink to={link.path}>{link.pathName}..</NavLink>
                  </li>
                ))
              }
            </ul>
          </div>
          <Link to="/" className="text-xl flex items-center gap-2">
            <img src={logo} alt="Doc Care BD logo" />
            <h3 className="text-2xl font-bold">DocCare BD</h3>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {
                links.map(link => (
                  <li key={link.path}>
                    <NavLink 
                    to={link.path}
                    className={({isActive}) => isActive && "border-b-2 rounded-b-none"}
                    >{link.pathName}</NavLink>
                  </li>
                ))
              }
          </ul>
        </div>
        <div className="navbar-end">
          <PrimaryButton btnText={"Emergency"}></PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;