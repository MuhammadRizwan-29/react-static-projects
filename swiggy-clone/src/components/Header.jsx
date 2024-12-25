import { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { IoDiscOutline } from "react-icons/io5";
import { CgHello } from "react-icons/cg";
import { BiCart } from "react-icons/bi";
import { SiNginx } from "react-icons/si";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  let showSideMenu = () => {
    setToggle(true);
  };
  let hideSideMenu = () => {
    setToggle(false);
  };
  const links = [
    {
      icon: <IoIosSearch />,
      name: "Seaarch",
    },
    {
      icon: <IoDiscOutline />,
      name: "Offers",
      tag: "New",
    },
    {
      icon: <CgHello />,
      name: "Help",
    },
    {
      icon: <SiNginx />,
      name: "Sign In",
    },
    {
      icon: <BiCart />,
      name: "Cart",
    },
  ];
  return (
    <>
      <div
        className="black-overlay w-full h-full fixed duration-500"
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
        onClick={hideSideMenu}
      >
        <div
          className="w-[400px] bg-white h-full absolute duration-[400ms]"
          style={{
            left: toggle ? "0%" : "-100%",
          }}
          onClick={(e) => {
            e.stopPropagation();
          }}
        ></div>
      </div>
      <header className="p-2 shadow-xl text-[#686b78] sticky top-0 bg-white z-[9999]">
        <div className="max-w-[1200px] mx-auto flex items-center">
          <div className="w-[100px]">
            <img src="./images/logo.png" alt="Swiggy Logo" />
          </div>
          <div>
            <span className="font-bold border-b-[3px] border-[black]">
              Karachi
            </span>
            &nbsp; Sindh, Pakistan
            <RxCaretDown
              onClick={showSideMenu}
              className="inline font-bold text-[25px] text-[#fc8019] cursor-pointer"
            />
          </div>
          <nav className="ml-auto">
            <ul className="flex gap-10 list-none font-semibold text-[18px]">
              {links.map((v, i) => {
                return (
                  <li
                    key={i}
                    className="flex items-center gap-2 hover:text-[#fc8019] cursor-pointer"
                  >
                    {v.icon} {v.name}{" "}
                    <sup className="text-[#fc8019]">{v.tag}</sup>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
