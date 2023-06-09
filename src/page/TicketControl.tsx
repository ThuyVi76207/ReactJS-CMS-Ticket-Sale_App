import { useEffect, useState } from "react";
import SearchInput from "../components/InputCommon/SearchInput";
import Menu from "../components/Menu/Menu";
import Navbar from "../components/Navbar/Navbar";
import FillterTicket from "../features/TicketControl/FillterTicket";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../components/firebase/firebase-config";
import { hadleConvertsSecondsToDate } from "../function/FormatDate";
import { Pagination } from "@material-ui/lab";
import usePagination from "../hooks/Pagination";

const managerRef = collection(db, "ticket");
// const all = query(managerRef, where("useDate", "!=", ""));
const q = query(
  managerRef,

  where("control", "==", true)
);
const p = query(
  managerRef,

  where("control", "==", false)
);

const TicketControl = () => {
  const [selectedControl, setSelectedControl] = useState<number>(0);
  const [listTickets, setListTickets] = useState<any[]>([]);
  const [searchKey, setSearchKey] = useState("");

  let [page, setPage] = useState(1);
  const PER_PAGE = 7;
  const count = Math.ceil(listTickets.length / PER_PAGE);
  const _DATA = usePagination(listTickets, PER_PAGE);

  const handleChange = (e: any, p: number) => {
    setPage(p);
    _DATA.jump(p);
  };

  const fillAll = () => {
    const unscribe = onSnapshot(managerRef, (snapshot) => {
      let listTicket: any[] = [];
      snapshot.forEach((doc) => {
        listTicket.push({ ...doc.data(), id: doc.id });
      });
      setListTickets(listTicket);
    });
    return () => unscribe();
  };

  const fillNoControl = () => {
    const unscribe = onSnapshot(p, (snapshot) => {
      let listTicket: any[] = [];
      snapshot.forEach((doc) => {
        listTicket.push({ ...doc.data(), id: doc.id });
      });
      setListTickets(listTicket);
    });
    return () => unscribe();
  };

  const fillControl = () => {
    const unscribe = onSnapshot(q, (snapshot) => {
      let listTicket: any[] = [];
      snapshot.forEach((doc) => {
        listTicket.push({ ...doc.data(), id: doc.id });
      });
      setListTickets(listTicket);
    });
    return () => unscribe();
  };

  useEffect(() => {
    switch (Number(selectedControl)) {
      case 0:
        fillAll();
        break;
      case 1:
        fillControl();
        break;
      case 2:
        fillNoControl();
        break;

      default:
        fillAll();
        break;
    }
  }, [selectedControl]);
  console.log("Check list tickets", listTickets);

  const searchBlog = (e: any) => {
    e.preventDefault();
    setListTickets(
      listTickets.filter((item) =>
        item.ticketNumber.toLowerCase().includes(searchKey.toLowerCase())
      )
    );
  };

  const handleFillter =
    (start: string, end: string) => (e: React.MouseEvent) => {
      let _start = new Date(start);
      let _end = new Date(end);
      const t = query(
        managerRef,
        where("useDate", ">", _start),
        where("useDate", "<", _end)
      );
      console.log("Check start", start, end);
      const unscribe = onSnapshot(t, (snapshot) => {
        let listTicket: any[] = [];
        snapshot.forEach((doc) => {
          listTicket.push({ ...doc.data(), id: doc.id });
        });
        setListTickets(listTicket);
      });
      return () => unscribe();
    };

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
                  <SearchInput
                    onSubmit={(e: any) => searchBlog(e)}
                    onChange={(e: any) => setSearchKey(e.target.value)}
                  />
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
                    {_DATA.currentData().map((val: any, index: number) => {
                      return (
                        <tr
                          key={index}
                          className="text-[12px] font-medium opacity-70"
                        >
                          <td className="text-center">{index + 1}</td>
                          <td>{val.ticketNumber}</td>
                          <td>{val.nameEvent}</td>
                          <td className="text-right">
                            {val.useDate
                              ? hadleConvertsSecondsToDate(
                                  val.useDate.seconds,
                                  val.useDate.nanoseconds
                                )
                              : null}
                          </td>
                          <td className="text-center">{val.nameTicket}</td>
                          <td>{val.checkin ? val.checkin : "-"}</td>
                          <td className="italic">
                            {val.control === true ? (
                              <span className="text-[#A5A8B1]">
                                Đã đối soát
                              </span>
                            ) : (
                              <span className="text-red-500">
                                Chưa đối soát
                              </span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <div className="mt-[54px]">
                  <div className="w-[25%] mx-auto">
                    <Pagination
                      count={count}
                      size="large"
                      page={page}
                      // variant="outlined"
                      shape="rounded"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-[29%] bg-[#FFFFFF] rounded-[24px] mr-[24px] mb-[32px] pb-[20px] ">
              <FillterTicket
                selectedControl={selectedControl}
                onChange={(e: any) => setSelectedControl(e.target.value)}
                handleFillter={handleFillter}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketControl;
