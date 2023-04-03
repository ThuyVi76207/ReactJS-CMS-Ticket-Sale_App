import SearchInput from "../components/InputCommon/SearchInput";
import MainLayout from "../layouts/MainLayout";

const SettingPage = () => {
  return (
    <MainLayout>
      <div className="px-[24px]">
        <h2 className="text-[30px] text-[#1E0D03] font-bold pt-[24px]">
          Danh sách gói vé
        </h2>

        <div className="flex items-center justify-between mt-[32px]">
          <SearchInput />
          <div className="flex items-center gap-[10px] text-[#FF993C] text-[16px] font-bold">
            <div className="flex items-center border border-[#FF993C] py-[8px] px-[14px] rounded-[6px] gap-[12px] cursor-pointer">
              {/* <img className="w-[20px]" src={iconFillter} alt="" /> */}
              <span>Lọc vé</span>
            </div>
            <div className="border border-[#FF993C] py-[8px] px-[14px] rounded-[6px] cursor-pointer">
              Xuất file (.csv)
            </div>
          </div>
        </div>

        <table className="mt-[30px] w-full pb-[54px]">
          <tbody id="tableManager">
            <tr>
              <th>STT</th>
              <th className="text-left">Booking code</th>
              <th className="text-left">Số vé</th>
              <th className="text-left">Tên sự kiện</th>
              <th className="text-left">Tình trạng sử dụng</th>
              <th className="text-right">Ngày sử dụng</th>
              <th className="text-right">Ngày xuất vé</th>
              <th className="text-left">Cổng check - in</th>
              <th></th>
            </tr>
          </tbody>
        </table>
        <div className="mt-[54px]"></div>
      </div>
    </MainLayout>
  );
};

export default SettingPage;
