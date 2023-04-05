import { Data_ListPackageTicket } from "../Data";
import SearchInput from "../components/InputCommon/SearchInput";
import MainLayout from "../layouts/MainLayout";
import fiEdit from "../assets/icon/fi_edit.svg";
import { Options_ControlStatus } from "../constant";
import { useAppDispatch } from "../hooks";
import { addSuccessModal } from "../reducers/modal/moreTicketModalSlice";

const SettingPage = () => {
  const dispatch = useAppDispatch();
  const handleOnClickAppComboTicket = () => {
    dispatch(addSuccessModal({ title: "Thêm gói vé", rightButtonText: "Lưu" }));
  };
  const handleOnclickUpdateTicket = () => {
    dispatch(addSuccessModal({ title: "Cap nhat ve", rightButtonText: "luu" }));
  };
  return (
    <MainLayout>
      <div className="px-[24px]">
        <h2 className="text-[30px] text-[#1E0D03] font-bold pt-[24px]">
          Danh sách gói vé
        </h2>

        <div className="flex items-center justify-between mt-[32px]">
          <SearchInput />
          <div className="flex items-center gap-[10px] text-[#FF993C] text-[16px] font-bold">
            <div className="border border-[#FF993C] py-[8px] px-[14px] rounded-[6px] cursor-pointer">
              Xuất file (.csv)
            </div>
            <div
              onClick={handleOnClickAppComboTicket}
              className="flex items-center border bg-[#FF993C] text-white py-[8px] px-[14px] rounded-[6px] gap-[12px] cursor-pointer"
            >
              <span>Thêm gói vé</span>
            </div>
          </div>
        </div>

        <table className="mt-[30px] w-full pb-[54px]">
          <tbody id="tableManager">
            <tr>
              <th>STT</th>
              <th className="text-left">Mã gói</th>
              <th className="text-center">Tên gói vé</th>
              <th className="text-right">Ngày áp dụng</th>
              <th className="text-right">Ngày hết hạn</th>
              <th className="text-right">Giá vé (VNĐ/Vé)</th>
              <th className="text-left">Giá Combo (VNĐ/Combo)</th>
              <th className="text-left">Tình trạng</th>
              <th></th>
            </tr>
            {Data_ListPackageTicket.map((item, ind) => {
              return (
                <tr key={ind} className="text-[12px] font-medium opacity-70">
                  <td className="text-center">{item.id}</td>
                  <td className="text-left">{item.packageId}</td>
                  <td className="text-center">{item.packageName}</td>
                  <td className="text-right">{item.applicationDate}</td>
                  <td className="text-right">{item.expirationDate}</td>
                  <td className="text-right">{item.price}</td>
                  <td className="text-left">{item.comboPrice}</td>
                  <td className="text-left">
                    {Options_ControlStatus.map((val, ind) => {
                      return val.value === item.status ? (
                        <div
                          key={ind}
                          className={`p-[8px] border rounded-[4px] text-[12px] font-medium w-auto
                          ${
                            item.status === 1
                              ? "border-[#03AC00] text-[#03AC00] bg-[#DEF7E0]"
                              : ""
                          } 
                           ${
                             item.status === 2
                               ? "border-[#FD5959] text-[#FD5959] bg-[#F8EBE8]"
                               : ""
                           } 
                          `}
                        >
                          <i className="fas fa-circle mr-[9px] w-[8px] h-[8px]"></i>
                          {val.label}
                        </div>
                      ) : null;
                    })}
                  </td>
                  <td
                    onClick={handleOnclickUpdateTicket}
                    className="flex items-center gap-2"
                  >
                    <img src={fiEdit} alt="" />
                    <h2 className="text-[#FF993C]">Cập nhật</h2>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="mt-[54px]"></div>
      </div>
    </MainLayout>
  );
};

export default SettingPage;
