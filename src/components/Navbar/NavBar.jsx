import { useState } from "react";
import { NavList } from "../../data/NavList";
import { MdKeyboardArrowRight } from "react-icons/md";

const NavBar = () => {
  const [showBroadbandCard, setShowBroadbandCard] = useState(false);

  const handleBroadbandHover = () => {
    setShowBroadbandCard(true);
  };

  const handleBroadbandLeave = () => {
    setShowBroadbandCard(false);
  };
  return (
    <div className="bg-purple-900 py-5 text-white ">
      <div className="container m-auto flex items-center gap-8 justify-center ">
        <div>
          <img
            src="https://img01.bt.co.uk/s/assets/090224/images/logo/logo-2018.svg"
            alt="Logo"
            className="w-12"
          />
        </div>
        <div className="flex justify-between gap-8">
          <ul className="flex justify-between gap-8">
            {NavList.map((item, index) => (
              <li
                key={index}
                className="text-md hover:border-b py-3 cursor-pointer "
                onMouseEnter={() => {
                  if (item === "Broadband") {
                    handleBroadbandHover();
                  }
                }}
                onMouseLeave={() => {
                  if (item === "Broadband") {
                    handleBroadbandLeave();
                  }
                }}
              >
                {item}
              </li>
            ))}
          </ul>
          <ul className="flex gap-8">
            <li className="text-md hover:border-b py-3 cursor-pointer ">
              Help
            </li>
            <li className="text-md hover:border-b py-3 cursor-pointer ">
              My BT
            </li>
            <li className="text-md hover:border-b py-3 cursor-pointer ">
              Email
            </li>
          </ul>
        </div>
      </div>
      {showBroadbandCard && (
        <div className="absolute top-[88px] left-[30rem] w-1/2 m-auto bg-white p-4 shadow-md">
          <div className="flex items-center border-b">
            <p className="text-black font-bold underline">Broadband </p>
            <MdKeyboardArrowRight className="text-black text-xl" />
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
