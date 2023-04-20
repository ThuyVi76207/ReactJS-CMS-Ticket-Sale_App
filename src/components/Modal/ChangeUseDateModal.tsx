import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { removeChangeModal } from "../../reducers/modal/changeUsedateModalSlice";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase-config";
import { hadleConvertsSecondsToDate } from "../../function/FormatDate";

const ChangeUseDateModal = () => {
  const dispatch = useAppDispatch();

  const { title, rightButtonText, data } = useAppSelector(
    (state) => state.changeUsedateModal
  );

  const [useDateContract, setUseDateContract] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [idDoc, setIdDoc] = useState("");

  console.log(title, rightButtonText, data);

  useEffect(() => {
    if (!data.useDate) return;
    setIdDoc(data.id);
    let m = new Date(
      data.useDate.seconds * 1000 + data.useDate.nanoseconds / 1000000
    );
    let format = new Date(m).getTime() + 25200000;

    setUseDateContract(new Date(format).toISOString().split("T")[0]);
    // console.log("Check seconds", format);
    // setUseDateContract();
  }, [data]);

  const handleCloseModal = () => {
    dispatch(removeChangeModal());
  };
  const handleOnSubmitUpdateForm = async (e: any) => {
    e.preventDefault();
    console.log(new Date(useDateContract));

    const docRef = doc(db, "ticket", idDoc);

    const dataFB = {
      bookingCode: data.bookingCode,
      checkin: data.checkin,
      control: data.control,
      exportDate: data.exportDate, //
      id: data.id,
      nameEvent: data.nameEvent,
      nameTicket: data.nameTicket,
      ticketNumber: data.ticketNumber,
      useDate: new Date(useDateContract), //
      useStatus: Number(data.useStatus),
    };

    setDoc(docRef, dataFB)
      .then((docRef) => {
        console.log("Entire Document has been updated successfully");
        handleCloseModal();
      })
      .catch((error) => {
        handleCloseModal();
        alert("Có lỗi xảy ra vui lòng thử lại sau!!!");
        console.log(error);
      });
  };

  if (!title) return null;

  return (
    <>
      <div
        className=" fixed top-0 left-0 w-full h-screen bg-black bg-opacity-80 z-50 bg-blur"
        onClick={handleCloseModal}
      ></div>
      <div
        id="defaultModal"
        className={`animate__animated animate__bounceIn fixed top-0 right-0 left-0 bottom-0 m-auto z-50 w-full xl:w-[758px] h-[365px]`}
      >
        <div className="relative w-full h-full">
          <div className="relative bg-white h-full rounded-[16px] px-[20px]">
            <form onSubmit={handleOnSubmitUpdateForm}>
              <h2 className="text-[24px] text-center font-bold pt-[24px]">
                {title}
              </h2>
              <div className="ml-[32px] mt-[27px] flex flex-col gap-[17px]">
                <div className="flex gap-[140px]">
                  <h2 className="text-[16px] font-semibold opacity-70">
                    Số vé
                  </h2>
                  <h2 className="text-[16px] font-medium opacity-70">
                    {data.ticketNumber}
                  </h2>
                </div>
                <div className="flex gap-[130px]">
                  <h2 className="text-[16px] font-semibold opacity-70">
                    Tên vé
                  </h2>
                  <h2 className="text-[16px] font-medium opacity-70">
                    {data.nameTicket}
                  </h2>
                </div>
                <div className="flex gap-[90px]">
                  <h2 className="text-[16px] font-semibold opacity-70">
                    Tên sự kiện
                  </h2>
                  <h2 className="text-[16px] font-medium opacity-70">
                    {data.nameEvent}
                  </h2>
                </div>
                <div className="flex gap-[78px]">
                  <h2 className="text-[16px] font-semibold opacity-70">
                    Hạn sử dụng
                  </h2>
                  <input
                    id="dateStartContract"
                    type="date"
                    onChange={(e) => {
                      setUseDateContract(e.target.value);
                    }}
                    value={useDateContract}
                    // min={new Date().toISOString().split("T")[0]}
                    className="rounded-[8px] bg-[#E0E0E0] text-[#A5A8B1] px-2 text-[14px] placeholder-shown:border-gray-500 focus:outline-none h-[40px] w-[25%]"
                  ></input>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 mt-8">
                <div
                  onClick={handleCloseModal}
                  className="cursor-pointer text-[18px] font-bold py-[10px] rounded-[8px] px-[20px] w-[160px] text-center text-[#FF993C] bg-white border border-[#FF993C]"
                >
                  Huỷ
                </div>
                <button
                  type="submit"
                  className="cursor-pointer text-[18px] font-bold py-[10px] rounded-[8px] px-[20px] w-[160px] text-center text-white bg-[#FF993C]"
                >
                  Lưu
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangeUseDateModal;
