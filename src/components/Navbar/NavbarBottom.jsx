import Logo from "../../assets/logo.svg";
import { RiArrowRightSLine } from "react-icons/ri";
import {
  BillsList,
  BroadbandList,
  DetailsList,
  FaultList,
  GetInTouchList,
  HelpAndSupportList,
  HelpAndSupportsList,
  HelpfulList,
  HelpfulLists,
  LandlineList,
  LandlinesList,
  MobileList,
  OrdersList,
  ProductsList,
  SwitchingBTList,
  TNTDealList,
  TNTSportList,
  TNTSportsList,
  TNTWatchList,
  TVList,
  TVSportsList,
  TVWatchList,
  UpgradeList,
} from "../../data/NavList";
import { Link } from "react-router-dom";

const NavbarBottom = () => {
  return (
    <>
      <div className="bg-primary">
        <div className="container flex gap-10 items-center">
          {/* logo section */}
          <Link to="/">
            <img src={Logo} alt="" className="w-[46px] cursor-pointer" />
          </Link>
          <div className="flex gap-4 justify-between w-full text-white">
            <div>
              <ul className="flex gap-12">
                <li className="group ">
                  <div className="p-8">
                    <a
                      href="#"
                      className="flex items-center border-b-[2px] border-primary hover:border-b-[2px] hover:border-white"
                    >
                      Broadband
                    </a>
                  </div>

                  {/* dropdown full width section */}
                  <div className="absolute left-[11%] w-[80%] z-[99999] hidden p-2 text-black group-hover:block  bg-white">
                    <div className="container py-7 ">
                      <div className=" grid grid-cols-2 lg:grid-cols-3">
                        <div className="space-y-3 me-4">
                          <h1 className="border-b-[1px] border-lightGray  flex items-center   ">
                            <span className="group hover:border-b-[1px] hover:border-primary  flex gap-2 font-bold">
                              Broadband
                              <span>
                                <RiArrowRightSLine />
                              </span>
                            </span>
                          </h1>
                          <ul className="space-y-3">
                            {BroadbandList.map((item, index) => (
                              <li key={index} className="cursor-pointer">
                                <a
                                  href="#"
                                  className="border-b-[2px] border-white hover:border-b-[2px] hover:border-primary"
                                >
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="space-y-3 me-4">
                          <h1 className="border-b-[1px] border-lightGray hover:border-b-[1px] hover:border-primary  flex items-center gap-2  font-bold">
                            Landline{" "}
                            <span>
                              <RiArrowRightSLine />
                            </span>
                          </h1>
                          <div className="flex justify-between">
                            <div>
                              <ul className="space-y-3">
                                {LandlineList.map((item, index) => (
                                  <li key={index} className="">
                                    <a
                                      href="#"
                                      className="border-b-[2px] border-white hover:border-b-[2px] hover:border-primary"
                                    >
                                      {item}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="space-y-3">
                              <ul className="space-y-3">
                                {LandlinesList.map((item, index) => (
                                  <li key={index}>
                                    <a
                                      href="#"
                                      className="border-b-[2px] border-white hover:border-b-[2px] hover:border-primary"
                                    >
                                      {item}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <h1 className="border-b-[1px] border-lightGray hover:border-b-[1px] hover:border-primary  flex items-center gap-2  font-bold">
                            Switching to BT and moving
                            <span>
                              <RiArrowRightSLine />
                            </span>
                          </h1>
                          <ul className="space-y-3">
                            {SwitchingBTList.map((item, index) => (
                              <li key={index}>
                                <a
                                  href="#"
                                  className="border-b-[2px] border-white hover:border-b-[2px] hover:border-primary"
                                >
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="group">
                  <div className="p-8">
                    <a
                      href="#"
                      className="flex items-center border-b-[2px] border-primary hover:border-b-[2px] hover:border-white"
                    >
                      TV
                    </a>
                  </div>

                  {/* dropdown full width section */}
                  <div className="absolute left-[11%] w-[80%] z-[99999] hidden p-2 text-black group-hover:block  bg-white">
                    <div className="container py-7 ">
                      <div className=" grid grid-cols-2 lg:grid-cols-3">
                        <div className="space-y-3 me-4">
                          <h1 className="border-b-[1px] border-lightGray  flex items-center">
                            <span className="group hover:border-b-[1px] hover:border-primary  flex gap-2 font-bold">
                              TV
                              <span>
                                <RiArrowRightSLine />
                              </span>
                            </span>
                          </h1>
                          <ul className="space-y-3">
                            {TVList.map((item, index) => (
                              <li key={index} className="cursor-pointer">
                                <a
                                  href="#"
                                  className="border-b-[2px] border-white hover:border-b-[2px] hover:border-primary"
                                >
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="space-y-3">
                          <h1 className="border-b-[1px] border-lightGray hover:border-b-[1px] hover:border-primary  flex items-center gap-2  font-bold">
                            Find and watch TV{" "}
                            <span>
                              <RiArrowRightSLine />
                            </span>
                          </h1>
                          <ul className="space-y-3">
                            {TVWatchList.map((item, index) => (
                              <li key={index}>
                                <a
                                  href="#"
                                  className="border-b-[2px] border-white hover:border-b-[2px] hover:border-primary"
                                >
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-3">
                          <h1 className="border-b-[1px] border-lightGray hover:border-b-[1px] hover:border-primary  flex items-center gap-2  font-bold">
                            Find and watch Sport{" "}
                            <span>
                              <RiArrowRightSLine />
                            </span>
                          </h1>
                          <ul className="space-y-3">
                            {TVSportsList.map((item, index) => (
                              <li key={index}>
                                <a
                                  href="#"
                                  className="border-b-[2px] border-white hover:border-b-[2px] hover:border-primary"
                                >
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="group">
                  <a href="#" className="h-[80px] flex items-center">
                    Sport
                  </a>
                  {/* dropdown full width section */}
                  <div className="absolute left-0 z-[99999] hidden p-2 text-black group-hover:block w-full bg-white">
                    <div className="container py-7 ">
                      <div className=" grid grid-cols-2 lg:grid-cols-4">
                        <div className="space-y-3">
                          <h1 className="border-b-[1px] border-lightGray hover:border-b-[1px] hover:border-primary  flex items-center gap-2 font-bold">
                            TNT Sports Deals{" "}
                            <span>
                              <RiArrowRightSLine />
                            </span>
                          </h1>
                          <ul className="space-y-3">
                            {TNTDealList.map((item, index) => (
                              <li key={index} className="cursor-pointer">
                                <a
                                  href="#"
                                  className="border-b-[2px] border-white hover:border-b-[2px] hover:border-primary"
                                >
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-3">
                          <h1 className="border-b-[1px] border-lightGray hover:border-b-[1px] hover:border-primary  flex items-center gap-2  font-bold">
                            Watch{" "}
                            <span>
                              <RiArrowRightSLine />
                            </span>
                          </h1>
                          <ul className="space-y-3">
                            {TNTWatchList.map((item, index) => (
                              <li key={index}>
                                <a
                                  href="#"
                                  className="border-b-[2px] border-white hover:border-b-[2px] hover:border-primary"
                                >
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="space-y-3">
                          <h1 className="border-b-[1px] border-lightGray hover:border-b-[1px] hover:border-primary  flex items-center gap-2  font-bold">
                            Sports{" "}
                            <span>
                              <RiArrowRightSLine />
                            </span>
                          </h1>
                          <ul className="space-y-3">
                            {TNTSportList.map((item, index) => (
                              <li key={index}>
                                <a
                                  href="#"
                                  className="border-b-[2px] border-white hover:border-b-[2px] hover:border-primary"
                                >
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="space-y-3">
                          <ul className="space-y-3 pt-8  ">
                            {TNTSportsList.map((item, index) => (
                              <li key={index}>
                                <a
                                  href="#"
                                  className="border-b-[2px] border-white hover:border-b-[2px] hover:border-primary"
                                >
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="group">
                  <a href="#" className="h-[80px] flex items-center">
                    Mobile
                  </a>
                  {/* dropdown full width section */}
                  <div className="absolute left-0 z-[99999] hidden p-2 text-black group-hover:block w-full bg-white">
                    <div className="container py-7 ">
                      <div className=" grid grid-cols-2 lg:grid-cols-4">
                        <div className="space-y-3">
                          <h1 className="border-b-[1px] border-lightGray hover:border-b-[1px] hover:border-primary  flex items-center gap-2 font-bold">
                            Mobile{" "}
                            <span>
                              <RiArrowRightSLine />
                            </span>
                          </h1>
                          <ul className="space-y-3">
                            {MobileList.map((item, index) => (
                              <li key={index} className="cursor-pointer">
                                <a
                                  href="#"
                                  className="border-b-[2px] border-white hover:border-b-[2px] hover:border-primary"
                                >
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
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

            <div>
              <ul className="flex gap-12">
                <li className="group">
                  <a href="#" className="h-[80px] flex items-center">
                    Help
                  </a>
                  {/* dropdown full width section */}
                  <div className="absolute left-0 z-[99999] hidden p-2 text-black group-hover:block w-full bg-white">
                    <div className="container py-7 ">
                      <div className=" grid grid-cols-2 lg:grid-cols-6">
                        <div className="space-y-3">
                          <h1 className="border-b-[1px] border-lightGray hover:border-b-[1px] hover:border-primary  flex items-center gap-2 font-bold">
                            Help and support{" "}
                            <span>
                              <RiArrowRightSLine />
                            </span>
                          </h1>
                          <ul className="space-y-3">
                            {HelpAndSupportList.map((item, index) => (
                              <li key={index} className="cursor-pointer">
                                <a
                                  href="#"
                                  className="border-b-[2px] border-white hover:border-b-[2px] hover:border-primary"
                                >
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="space-y-3">
                          <ul className="space-y-3 pt-8  ">
                            {HelpAndSupportsList.map((item, index) => (
                              <li key={index}>
                                <a
                                  href="#"
                                  className="border-b-[2px] border-white hover:border-b-[2px] hover:border-primary"
                                >
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="space-y-3">
                          <h1 className="border-b-[1px] border-lightGray hover:border-b-[1px] hover:border-primary  flex items-center gap-2  font-bold">
                            Fault tracking and repair{" "}
                            <span>
                              <RiArrowRightSLine />
                            </span>
                          </h1>
                          <ul className="space-y-3">
                            {FaultList.map((item, index) => (
                              <li key={index}>
                                <a
                                  href="#"
                                  className="border-b-[2px] border-white hover:border-b-[2px] hover:border-primary"
                                >
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-3">
                          <h1 className="border-b-[1px] border-lightGray hover:border-b-[1px] hover:border-primary  flex items-center gap-2  font-bold">
                            Helpful links{" "}
                            <span>
                              <RiArrowRightSLine />
                            </span>
                          </h1>
                          <ul className="space-y-3">
                            {HelpfulList.map((item, index) => (
                              <li key={index}>
                                <a
                                  href="#"
                                  className="border-b-[2px] border-white hover:border-b-[2px] hover:border-primary"
                                >
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="space-y-3">
                          <ul className="space-y-3 pt-8  ">
                            {HelpfulLists.map((item, index) => (
                              <li key={index}>
                                <a
                                  href="#"
                                  className="border-b-[2px] border-white hover:border-b-[2px] hover:border-primary"
                                >
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="space-y-3">
                          <h1 className="border-b-[1px] border-lightGray hover:border-b-[1px] hover:border-primary  flex items-center gap-2  font-bold">
                            Get me in touch{" "}
                            <span>
                              <RiArrowRightSLine />
                            </span>
                          </h1>
                          <ul className="space-y-3">
                            {GetInTouchList.map((item, index) => (
                              <li key={index}>
                                <a
                                  href="#"
                                  className="border-b-[2px] border-white hover:border-b-[2px] hover:border-primary"
                                >
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="group">
                  <a href="#" className="h-[80px] flex items-center">
                    My BT
                  </a>
                  {/* dropdown full width section */}
                  <div className="absolute left-0 z-[99999] hidden p-2 text-black group-hover:block w-full bg-white">
                    <div className="container py-7 ">
                      <div className=" grid grid-cols-2 lg:grid-cols-6">
                        <div className="space-y-3">
                          <h1 className="border-b-[1px] border-lightGray hover:border-b-[1px] hover:border-primary  flex items-center gap-2 font-bold">
                            Your bills and usage{" "}
                            <span>
                              <RiArrowRightSLine />
                            </span>
                          </h1>
                          <ul className="space-y-3">
                            {BillsList.map((item, index) => (
                              <li key={index} className="cursor-pointer">
                                <a
                                  href="#"
                                  className="border-b-[2px] border-white hover:border-b-[2px] hover:border-primary"
                                >
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="space-y-3">
                          <h1 className="border-b-[1px] border-lightGray hover:border-b-[1px] hover:border-primary  flex items-center gap-2  font-bold">
                            Your products{" "}
                            <span>
                              <RiArrowRightSLine />
                            </span>
                          </h1>
                          <ul className="space-y-3">
                            {ProductsList.map((item, index) => (
                              <li key={index}>
                                <a
                                  href="#"
                                  className="border-b-[2px] border-white hover:border-b-[2px] hover:border-primary"
                                >
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="space-y-3">
                          <h1 className="border-b-[1px] border-lightGray hover:border-b-[1px] hover:border-primary  flex items-center gap-2  font-bold">
                            Upgrade{" "}
                            <span>
                              <RiArrowRightSLine />
                            </span>
                          </h1>
                          <ul className="space-y-3">
                            {UpgradeList.map((item, index) => (
                              <li key={index}>
                                <a
                                  href="#"
                                  className="border-b-[2px] border-white hover:border-b-[2px] hover:border-primary"
                                >
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="space-y-3">
                          <h1 className="border-b-[1px] border-lightGray hover:border-b-[1px] hover:border-primary  flex items-center gap-2  font-bold">
                            Your details{" "}
                            <span>
                              <RiArrowRightSLine />
                            </span>
                          </h1>
                          <ul className="space-y-3">
                            {DetailsList.map((item, index) => (
                              <li key={index}>
                                <a
                                  href="#"
                                  className="border-b-[2px] border-white hover:border-b-[2px] hover:border-primary"
                                >
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="space-y-3">
                          <h1 className="border-b-[1px] border-lightGray hover:border-b-[1px] hover:border-primary  flex items-center gap-2  font-bold">
                            Orders and faults{" "}
                            <span>
                              <RiArrowRightSLine />
                            </span>
                          </h1>
                          <ul className="space-y-3">
                            {OrdersList.map((item, index) => (
                              <li key={index}>
                                <a
                                  href="#"
                                  className="border-b-[2px] border-white hover:border-b-[2px] hover:border-primary"
                                >
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="space-y-3">
                          <Link
                            to="/login"
                            className="border-b-[1px] border-lightGray hover:border-b-[1px] hover:border-primary  flex items-center gap-2  font-bold"
                          >
                            Log in{" "}
                            <span>
                              <RiArrowRightSLine />
                            </span>
                          </Link>
                          <a
                            href="#"
                            className="border-b-[1px] border-lightGray hover:border-b-[1px] hover:border-primary  flex items-center gap-2  font-bold"
                          >
                            Sign up{" "}
                            <span>
                              <RiArrowRightSLine />
                            </span>
                          </a>
                          <a
                            href="#"
                            className="border-b-[1px] border-lightGray hover:border-b-[1px] hover:border-primary  flex items-center gap-2  font-bold"
                          >
                            About My BT{" "}
                            <span>
                              <RiArrowRightSLine />
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="group">
                  <a href="#" className="h-[80px] flex items-center">
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* bottom section */}
      <div className="bg-darkGray text-white flex justify-center items-center py-5">
        <p className="cursor-pointer hover:underline ">
          Not a BT customer yet?
        </p>
      </div>
      <div></div>
    </>
  );
};

export default NavbarBottom;
