interface ScheduleCommon {
  //   field: string;
  onChange: any;
  date: any;
  type?: string;
}
const ScheduleCommon = ({
  //   field,
  onChange,
  date,
  type = "date",
}: ScheduleCommon) => {
  return (
    <div className="pb-5 w-full">
      {/* <label className="text-[20px] font-bold" htmlFor="date">
        {field}
      </label> */}
      {/* <span className="text-red-600 text-[20px]">*</span> */}
      <input
        id="date"
        type={type}
        onChange={onChange}
        value={date}
        min={new Date().toISOString().split("T")[0]}
        className="rounded-[8px] border border-[#A5A8B1] placeholder-shown:border-[#A5A8B1] placeholder:opacity-70 focus:outline-none h-[40px] w-full px-3"
      ></input>
    </div>
  );
};

export default ScheduleCommon;
