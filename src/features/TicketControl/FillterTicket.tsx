import { useState } from "react";
import "./FillterTicketStyles.scss";

interface FillterTicketInter {
  selectedControl: number;
  onChange: (e: any) => void;
}

const FillterTicket = ({ selectedControl, onChange }: FillterTicketInter) => {
  const [dateStartContract, setDateStartContract] = useState(
    new Date().toISOString().split("T")[0]
  );

  console.log("Check select", selectedControl);

  return (
    <div className="px-[20px] fillter-ticket">
      <h2 className="text-[16px] font-bold my-[25px]">Lọc vé</h2>
      <select className="w-full text-[14px] font-semibold bg-[#F1F4F8] rounded-[8px] px-2 placeholder-shown:border-gray-500 focus:outline-none h-[40px]">
        <option value={0}>Hội chợ triển lãm tiêu dùng 2021</option>
      </select>
      <div className="flex justify-between my-[20px]">
        <h2>Tình trạng đối soát</h2>
        <div className="radio-btn">
          <label className="form-control">
            <input
              type="radio"
              name="radio"
              checked={selectedControl == 0}
              onChange={onChange}
              value={0}
            />
            Tất cả
          </label>

          <label className="form-control">
            <input
              type="radio"
              name="radio"
              checked={selectedControl == 1}
              onChange={onChange}
              value={1}
            />
            Đã đối soát
          </label>
          <label className="form-control">
            <input
              type="radio"
              name="radio"
              checked={selectedControl == 2}
              onChange={onChange}
              value={2}
            />
            Chưa đối soát
          </label>
        </div>
      </div>

      <div className="flex items-center justify-between ">
        <h2 className="text-[#1E0D03] text-[14px] font-semibold ">Loại vé</h2>
        <div className="w-[40%]">
          <p className="text-left">Vé cổng</p>
        </div>
      </div>
      <div className="flex items-center justify-between my-[20px]">
        <label
          htmlFor="dateStartContract"
          className="text-[#1E0D03] text-[14px] font-semibold mr-4"
        >
          Từ ngày
        </label>

        <input
          id="dateStartContract"
          type="date"
          onChange={(e) => {
            setDateStartContract(e.target.value);
          }}
          value={dateStartContract}
          min={new Date().toISOString().split("T")[0]}
          className="rounded-[8px] bg-[#E0E0E0] text-[#A5A8B1] px-2 text-[14px] placeholder-shown:border-gray-500 focus:outline-none h-[40px] w-[40%]"
        ></input>
      </div>

      <div className="flex items-center justify-between my-[20px]">
        <label
          htmlFor="dateStartContract"
          className="text-[#1E0D03] text-[14px] font-semibold mr-4"
        >
          Đến ngày
        </label>

        <input
          id="dateStartContract"
          type="date"
          onChange={(e) => {
            setDateStartContract(e.target.value);
          }}
          value={dateStartContract}
          min={new Date().toISOString().split("T")[0]}
          className="rounded-[8px] bg-[#F7F8FB] text-[#A5A8B1] px-2 text-[14px] placeholder-shown:border-gray-500 focus:outline-none h-[40px] w-[40%]"
        ></input>
      </div>

      <div className="text-center text-[16px] cursor-pointer text-[#FF993C] font-bold border border-[#FF993C] py-[8px] px-[20px] w-[35%] rounded-[8px] mx-auto">
        Lọc
      </div>
    </div>
  );
};

export default FillterTicket;
