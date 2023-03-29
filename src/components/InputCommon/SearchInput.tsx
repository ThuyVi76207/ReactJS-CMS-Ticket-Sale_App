import iconSearch from "../../assets/icon/iconsearch.svg";
const SearchInput = () => {
  return (
    <div className="w-[446px] h-[48px] rounded-[8px] bg-[#F7F7F8] py-[10px] px-[16px] flex items-center gap-[16px]">
      <input
        type="text"
        placeholder="Tìm bằng số vé"
        className="text-[#1E0D03] font-normal text-[16px] w-[370px] h-[28px] focus:outline-none bg-[#F7F7F8] placeholder:opacity-30 placeholder:italic"
      />
      <img className="w-[24px] h-[24px]" src={iconSearch} alt="icon" />
    </div>
  );
};
export default SearchInput;
