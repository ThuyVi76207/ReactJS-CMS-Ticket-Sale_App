import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../components/firebase/firebase-config";
import { hadleConvertsSecondsToDate } from "../../function/FormatDate";

const ListTicket = () => {
  const [listTickets, setListTickets] = useState<any[]>([]);
  const managerRef = collection(db, "ticket");

  useEffect(() => {
    const unscribe = onSnapshot(managerRef, (snapshot) => {
      let listTicket: any[] = [];
      snapshot.forEach((doc) => {
        listTicket.push({ ...doc.data(), id: doc.id });
      });
      setListTickets(listTicket);
    });
    return () => unscribe();
  }, []);

  return (
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
        {listTickets.map((val: any, index) => {
          return (
            <tr key={index} className="text-[12px] font-medium opacity-70">
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
                  <span className="text-[#A5A8B1]">Đã đối soát</span>
                ) : (
                  <span className="text-red-500">Chưa đối soát</span>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ListTicket;
