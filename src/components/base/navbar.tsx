import { FaRegUser } from "react-icons/fa";
import { GrMoon } from "react-icons/gr";
import { useNavigate } from "react-router";
import logo from "~/images/Jayh de Cuba-logo met boomembleem.png";

export default function Navbar() {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/my-profile");
  };

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <nav className="bg-white shadow rounded-full md:m-5">
      <div className="mx-auto p-2 sm:px-2 lg:px-4">
        <div
          id="header"
          className="flex justify-between items-center px-4 py-2.5 h-14 md:px-16 lg:px-24"
        >
          {/* LOGO */}
          <img
            onClick={navigateToHome}
            className="h-10 md:h-12 w-auto cursor-pointer"
            alt="Roamer logo"
            src={logo}
          />

          {/* MENU LINKS */}
          <ul className="hidden lg:flex gap-x-3">
            {["Over mij", "Ervaring"].map((text) => (
              <li
                key={text}
                className="hover:bg-slate-100 cursor-pointer rounded-xl p-2"
              >
                {text}
              </li>
            ))}
          </ul>

          {/* ICON BUTTONS */}
          <div id="signInAndOptions" className="flex gap-x-2">
            <button
              onClick={navigateToLogin}
              className="flex items-center justify-center gap-x-1.5 h-12 md:h-10 bg-slate-100 rounded-xl px-3 md:px-2.5 transition-all duration-300 ease-in-out"
            >
              <FaRegUser size={20} />
              <span className="hidden sm:block">Sign in</span>
            </button>

            <button className="flex items-center justify-center w-12 h-12 md:w-10 md:h-10 bg-slate-100 rounded-xl transition-all leading-none">
              <GrMoon size={20} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
