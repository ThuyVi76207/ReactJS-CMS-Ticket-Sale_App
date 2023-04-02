import { useState } from "react";
import Calendar from "../components/Calendar/Calendar";
import MainLayout from "../layouts/MainLayout";
import LineChart from "../features/Home/LineChart";
import DoughnutChart from "../features/Home/DoughnutChart";
import fiCalendar from "../assets/icon/fi_calendar.svg";

let date = new Date(),
  currYear = date.getFullYear(),
  currMonth = date.getMonth();

function Home() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [packageFamily, setPackageFamily] = useState<number[]>([13568, 56024]);
  const [packageEvent, setPackageEvent] = useState<number[]>([28302, 30256]);
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
      <div className="ml-[24px] mr-[63px]">
        <h2 className="text-[30px] text-[#1E0D03] font-bold w-[178px] pt-[24px] ">
          Thống kê
        </h2>
        <div className="mt-[32px] mb-[20px] flex items-center justify-between">
          <h2 className="text-[18px] text-[#1E0D03] font-semibold">
            Doanh thu
          </h2>
          <div
            className="border border-[#E5E0E0] rounded-[4px] py-[8px] px-[12px] cursor-pointer flex items-center"
            onClick={() => setShowCalendar(!showCalendar)}
          >
            <p className="current-date">{`${months[currMonth]}, ${currYear}`}</p>
            <img className="ml-2" src={fiCalendar} alt="" />
          </div>
        </div>
        <LineChart />
        <div className="my-[40px]">
          <h2 className="text-[14px] opacity-50 font-medium">
            Tổng doanh thu theo tuần
          </h2>
          <h2 className="text-[20px] font-bold">
            525.145.000<span className="text-[14px] "> đồng</span>
          </h2>
        </div>
        <div className="flex justify-between">
          <div>
            <div
              className="border border-[#E5E0E0] rounded-[4px] py-[8px] px-[12px] cursor-pointer flex items-center"
              onClick={() => setShowCalendar(!showCalendar)}
            >
              <p className="current-date">{`${months[currMonth]}, ${currYear}`}</p>
              <img className="ml-2" src={fiCalendar} alt="" />
            </div>
          </div>
          <div>
            <h2 className="text-[18px] font-semibold text-[#1E0D03] text-center">
              Gói gia đình
            </h2>
            <DoughnutChart datachart={packageFamily} />
          </div>
          <div>
            <h2 className="text-[18px] font-semibold text-[#1E0D03] text-center">
              Gói sự kiện
            </h2>
            <DoughnutChart datachart={packageEvent} />
          </div>

          <div>
            <div className="flex items-center">
              <div className="w-[44px] h-[20px] rounded-[4px] my-2 bg-[#4F75FF] mr-2"></div>
              <span>Vé đã sử dụng</span>
            </div>
            <div className="flex items-center">
              <div className="w-[44px] h-[20px] rounded-[4px] my-2 bg-[#FF8A48] mr-2"></div>
              <span>Vé chưa sử dụng</span>
            </div>
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
