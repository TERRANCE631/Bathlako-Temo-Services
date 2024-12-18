import { useEffect } from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../Assets/Logo.png";

export const Header = () => {
  const [hidden, setHidden] = useState(true);
  const [darkMode, setDarkMode] = useState( JSON.parse(localStorage.getItem("darkMode")) || false);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    if(darkMode){
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
  }, [darkMode]);

  const activeClass = "text-base block py-2 pr-4 pl-3 text-orange-500 rounded-lg md:bg-transparent md:text-orange-500 md:p-0 dark:text-orange-500";
  const inActiveClass = "text-base block py-2 pr-4 pl-3 text-gray-500 rounded-lg hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500 md:p-0 md:dark:hover:text-orange-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";

  return (
    <header>      
      <nav className="fixed w-full z-20 top-0 start-0 bg-white border-b-2 border-orange-200 px-2 sm:px-4 py-2 dark:bg-gray-900 dark:border-b-1 dark:border-orange-900">
        <div className="flex flex-wrap justify-between items-center mx-auto">
          <Link to="/" className="flex items-center">
              <img src={Logo} className="mr-1 h-10 sm:h-14" alt="BTS Logo" />
              <span className="self-center text-orange-500 text-xl font-semibold rounded-md dark:text-orange"><i>Batlhako Temo Services</i></span>
          </Link>

          <div id="mobile-nav" className="flex md:order-2">
          <button onClick={() => setDarkMode(!darkMode)} data-tooltip-target="navbar-search-example-toggle-dark-mode-tooltip" type="button" data-toggle-dark="light" className="flex items-center p-2 mr-2 text-xs font-medium text-gray-700 bg-white rounded-lg toggle-dark-state-example hover:bg-gray-100 hover:text-gray-700 focus:z-10 focus:ring-2 focus:ring-orange-300 dark:focus:ring-orange-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-orange-600 dark:hover:text-white dark:hover:bg-gray-700">
            { darkMode ? (<svg aria-hidden="true" data-toggle-icon="sun" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path></svg>) : (<svg aria-hidden="true" data-toggle-icon="moon" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>) }
          </button>
            <button onClick={() => setHidden(!hidden)} data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
              <span className="sr-only">Open menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>
          </div>

            <div onClick={() => setHidden(true)} className={`${hidden ? "hidden" : ""} justify-between items-center w-full md:flex md:w-auto md:order-1 `} id="navbar-search">
              <ul className="flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-900 md:dark:bg-gray-900 dark:border-orange-700">
                <li>
                  <NavLink to="/" className={({isActive}) => isActive ? activeClass : inActiveClass } end>Home</NavLink>
                </li>
                <li>
                  <NavLink to="ContactUs" className={({isActive}) => isActive ? activeClass : inActiveClass }>ContactUs</NavLink>
                </li>
                <li>
                  <NavLink to="AboutUs" className={({isActive}) => isActive ? activeClass : inActiveClass }>AboutUs</NavLink>
                </li>
              </ul>
            </div>
        </div>
      </nav>
    </header>
  )
}
