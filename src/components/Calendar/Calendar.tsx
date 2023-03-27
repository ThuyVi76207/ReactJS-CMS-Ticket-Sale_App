import previous from "../../assets/icon/Previous.svg";
import next from "../../assets/icon/Next.svg";
import "./CalendarStyles.scss";
const Calendar = () => {
  //getting new date, current year and month
  let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();

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

  let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(); //getting last date of month
  let arrDays = [];

  for (let i = 1; i <= lastDateofMonth; i++) {
    arrDays.push(i);
  }

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // });

  return (
    <div className="wrapper">
      <header>
        <img className="cursor-pointer" src={previous} alt="" />
        <p className="current-date">{`${months[currMonth]} ${currYear}`}</p>
        <img className="cursor-pointer" src={next} alt="" />
      </header>
      <div className="calendar">
        <ul className="weeks">
          <li>T2</li>
          <li>T3</li>
          <li>T4</li>
          <li>T5</li>
          <li>T6</li>
          <li>T7</li>
          <li>CN</li>
        </ul>
        <ul className="days">
          {arrDays.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
export default Calendar;
