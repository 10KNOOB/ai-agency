import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "pricing",
    },
    {
      id: 3,
      link: "Faq",
    },
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY >= 10 ? setShadow(true) : setShadow(false);
    });
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <div
        className={
          shadow
            ? "fixed w-full h-[80px] duration-300 z-[100] shadow-lg bg-white/50 backdrop-blur-xl"
            : "fixed w-full h-[80px] duration-300 z-[100] backdrop-blur-xl  border-b-2 border-indigo-950/50"
        }
      >
        {/* this is for large screen devices */}
        <div className="flex justify-between   font-outline-2 text-lg text-shadow-1 items-center h-full container text-[#0E0846] ">
          <ul className=" flex justify-around items-center">
            <h1 className="font-homelike text-3xl mr-0 md:mr-20">ChatBot</h1>
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="max-md:hidden cursor-pointer font-medium capitalize hover:scale-105 duration-300 px-4 flex justify-center items-center gap-2"
              >
                <Link to={link} smooth duration={500}>
                  {link}
                </Link>
              </li>
            ))}
            {/* shinnig button inifinity loop */}
          </ul>
          <div className="flex justify-center items-center gap-5">
            <div className=" text-white bg-black rounded px-5 py-1.5">
              Hire Us
            </div>
            <div onClick={handleNav} className="block md:hidden ">
              {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
          </div>
        </div>
      </div>
      {/* this is for small screen devices */}

      <div
        className={
          nav
            ? "fixed h-screen pt-20 left-0 top-0 w-[80%] text-white ease-in duration-500 backdrop-blur-lg z-40 md:hidden"
            : "fixed h-screen pt-20 left-[-100%] top-0 w-[80%] ease-in duration-500 backdrop-blur-lg z-40"
        }
      >
        <ul>
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 flex justify-center items-center gap-2 font-bold"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
