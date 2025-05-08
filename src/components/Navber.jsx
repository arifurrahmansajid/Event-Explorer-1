import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  // Function to handle active nav links
  const navLinkClass = ({ isActive }) => 
    isActive 
      ? "text-white font-bold" 
      : "text-purple-200 hover:text-white transition-colors font-medium";

  return (
    <div className="bg-purple-600 shadow-md">
      <div className="navbar max-w-7xl mx-auto px-4">
        <div className="navbar-start">
          {/* Mobile menu button */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-purple-700 rounded-box w-52 gap-1"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => 
                    isActive ? "bg-purple-500 text-white" : "text-white hover:bg-purple-500"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/program"
                  className={({ isActive }) => 
                    isActive ? "bg-purple-500 text-white" : "text-white hover:bg-purple-500"
                  }
                >
                  Our Program
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/profile"
                  className={({ isActive }) => 
                    isActive ? "bg-purple-500 text-white" : "text-white hover:bg-purple-500"
                  }
                >
                  My Profile
                </NavLink>
              </li>
            </ul>
          </div>
          
          {/* Logo and brand name */}
          <Link to="/" className="flex items-center gap-2">
            <img
              className="w-10 h-10"
              src="https://i.ibb.co.com/RTZDh9y/CC.png"
              alt="Event Explorer Logo"
            />
            <h2 className="text-xl font-bold text-white">Event Explorer</h2>
          </Link>
        </div>
        
        {/* Desktop navigation */}
        <nav className="navbar-center hidden lg:flex gap-6">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/program" className={navLinkClass}>
            Our Program
          </NavLink>
          <NavLink to="/profile" className={navLinkClass}>
            My Profile
          </NavLink>
        </nav>
        
        {/* User controls */}
        <div className="navbar-end gap-2">
          {user ? (
            <div className="flex items-center gap-4">
              {/* Logout button - visible on desktop */}
              <button
                onClick={logOut}
                className="hidden md:flex btn bg-white hover:bg-purple-100 text-purple-700 font-bold border-none"
              >
                Logout
              </button>
              
              {/* User avatar dropdown */}
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full relative group">
                    <img
                      alt="User Profile"
                      src={user?.photoURL || "https://i.ibb.co.com/5vkd0X7/default-avatar.png"}
                      referrerPolicy="no-referrer"
                    />
                    {/* Tooltip for user name on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                        {user?.displayName || "User"}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Dropdown menu */}
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-purple-700 rounded-box w-64 space-y-3"
                >
                  <div className="flex flex-col items-center">
                    <img
                      className="w-16 h-16 rounded-full mb-2 border-2 border-white"
                      src={user?.photoURL || "https://i.ibb.co.com/5vkd0X7/default-avatar.png"}
                      alt="Profile"
                      referrerPolicy="no-referrer"
                    />
                    <h3 className="font-bold text-white text-center">
                      {user?.displayName || "User"}
                    </h3>
                    <p className="text-purple-100 text-sm text-center">
                      {user?.email}
                    </p>
                    
                    <div className="flex flex-col w-full mt-3 space-y-2">
                      <Link
                        to="/profile"
                        className="btn btn-sm bg-purple-500 hover:bg-purple-600 text-white border-none"
                      >
                        My Profile
                      </Link>
                      <button
                        onClick={logOut}
                        className="btn btn-sm bg-purple-500 hover:bg-purple-600 text-white border-none md:hidden"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          ) : (
            <Link
              to="/login"
              className="btn bg-white hover:bg-purple-100 text-purple-700 font-bold border-none"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;