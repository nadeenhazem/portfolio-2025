import React, { useState, useEffect } from "react";
import logoImg from "../../img/logo.png";
import { Menu, X } from "lucide-react";
import { MdOutlineWbSunny } from "react-icons/md";
import { BsMoonStars } from "react-icons/bs";
function Navbar() {
  const navbarData = [
    { title: "AboutMe" },
    { title: "Experience" },
    { title: "My Skills" },
    { title: "Resume" },
    { title: "ContactMe" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggleSwitch = () => {
    setIsDark((prev) => !prev);
  };
  useEffect(() => {
    if (!isDark) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDark]);
  return (
    <div className="overflow-x-hidden">
      <nav className="h-15 w-full flex justify-between px-5 ">
        <a href="Intro" className="h-10 my-auto">
          <img className="h-10 my-auto" alt="logo" src={logoImg} />
        </a>

        <ul className="hidden md:flex items-center w-[80%]">
          {navbarData.map((nav, index) => (
            <li key={index} className="mx-3 my-auto font-lobster">
              <a href={`#${nav.title}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="my-auto hidden md:block">
          <label className="relative inline-block w-[50px] h-[26px]">
            <input
              type="checkbox"
              checked={isDark}
              onChange={toggleSwitch}
              className="opacity-0 w-0 h-0"
            />
            <button
              onClick={() => setIsDark(!isDark)}
              className={`relative w-[50px] h-[26px] rounded-[34px] transition-all duration-400 ${
                isDark
                  ? "bg-[rgb(219,222,221)] justify-start"
                  : "bg-gray-700 justify-end"
              }`}
            >
              <span
                className={`absolute top-[3px] left-[3px] w-[20px] h-[20px] bg-white rounded-full transition-transform duration-400 ${
                  isDark ? "translate-x-[24px]" : "translate-x-0"
                }`}
              >
                {isDark ? (
                  <MdOutlineWbSunny className="text-yellow-400 m-auto mt-0.5" />
                ) : (
                  <BsMoonStars className="text-gray-600 m-auto mt-0.5" />
                )}
              </span>
            </button>
          </label>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* المينيو تتحط هنا بعد الـ nav مش جواها */}
      {isOpen && (
        <div className="w-full bg-neutral-950 text-white flex flex-col ps-3 py-5 md:hidden transition-all duration-300">
          {navbarData.map((nav, index) => (
            <a
              key={index}
              href={`#${nav.title}`}
              onClick={() => setIsOpen(false)}
              className="hover:text-[#3BB47E] transition"
            >
              {nav.title}
            </a>
          ))}

          <div className="mt-2">
            <label className="relative inline-block w-[50px] h-[26px]">
              <input
                type="checkbox"
                checked={isDark}
                onChange={toggleSwitch}
                className="opacity-0 w-0 h-0"
              />
              <button
                onClick={() => setIsDark(!isDark)}
                className={`relative w-[50px] h-[26px] rounded-[34px] transition-all duration-400 ${
                  isDark
                    ? "bg-[rgb(219,222,221)] justify-start"
                    : "bg-gray-700 justify-end"
                }`}
              >
                <span
                  className={`absolute top-[3px] left-[3px] w-[20px] h-[20px] bg-white rounded-full transition-transform duration-400 ${
                    isDark ? "translate-x-[24px]" : "translate-x-0"
                  }`}
                >
                  {isDark ? (
                    <MdOutlineWbSunny className="text-yellow-400 m-auto mt-0.5" />
                  ) : (
                    <BsMoonStars className="text-gray-600 m-auto mt-0.5" />
                  )}
                </span>
              </button>
            </label>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
