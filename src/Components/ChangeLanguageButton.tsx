import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";

const ChangeLanguageButton = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  
  const classNames = (...classes: string[]) => {
    return classes.filter(Boolean).join(" ");
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="text-gray-900 inline-flex w-full justify-center gap-x-1.5 rounded-lg bg-gray px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray hover:bg-gray">
          {i18n.language === "en" ? (
            <ReactCountryFlag
              countryCode="US"
              style={{
                fontSize: "2em",
                lineHeight: "2em",
              }}
            />
          ) : (
            <ReactCountryFlag
              countryCode="TH"
              style={{
                fontSize: "2em",
                lineHeight: "2em",
              }}
            />
          )}
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-auto origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  type="button"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  <ReactCountryFlag
                    countryCode="US"
                    onClick={() => changeLanguage("en")}
                  />
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  type="button"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  <ReactCountryFlag
                    countryCode="TH"
                    onClick={() => changeLanguage("th")}
                  />
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default ChangeLanguageButton;
