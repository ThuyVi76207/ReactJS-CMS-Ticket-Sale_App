import SearchInput from "../components/InputCommon/SearchInput";
import Menu from "../components/Menu/Menu";
import Navbar from "../components/Navbar/Navbar";
import { Data_ListTicketControl } from "../Data";
import MainLayout from "../layouts/MainLayout";

const TicketControl = () => {
  return (
    <div className="bg-[#E5E5E5]">
      <div className="flex rounded-[24px] bg-[#F9F6F4]">
        <div className="w-[320px]">
          <Menu />
        </div>
        <div className="w-[1600px]">
          <Navbar />
          <div className="flex justify-between gap-[1%]">
            <div className=" w-[70%] bg-[#FFFFFF] rounded-[24px] mb-[32px] pb-[20px]">
              <div className="px-[24px]">
                <h2 className="text-[30px] text-[#1E0D03] font-bold pt-[24px]">
                  Đối soát vé
                </h2>
                <div className="flex items-center justify-between mt-[32px]">
                  <SearchInput />
                  <div></div>
                </div>

                <table className="mt-[30px] w-full pb-[54px]">
                  <tbody id="tableManager">
                    <tr>
                      <th>STT</th>
                      <th className="text-left">Số vé</th>
                      <th className="text-left">Tên sự kiện</th>
                      <th className="text-right">Ngày sử dụng</th>
                      <th>Loại vé</th>
                      <th className="text-left">Cổng check - in</th>
                      <th></th>
                    </tr>
                    {Data_ListTicketControl.map((val: any, index) => {
                      return (
                        <tr
                          key={index}
                          className="text-[14px] font-medium opacity-70"
                        >
                          <td className="text-center">{val.id}</td>
                          <td>{val.ticketNumber}</td>
                          <td>{val.nameEvent}</td>
                          <td className="text-right">{val.useDate}</td>
                          <td className="text-center">{val.typeTicket}</td>
                          <td>{val.checkin}</td>
                          <td></td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <div className=" w-[29%] bg-[#FFFFFF] rounded-[24px] mr-[24px] mb-[32px] pb-[20px] ">
              <div className="px-[20px]">
                <h2 className="text-[16px] font-bold my-[25px]">Lọc vé</h2>
                <select className="w-full text-[14px] font-semibold bg-[#F1F4F8] rounded-[8px] px-2 placeholder-shown:border-gray-500 focus:outline-none h-[40px]">
                  <option value={0}>Hội chợ triển lãm tiêu dùng 2021</option>
                </select>
                <div className="flex">
                  <h2>Tình trạng đối soát</h2>
                  <div className="radio-btn my-[20px]">
                    <label className="form-control">
                      <input type="radio" name="radio" defaultChecked />
                      Tất cả
                    </label>

                    <label className="form-control">
                      <input type="radio" name="radio" />
                      Đã đối soát
                    </label>
                    <label className="form-control">
                      <input type="radio" name="radio" defaultChecked />
                      Chưa đối soát
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketControl;
