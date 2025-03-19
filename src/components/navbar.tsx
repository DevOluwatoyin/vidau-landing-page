import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState<number | null>(null);

  const [openNav, setOpenNav] = useState(false);

  const menuItems = [
    { name: "Features", dropdown: true },
    { name: "Solution", dropdown: true },
    { name: "Resources", dropdown: true },
    { name: "Pricing", dropdown: false },
    { name: "API", dropdown: false },
  ];
  return (
    <nav className="flex items center justify-between px-4 py-8 gap-2 bg-primary-100">
      <img src="/images/white-logo.svg" alt="white logo" />

      <div className="hidden lg:flex space-x-6">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`relative font-medium flex items-center space-x-3 cursor-pointer px-3 py-2 rounded-lg transition-all ${
              active === index
                ? "bg-white text-primary-500"
                : "text-white backdrop:hover:bg-primary-500"
            }`}
            onMouseEnter={() => setActive(index)}
            onMouseLeave={() => setActive(null)}
          >
            <span>{item.name}</span>
            {item.dropdown &&
              (active === index ? (
                <img src="/images/dropdown-blue.svg" alt="dropdown icon" />
              ) : (
                <img src="/images/dropdown-white.svg" alt="dropdown icon" />
              ))}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-1 lg:gap-4">
        <button className="rounded-full py-[0.688rem] px-2 text-white border border-white text-[0.625rem] font-semibold lg:px-5 lg:text-sm">
          Login
        </button>

        <button className="rounded-full py-[0.688rem] px-2 bg-white text-primary-main text-[0.625rem] font-semibold lg:px-5 lg:text-sm">
          Get Started for Free
        </button>

        <img
          src="/images/menu-open.svg"
          alt="white logo"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        />
      </div>

      {openNav && (
        <div className="lg:hidden flex flex-col space-y-6 bg-primary-500 p-4 h-screen transition-all absolute z-10 w-full left-0 top-20 bg-hero-pattern">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`relative font-medium flex items-center space-x-3 cursor-pointer px-3 py-2 rounded-lg transition-all ${
                active === index
                  ? "bg-white text-primary-500"
                  : "text-white hover:bg-blue-500"
              }`}
              onMouseEnter={() => setActive(index)}
              onMouseLeave={() => setActive(null)}
            >
              <span>{item.name}</span>
              {item.dropdown &&
                (active === index ? (
                  <img src="/images/dropdown-blue.svg" alt="dropdown icon" />
                ) : (
                  <img src="/images/dropdown-white.svg" alt="dropdown icon" />
                ))}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
