import SearchInput from "../components/InputCommon/SearchInput";
import { Data_ListTicketControl } from "../Data";
import MainLayout from "../layouts/MainLayout";

const TicketControl = () => {
  return (
    <MainLayout>
      <div className="px-[24px]">
        <h2 className="text-[36px] text-[#1E0D03] font-bold pt-[24px]">
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
                <tr key={index} className="text-[14px] font-medium opacity-70">
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
    </MainLayout>
  );
};

export default TicketControl;
