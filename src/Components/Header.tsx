import logo from "../assets/n.png";
import { PhoneIcon, ClockIcon } from "@heroicons/react/20/solid";
import toast from "react-hot-toast";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./auth/LoginButton";
import { useNavigate } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { getAllOpenHours } from "../api/openHours";
import { useQuery } from "react-query";
import { useTranslation } from "react-i18next";
import ChangeLanguageButton from "./ChangeLanguageButton";
import Modal from "./Modal/Modal";

const Header = () => {
  const { isAuthenticated } = useAuth0();
  const { user, logout } = useAuth0();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const classNames = (...classes: string[]) => {
    return classes.filter(Boolean).join(" ");
  };

  const { isLoading, data: openHours } = useQuery("openHours", () =>
    getAllOpenHours()
  );

  const handleClockIconCick = () => {
    if (!isLoading)
      return toast.custom((t) => (
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
                {openHours &&
                  openHours?.map((openHour) => (
                    <ul key={openHour.id}>
                      <li>
                        {openHour.day} {openHour.openFrom}AM - {openHour.openTo}
                        PM
                      </li>
                    </ul>
                  ))}
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
      <header className="sticky top-0 z-50 flex bg-gray">
        <nav className="flex h-20 w-full items-center justify-between p-8">
          <div className="flex items-center">
            <img
              src={logo}
              alt="logo"
              className="h-16 w-20 cursor-pointer"
              onClick={() => navigate("/")}
            />
            <h1
              className="text-md hidden font-bold uppercase text-white hover:cursor-pointer md:block md:text-2xl"
              onClick={() => navigate("/")}
            >
              {t("title")}
            </h1>
          </div>
          <div className="flex items-center gap-4 hover:cursor-pointer">
            <PhoneIcon
              className="h-6 w-6 text-white"
              onClick={handlePhoneIconCick}
            />
            <ClockIcon
              className="h-6 w-6 text-white"
              onClick={handleClockIconCick}
            />
            <Modal title={t("book_now")}>y0</Modal>
            {!isAuthenticated && <LoginButton />}
            {isAuthenticated && (
              <Menu as="div" className="relative ml-3">
                <div>
                  <Menu.Button className="bg-gray-800 focus:ring-offset-gray-800 flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src={user?.picture}
                      alt={user?.picture}
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          onClick={() => navigate("/profile")}
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "text-gray-700 block px-4 py-2 text-sm"
                          )}
                        >
                          Your Profile
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "text-gray-700 block px-4 py-2 text-sm"
                          )}
                        >
                          Settings
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "text-gray-700 block px-4 py-2 text-sm"
                          )}
                          onClick={() => logout()}
                        >
                          Logout
                        </button>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            )}
            <ChangeLanguageButton />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
