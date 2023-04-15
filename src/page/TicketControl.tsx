import { useState } from "react";
import SearchInput from "../components/InputCommon/SearchInput";
import Menu from "../components/Menu/Menu";
import Navbar from "../components/Navbar/Navbar";
import FillterTicket from "../features/TicketControl/FillterTicket";
import ListTicket from "../features/TicketControl/ListTicket";

const TicketControl = () => {
  const [selectedControl, setSelectedControl] = useState<number>(0);
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
                <ListTicket fillterValue={selectedControl} />
              </div>
            </div>
            <div className=" w-[29%] bg-[#FFFFFF] rounded-[24px] mr-[24px] mb-[32px] pb-[20px] ">
              <FillterTicket
                selectedControl={selectedControl}
                onChange={(e: any) => setSelectedControl(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketControl;
