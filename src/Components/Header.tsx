import logo from "../assets/n.png";
import { PhoneIcon, ClockIcon } from "@heroicons/react/20/solid";

const Header = () => {
  return (
    <>
      <header className="relative top-0 flex bg-gray">
        <nav className="flex h-20 w-full items-center justify-between p-8">
          <div className="flex items-center">
            <img src={logo} alt="logo" className="h-16 w-20" />
            <h1 className="text-md font-bold uppercase text-white md:text-2xl">
              Non Barber
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <PhoneIcon className="h-6 w-6 text-white" />
            <ClockIcon className="h-6 w-6 text-white" />
            <h4 className="uppercase text-white underline ">Book Now</h4>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
