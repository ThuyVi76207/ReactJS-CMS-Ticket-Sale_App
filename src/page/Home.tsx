import { useState } from "react";
import MainLayout from "../layouts/MainLayout";

function Home() {
  let date = new Date().toISOString().split("T")[0];
  console.log();
  const [dateStartContract, setDateStartContract] = useState(date.slice(0, 7));

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
          <input
            type="month"
            onChange={(e) => {
              setDateStartContract(e.target.value);
            }}
            value={dateStartContract}
            className="dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white border border-[#E5E0E0] text-[14px] font-medium text-[#1E0D03] opacity-75 py-[9px] px-[12px] rounded-[4px]"
          />
        </div>
      </div>
    </MainLayout>
  );
}

export default Home;
