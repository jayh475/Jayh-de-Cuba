import CustomButton from "~/components/common/customButton";
import { FaRegUser } from "react-icons/fa";
import { GrMoon } from "react-icons/gr";
import { useLocation, useNavigate } from "react-router";
import logo from "~/images/jayh-navbar.png";

export default function Navbar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  const navigateToLogin = () => {
    navigate("/my-profile");
  };

  return (
    <nav aria-label="Hoofdnavigatie" className={isHome ? "mx-auto mt-6 w-[calc(100%-2rem)] max-w-[1200px] rounded-[2rem] border border-[#e2d8cd] bg-[#faf5ed] md:w-[calc(100%-5rem)] md:rounded-full" : "bg-white shadow rounded-full md:m-5"}>
      <div className="mx-auto p-2 sm:px-2 lg:px-4">
        <div
          id="header"
          className={`grid grid-cols-[1fr_auto] items-center gap-x-3 px-2 sm:grid-cols-[1fr_auto_1fr] md:px-4 ${isHome ? "min-h-[64px] gap-y-2 py-2 sm:min-h-[80px] sm:py-1.5" : "gap-y-1 py-1.5"}`}
        >
          <a href="/" className="justify-self-start">
            <img className={`h-10 w-auto ${isHome ? "sm:h-14" : "sm:h-12"}`} alt="Jayh de Cuba" src={logo} />
          </a>

          <ul className={`col-span-2 row-start-2 flex justify-center gap-4 sm:col-span-1 sm:row-start-auto md:gap-7 ${isHome ? "text-base font-medium text-[#272b24]" : "text-sm"}`}>
            <li><a className="hover:underline" href={isHome ? "#over-mij" : "/#over-mij"}>Over mij</a></li>
            <li><a className="hover:underline" href={isHome ? "#ervaring" : "/#ervaring"}>Ervaring</a></li>
            {isHome && <li><a className="hover:underline" href="#xseeds-roots">Project</a></li>}
          </ul>

          {/* ICON BUTTONS */}
          <div id="signInAndOptions" className="col-start-2 row-start-1 flex justify-end gap-x-2 sm:col-start-3">
            {!isHome && (
              <>
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

              </>
            )}

            <CustomButton
              href={isHome ? "#contact" : "/#contact"}
              placeholder="Contact"
              tailwindWidth={isHome ? "w-auto sm:min-w-[108px]" : "w-auto"}
              fixedHeight={isHome ? "h-12" : "h-11"}
              className={isHome ? "!px-4 font-semibold" : "!px-4"}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
