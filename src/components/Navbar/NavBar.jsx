import { RiArrowRightSLine } from "react-icons/ri";
import NavbarBottom from "./NavbarBottom";
const Navbar = () => {
  return (
    <div className="bg-lightGray">
      {/* upper section */}
      <div className="container h-[38px] flex items-center">
        <div className="flex gap-4 text-sm py-2">
          <a href="#" className="hover:border-b-[1px] border-black/60">
            For the home
          </a>
          <a href="#" className="hover:border-b-[1px] border-black/60">
            For business and public sector
          </a>
          <a href="#" className="hover:border-b-[1px] border-black/60">
            For global business{" "}
          </a>
          <p>|</p>
          <p className="flex items-center text-primary">
            UK{" "}
            <span>
              <RiArrowRightSLine className="text-xl font" />
            </span>
          </p>
        </div>
      </div>
      <NavbarBottom />
    </div>
  );
};

export default Navbar;
