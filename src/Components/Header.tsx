import logo from "../assets/n.png";
import { PhoneIcon, ClockIcon } from "@heroicons/react/20/solid";
import toast from "react-hot-toast";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./auth/LoginButton";
import LogoutButton from "./auth/LogoutButton";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { isAuthenticated } = useAuth0();
  const { user } = useAuth0();
  const navigate = useNavigate();
  const handlePhoneIconCick = () => {
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } pointer-events-auto flex w-full max-w-md rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5`}
      >
        <div className="w-0 flex-1 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <img
                className="h-12 w-12 rounded-full"
                src="https://shavehtml.every-tuesday.com/assets/images/toast/phone-guy.jpg"
                alt=""
              />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-gray-900 text-sm font-medium">
                Feel free to call us.
              </p>
              <p className="text-gray-500 mt-1 text-sm">303-303-3030</p>
            </div>
          </div>
        </div>
        <div className="border-gray-200 flex border-l">
          <button
            onClick={() => toast.remove(t.id)}
            className="flex w-full items-center justify-center rounded-none rounded-r-lg border border-transparent p-4 text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Close
          </button>
        </div>
      </div>
    ));
  };

  return (
    <>
      <header className="relative top-0 flex bg-gray">
        <nav className="flex h-20 w-full items-center justify-between p-8">
          <div className="flex items-center">
            <img src={logo} alt="logo" className="h-16 w-20" />
            <h1
              className="text-md font-bold uppercase text-white hover:cursor-pointer md:text-2xl"
              onClick={() => navigate("/")}
            >
              Non Barber
            </h1>
          </div>
          <div className="flex items-center gap-4 hover:cursor-pointer">
            <PhoneIcon
              className="h-6 w-6 text-white"
              onClick={handlePhoneIconCick}
            />
            <ClockIcon className="h-6 w-6 text-white" />
            <h4 className="hidden uppercase text-white underline md:block">
              Book Now
            </h4>
            {!isAuthenticated && <LoginButton />}
            {isAuthenticated && (
              <>
                <LogoutButton />
                <span className="text-white">{user?.email}</span>
              </>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
