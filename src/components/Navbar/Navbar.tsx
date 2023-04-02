import avatar from "../../assets/avatar/avatar.png";
import iconSearch from "../../assets/icon/iconsearch.svg";
import iconEnvelope from "../../assets/icon/iconenvelope.svg";
import iconBell from "../../assets/icon/fi_bell.svg";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between my-[17px] mr-[32px]">
      <div className="flex gap-[16px] items-center justify-between  w-[420px] h-[45px] bg-[#EDE6E6] rounded-[12px] py-[10px] px-[16px]">
        <input
          type="text"
          placeholder="Search"
          name="search"
          className="placeholder:italic placeholder:opacity-30 font-normal focus:outline-none bg-[#EDE6E6] w-[361px]"
        />
        <span className="">
          <img src={iconSearch} alt="icon" />
        </span>
      </div>
      <div className="flex gap-[24px] items-center">
        <img src={iconEnvelope} alt="icon" />
        <img src={iconBell} alt="icon" />

        <img src={avatar} alt="" className="w-[48px] h-[48px] rounded-[50%]" />
      </div>
    </div>
  );
};
export default Navbar;
