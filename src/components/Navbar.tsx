import {
  CodeIcon,
  HomeIcon,
  MailIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/outline";
import { NavLink } from "components";
import { useTheme } from "context";
import Image from "next/image";
import Logo from "public/logoSmall.png";

const navigation = [
  { name: "Home", href: "/", Icon: HomeIcon },
  { name: "Contact", href: "/contact", Icon: MailIcon },
];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md lg:p-3">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center">
            <div className="flex-shrink-0 flex items-center space-x-4">
              <NavLink href="/">
                <a className="block h-8 w-8 relative">
                  <Image
                    src={Logo}
                    alt="website logo"
                    objectFit="contain"
                    layout="fill"
                    placeholder="blur"
                  />
                </a>
              </NavLink>
              <a
                href="https://github.com/bcarter97"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-900 rounded-md"
              >
                <CodeIcon
                  className="h-6 w-6 text inline align-bottom"
                  aria-hidden="true"
                />
                <span className="ml-2 hidden lg:inline">GitHub</span>
              </a>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="sm:block mr-6">
              <div className="flex space-x-4">
                {navigation.map(({ name, href, Icon }) => (
                  <NavLink
                    href={href}
                    key={name}
                    activeClassName="bg-green-500 hover:bg-green-500 dark:hover:bg-green-500 text-white rounded-md"
                  >
                    <a className="px-3 py-2 text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-900 rounded-md">
                      <Icon
                        className="h-6 w-6 text inline align-bottom"
                        aria-hidden="true"
                      />
                      <span className="ml-2 hidden lg:inline">{name}</span>
                    </a>
                  </NavLink>
                ))}
              </div>
            </div>
            <button className="p-1 text" onClick={toggleTheme}>
              {theme === "light" ? (
                <SunIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <MoonIcon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
