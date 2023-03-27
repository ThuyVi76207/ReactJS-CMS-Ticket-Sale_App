import Calendar from "../components/Calendar/Calendar";
import MainLayout from "../layouts/MainLayout";

function Home() {
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
          <Calendar />
        </div>
      </div>
    </MainLayout>
  );
}

export default Home;
