import React,{useState} from "react";
import logoImg from "../../img/logo2.png";
import { Menu, X } from "lucide-react";
function Navbar() {
  const navbarData = [
    { title: "AboutMe" },
    { title: "Experience" },
    { title: "My Skills" },
    { title: "Resume" },
    { title: "ContactMe" },
  ];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="h-15 w-full  flex justify-between px-5">
        <img className="h-10 my-auto" alt="logo" src={logoImg} />
        <ul className=" hidden md:flex  items-center  w-[80%]">
          {navbarData.map((nav, index) => (
            <li key={index} className="mx-3 my-auto font-lobster ">
              <a href={`#${nav.title}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <div></div>
         <button
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

        {isOpen && (
          <div className="absolute top-15 left-0 w-full bg-neutral-950 text-white flex flex-col items-center py-5 md:hidden">
            {navbarData.map((nav, index) => (
              <a
                key={index}
                href={`#${nav.title}`}
                onClick={() => setIsOpen(false)}
                className="hover:text-[#3BB47E] transition"
              >
                {nav.title}
              </a>
            ))}{" "}
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
