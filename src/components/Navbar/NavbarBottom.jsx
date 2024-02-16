import Logo from "../../assets/logo.svg";
import { RiArrowRightSLine } from "react-icons/ri";
import {
  BroadbandList,
  LandlineList,
  LandlinesList,
  SwitchingBTList,
} from "../../data/NavList";

const NavbarBottom = () => {
  return (
    <>
      <div className="bg-primary">
        <div className="container flex gap-10 items-center">
          {/* logo section */}
          <img src={Logo} alt="" className="w-[46px]" />
          <div className="flex gap-4 justify-between w-full text-white">
            <div>
              <ul className="flex gap-12">
                <li className="group">
                  <a
                    href="#"
                    className="flex items-center h-[80px] pb-2 hover:border-b"
                  >
                    Broadband
                  </a>
                  {/* dropdown full width section */}
                  <div className="absolute left-0 z-[99999] hidden p-2 text-black group-hover:block w-full bg-white">
                    <div className="container py-7 ">
                      <div className=" grid grid-cols-2 lg:grid-cols-4">
                        <div className="space-y-3">
                          <h1 className="border-b-[1px] border-lightGray hover:border-b-[1px] hover:border-primary  flex items-center gap-2 font-bold">
                            Broadband{" "}
                            <span>
                              <RiArrowRightSLine />
                            </span>
                          </h1>
                          <div className="space-y-3">
                            {BroadbandList.map((item, index) => (
                              <li
                                key={index}
                                className="hover:border-b-[2px] border-primary cursor-pointer"
                              >
                                <a href="#">{item}</a>
                              </li>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-3">
                          <h1 className="border-b-[1px] border-lightGray hover:border-b-[1px] hover:border-primary  flex items-center gap-2  font-bold">
                            Landline{" "}
                            <span>
                              <RiArrowRightSLine />
                            </span>
                          </h1>
                          <div className="space-y-3">
                            {LandlineList.map((item, index) => (
                              <li
                                key={index}
                                className="hover:border-b-[1px] border-primary"
                              >
                                {item}
                              </li>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="space-y-3 pt-8  ">
                            {LandlinesList.map((item, index) => (
                              <li
                                key={index}
                                className="hover:border-b-[1px] border-primary"
                              >
                                {item}
                              </li>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-3">
                          <h1 className="border-b-[1px] border-lightGray hover:border-b-[1px] hover:border-primary  flex items-center gap-2  font-bold">
                            Switching to BT and moving
                            <span>
                              <RiArrowRightSLine />
                            </span>
                          </h1>
                          <div className="space-y-3">
                            {SwitchingBTList.map((item, index) => (
                              <li
                                key={index}
                                className="hover:border-b-[1px] border-primary"
                              >
                                {item}
                              </li>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="#" className="h-[80px] flex items-center">
                    TV
                  </a>
                </li>
                <li>
                  <a href="#" className="h-[80px] flex items-center">
                    Sport
                  </a>
                </li>
                <li>
                  <a href="#" className="h-[80px] flex items-center">
                    Mobile
                  </a>
                </li>
                <li>
                  <a href="#" className="h-[80px] flex items-center">
                    Gaming
                  </a>
                </li>
                <li>
                  <a href="#" className="h-[80px] flex items-center">
                    Discover BT Halo
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex gap-12">
              <a href="#" className="h-[80px] flex items-center">
                Help
              </a>
              <a href="#" className="h-[80px] flex items-center">
                My BT
              </a>
              <a href="#" className="h-[80px] flex items-center">
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* bottom section */}
      <div className="bg-darkGray text-white flex justify-center items-center py-5">
        <p>Not a BT customer yet?</p>
      </div>
      <div></div>
    </>
  );
};

export default NavbarBottom;
