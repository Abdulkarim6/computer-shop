import { NavLink } from "react-router-dom";

const Navber = () => {
  const menuItems = (
    <>
      <NavLink to='/' className="mx-2 p-1 lg:p-2 hover:bg-blue-500 rounded">Home</NavLink>
      <NavLink to='/topRated' className="mx-2 p-1 lg:p-2 hover:bg-blue-500 rounded">Top Rated</NavLink>
      <NavLink to='/about' className="mx-2 p-1 lg:p-2 hover:bg-blue-500 rounded">About</NavLink>
      <NavLink to='/myCart' className="mx-1 p-1 lg:py-2 px-4 hover:bg-blue-500 rounded"><svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg></NavLink>
    </>
  );
  return (
    <div className="navbar bg-blue-400 text-black rounded">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
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
            className="menu menu-sm dropdown-content mt-3 z-[1] text-lg font-medium p-0 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <h3 className="m-2 text-xl lg:text-2xl font-semibold">Computer Shop</h3>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg font-medium">
          {menuItems}
        </ul>
      </div>
    </div>
  );
};

export default Navber;
