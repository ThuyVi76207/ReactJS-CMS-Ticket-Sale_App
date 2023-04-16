import iconSearch from "../../assets/icon/iconsearch.svg";
interface SearchInputTypeOf {
  onSubmit: (e: any) => void;
  onChange: (e: any) => void;
}
const SearchInput = ({ onSubmit, onChange }: SearchInputTypeOf) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="w-[400px] h-[45px] rounded-[8px] bg-[#F7F7F8] py-[10px] px-[16px] flex items-center gap-[16px]">
        <input
          type="text"
          onChange={onChange}
          placeholder="Tìm bằng số vé"
          className="text-[#1E0D03] font-normal text-[16px] w-[350px] h-[28px] focus:outline-none bg-[#F7F7F8] placeholder:opacity-30 placeholder:italic"
        />
        <button type="submit">
          <img className="w-[24px] h-[24px]" src={iconSearch} alt="icon" />
        </button>
      </div>
    </form>
  );
};
export default SearchInput;
