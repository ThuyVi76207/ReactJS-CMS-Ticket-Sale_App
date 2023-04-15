import { useEffect, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../components/firebase/firebase-config";
import { hadleConvertsSecondsToDate } from "../../function/FormatDate";

interface ListTicketFill {
  fillterValue: number;
}
const managerRef = collection(db, "ticket");
const q = query(managerRef, where("control", "==", true));
const p = query(managerRef, where("control", "==", false));

const ListTicket = ({ fillterValue }: ListTicketFill) => {
  console.log("Chekc fill", typeof fillterValue);
  const [listTickets, setListTickets] = useState<any[]>([]);

  // useEffect(() => {
  //   if (fillterValue === 0) {
  //     const unscribe = onSnapshot(managerRef, (snapshot) => {
  //       let listTicket: any[] = [];
  //       snapshot.forEach((doc) => {
  //         listTicket.push({ ...doc.data(), id: doc.id });
  //       });
  //       setListTickets(listTicket);
  //     });
  //     return () => unscribe();
  //   } else if (fillterValue === 1) {
  //     const unscribe = onSnapshot(p, (snapshot) => {
  //       let listTicket: any[] = [];
  //       snapshot.forEach((doc) => {
  //         listTicket.push({ ...doc.data(), id: doc.id });
  //       });
  //       setListTickets(listTicket);
  //     });
  //     return () => unscribe();
  //   } else if (fillterValue === 2) {
  //     const unscribe = onSnapshot(q, (snapshot) => {
  //       let listTicket: any[] = [];
  //       snapshot.forEach((doc) => {
  //         listTicket.push({ ...doc.data(), id: doc.id });
  //       });
  //       setListTickets(listTicket);
  //     });
  //     return () => unscribe();
  //   }
  // }, [fillterValue, managerRef]);

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
    switch (Number(fillterValue)) {
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
  }, [fillterValue]);

  console.log("Check list tickets", listTickets);

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
