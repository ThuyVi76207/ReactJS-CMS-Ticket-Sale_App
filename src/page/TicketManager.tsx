import MainLayout from "../layouts/MainLayout";

import iconFillter from "../assets/icon/iconfillter.svg";
import "../components/StyleCommon/TableManagerStyles.scss";
import { Data_ListTicket } from "../Data";
import iconSlicebar from "../assets/icon/slinebar.svg";
import { Options_UseStatus } from "../constant";
import SearchInput from "../components/InputCommon/SearchInput";

const TicketManager = () => {
  return (
    <MainLayout>
      <div className="px-[24px]">
        <h2 className="text-[30px] text-[#1E0D03] font-bold pt-[24px]">
          Danh sách vé
        </h2>

        <div className="flex items-center justify-between mt-[32px]">
          <SearchInput />
          <div className="flex items-center gap-[10px] text-[#FF993C] text-[16px] font-bold">
            <div className="flex items-center border border-[#FF993C] py-[8px] px-[14px] rounded-[6px] gap-[12px] cursor-pointer">
              <img className="w-[20px]" src={iconFillter} alt="" />
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

            {Data_ListTicket.map((val: any, index) => {
              return (
                <tr key={index} className="text-[12px] font-medium opacity-70">
                  <td className="text-center">{val.id}</td>
                  <td>{val.bookingCode}</td>
                  <td>{val.ticketNumber}</td>
                  <td>{val.nameEvent}</td>
                  <td>
                    {Options_UseStatus.map((item, ind) => {
                      return item.value === val.useStatus ? (
                        <div
                          key={ind}
                          className={`p-[8px] border rounded-[4px] text-[12px] font-medium w-auto
                          ${
                            val.useStatus === 1
                              ? "border-[#03AC00] text-[#03AC00] bg-[#DEF7E0]"
                              : ""
                          } 
                           ${
                             val.useStatus === 2
                               ? "border-[#919DBA] text-[#919DBA] bg-[#EAF1F8]"
                               : ""
                           } 
                          ${
                            val.useStatus === 3
                              ? "border-[#FD5959] text-[#FD5959] bg-[#F8EBE8]"
                              : ""
                          }`}
                        >
                          <i className="fas fa-circle mr-[9px] w-[8px] h-[8px]"></i>
                          {item.label}
                        </div>
                      ) : null;
                    })}
                  </td>
                  <td className="text-right">{val.useDate}</td>
                  <td className="text-right">{val.exportDate}</td>
                  <td>{val.checkin}</td>
                  <td>
                    <img src={iconSlicebar} alt="" />
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

export default TicketManager;
