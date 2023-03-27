import previous from "../../assets/icon/Previous.svg";
import next from "../../assets/icon/Next.svg";
import "./CalendarStyles.scss";
import { useEffect, useRef, useState } from "react";

const Calendar = () => {
  const [listDay, setListDay] = useState<number[]>([]);
  const [listLastDay, setListLastDay] = useState<number[]>([]);
  const [listFirstDay, setListFirstDay] = useState<number[]>([]);
  var isCurrentDay = useRef<string>("");

  //getting new date, current year and month
  let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();
  const [month, setMonth] = useState<number>(currMonth);
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

  useEffect(() => {
    const renderCalendar = () => {
      let arrDays: number[] = [];
      let arrLastDays: number[] = [];
      let arrFirstDay: number[] = [];

      let firstDateofMonth = new Date(currYear, month, 1).getDay(), //getting first day of month
        lastDateofMonth = new Date(currYear, month + 1, 0).getDate(), //getting last day of month
        lastDayofMonth = new Date(currYear, month, lastDateofMonth).getDay(),
        lastDateofLastMonth = new Date(currYear, month, 0).getDate(); //getting last date of month

      for (let i = firstDateofMonth; i > 0; i--) {
        arrLastDays.push(lastDateofLastMonth - i + 1);
      }

      for (let i = 1; i <= lastDateofMonth; i++) {
        i === new Date().getDate() &&
        month === new Date().getMonth() &&
        currYear === new Date().getFullYear()
          ? (isCurrentDay.current = "active")
          : (isCurrentDay.current = "");

        arrDays.push(i);
      }

      for (let i = lastDayofMonth; i < 6; i++) {
        arrFirstDay.push(i - lastDayofMonth + 1);
      }
      setListLastDay(arrLastDays);
      setListDay(arrDays);

      setListFirstDay(arrFirstDay);
    };
    renderCalendar();
  }, [month, currYear]);

  const onClickSetMonthPrev = () => {
    setMonth(month - 1);
  };

  const onClickSetMonthNext = () => {
    setMonth(month + 1);
  };
  console.log("check isToDay", isCurrentDay);

  return (
    <div className="wrapper">
      <header>
        <span onClick={onClickSetMonthPrev}>
          <img className="cursor-pointer" src={previous} alt="" />
        </span>

        <p className="current-date">{`${months[month]} ${currYear}`}</p>
        <span onClick={onClickSetMonthNext}>
          <img className="cursor-pointer" src={next} alt="" />
        </span>
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
          {listLastDay &&
            listLastDay.length > 0 &&
            listLastDay.map((item, index) => {
              return (
                <li className="inactive" key={index}>
                  {item}
                </li>
              );
            })}
          {listDay &&
            listDay.length > 0 &&
            listDay.map((item, index) => {
              return (
                <li className={`${isCurrentDay.current}`} key={index}>
                  {item}
                </li>
              );
            })}
          {listFirstDay &&
            listFirstDay.length > 0 &&
            listFirstDay.map((item, index) => {
              return (
                <li className="inactive" key={index}>
                  {item}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};
export default Calendar;
