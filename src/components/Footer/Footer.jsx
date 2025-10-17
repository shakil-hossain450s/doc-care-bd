import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";
import facebookLogo from "../../assets/icons/facebook.png";
import twitterLogo from "../../assets/icons/twitter.png";
import linkedinLogo from "../../assets/icons/linkdin.png";
import youtubeLogo from "../../assets/icons/youtube.png";


const Footer = () => {
  const links = [
    { path: "/", pathName: "Home" },
    { path: "/bookings", pathName: "Bookings" },
    { path: "/blogs", pathName: "Blogs" },
    { path: "/contact", pathName: "Contact" }
  ];

  return (
    <footer className="footer sm:footer-horizontal footer-center bg-white mt-20 text-base-content py-24 gap-6">
      <Link to="/" className="text-xl flex items-center gap-2">
        <img src={logo} alt="Doc Care BD logo" />
        <h3 className="text-xl lg:text-2xl font-bold">DocCare BD</h3>
      </Link>
      <ul className="menu menu-horizontal px-1 pt-0">
        {
          links.map(link => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) => isActive && "border-b-2 rounded-b-none"}
              >{link.pathName}</NavLink>
            </li>
          ))
        }
      </ul>
      <div className="border-t border-[#0F0F0F33] max-w-[1240px] mx-auto w-2/3"></div>
      <div className="flex gap-6 items-center mt-8">
        <div>
          <a href="https://facebook.com" target="_blank">
            <img src={facebookLogo} alt="" />
          </a>
        </div>
        <div>
          <a href="https://twitter.com" target="_blank">
            <img src={twitterLogo} alt="" />
          </a>
        </div>
        <div>
          <a href="https://linkedin.com" target="_blank">
            <img src={linkedinLogo} alt="" />
          </a>
        </div>
        <div>
          <a href="https://youtube.com" target="_blank" >
            <img src={youtubeLogo} alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;