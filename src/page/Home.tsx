import { useState } from "react";
import Calendar from "../components/Calendar/Calendar";
import MainLayout from "../layouts/MainLayout";

let date = new Date(),
  currYear = date.getFullYear(),
  currMonth = date.getMonth();

function Home() {
  const [showCalendar, setShowCalendar] = useState(false);
  const months = [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
  ];
  return (
    <MainLayout>
      <div>
        <h2 className="text-[36px] text-[#1E0D03] font-bold w-[178px] pt-[24px] ml-[24px]">
          Thống kê
        </h2>
        <div className="mt-[32px] ml-[24px] mr-[63px] flex items-center justify-between">
          <h2 className="text-[18px] text-[#1E0D03] font-semibold">
            Doanh thu
          </h2>
          <div
            className="border border-[#E5E0E0] rounded-[4px] py-[8px] px-[12px] cursor-pointer"
            onClick={() => setShowCalendar(!showCalendar)}
          >
            <p className="current-date">{`${months[currMonth]}, ${currYear}`}</p>
          </div>
        </div>
        {showCalendar ? (
          <div className="absolute top-[35%] right-[5%]">
            <Calendar />
          </div>
        ) : null}
      </div>
    </MainLayout>
  );
}

export default Home;
