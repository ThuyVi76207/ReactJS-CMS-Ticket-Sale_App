import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import CommonInput from "../InputCommon/CommonInput";
import TimePicker from "react-time-picker";
import "./MoreTicketModalStyles.scss";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import ScheduleCommon from "../InputCommon/ScheduleCommon";
import { removeUpdateModal } from "../../reducers/modal/updateTicketModalSlice";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase-config";
import { Options_ControlStatus } from "../../constant";
import { handleConvertsSecondToTime } from "../../function/FormatDate";

function UpdateTicketModal() {
  // const [value, setValue] = useState(); //new Date()
  const dispatch = useAppDispatch();
  const { title, rightButtonText, data } =
    useAppSelector((state) => state.updateTicketModal) || {};
  console.log("check titile", title, rightButtonText, data);

  const [idEvent, setIdEvent] = useState("");
  const [nameEvent, setNameEvent] = useState("");

  const [dateStartContractUse, setDateStartContractUse] = useState(
    data.dateStartContractUse
  );
  const [dateStartContractExport, setDateStartContractExport] = useState(
    data.dateStartContractExport
  );

  const [oddticket, setOddticket] = useState(false);
  const [priceOdd, setPriceOdd] = useState<number>(data.priceOdd);
  const priceOddRef = useRef<number>(0);

  const [oddticketCombo, setOddticketCombo] = useState(false);
  const [priceCombo, setPriceCombo] = useState<number>(data.priceCombo);
  const [numberTicket, setNumberTicket] = useState<number>(data.numberTicket);
  const priceComboRef = useRef<number>(0);
  const numberTicketRef = useRef<number>(0);
  const [status, setStatus] = useState<number>(1);
  const [valueTimeUse, setValueTimeUse] = useState();
  // handleConvertsSecondToTime(
  //   data.valueTimeUse?.seconds,
  //   data.valueTimeUse?.nanoseconds
  // ) //new Date()
  const [valueTimeExport, setValueTimeExport] = useState(new Date());

  const docRef = doc(db, "comboticket", "M40b6S82xCPyTJRaMECa");
  //new Date().toISOString().split("T")[0]
  const [error, setError] = useState({
    idEvent: "",
  });

  const isValidated = () => {
    let validated = true;
    let _error = {
      idEvent: "",
    };
    if (idEvent === "") {
      validated = false;
      _error.idEvent = "Vui lòng nhập tên vé";
    }

    setError(_error);
    return validated;
  };

  const handleCloseModal = () => {
    dispatch(removeUpdateModal(null));
  };

  const handleOnSubmitUpdateForm = async (e: any) => {
    e.preventDefault();

    if (!isValidated()) return;

    const data = {
      // idCombo: idPackageConvert,
      // nameTicket: nameTicket,
      dateStartContractUse: dateStartContractUse,
      valueTimeUse: valueTimeUse,
      dateStartContractExport: dateStartContractExport,
      valueTimeExport: valueTimeExport,
      priceOdd: priceOddRef.current,
      priceCombo: priceComboRef.current,
      numberTicket: numberTicketRef.current,
      status: Number(status),

      idEvent: idEvent,
      nameEvent: nameEvent,
    };

    setDoc(docRef, data)
      .then((docRef) => {
        console.log("Entire Document has been updated successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    if (!oddticket) {
      priceOddRef.current = 0;
    } else {
      priceOddRef.current = priceOdd;
    }
    console.log("Check oddticket", priceOddRef.current, oddticket);
  }, [oddticket, priceOdd]);

  const handleThirdPartyTicketOnChange = () => {
    setOddticket(!oddticket);
  };

  useEffect(() => {
    if (!oddticketCombo) {
      priceComboRef.current = 0;
      numberTicketRef.current = 0;
    } else {
      priceComboRef.current = priceCombo;
      numberTicketRef.current = numberTicket;
    }
    console.log(
      "Check combo oddticket",

      priceComboRef.current,
      oddticketCombo,
      numberTicketRef.current
    );
  }, [oddticketCombo, priceCombo, numberTicket]);

  const handleThirdPartyComboTicketOnChange = () => {
    setOddticketCombo(!oddticketCombo);
  };

  // console.log("Chekc time ", value);

  if (!title) return null;
  return (
    <>
      <div
        className=" fixed top-0 left-0 w-full h-screen bg-black bg-opacity-80 z-50 bg-blur"
        onClick={handleCloseModal}
      ></div>
      <div
        id="defaultModal"
        className={`animate__animated animate__bounceIn fixed top-0 right-0 left-0 bottom-0 m-auto z-50 w-full xl:w-[758px] h-[628px]`}
      >
        <div className="relative w-full h-full">
          <div className="relative bg-white h-full rounded-[16px] px-[20px]">
            <form onSubmit={handleOnSubmitUpdateForm}>
              <h2 className="text-[24px] text-center font-bold pt-[24px]">
                {title}
              </h2>
              <div className="flex justify-between my-[30px]">
                <div className="w-[47%]">
                  <CommonInput
                    name="idEvent"
                    field="Mã sự kiện"
                    value={idEvent}
                    onChange={(e: any) => setIdEvent(e.target.value)}
                    maxLength={100}
                    placeholder="Nhập mã sự kiện"
                    error={error.idEvent}
                    required
                  />
                </div>
                <div className="w-[47%]">
                  <CommonInput
                    name="idEvent"
                    field="Tên sự kiện"
                    value={nameEvent}
                    onChange={(e: any) => setNameEvent(e.target.value)}
                    maxLength={100}
                    placeholder="Nhập mã sự kiện"
                  />
                </div>
              </div>

              <div className="flex items-center gap-[25px]">
                <div>
                  <h2 className="text-[16px] font-semibold opacity-70">
                    Ngày áp dụng
                  </h2>
                  <div className="flex gap-[10px] mt-2">
                    <div className="w-[47%]">
                      <ScheduleCommon
                        onChange={(e: any) =>
                          setDateStartContractUse(e.target.value)
                        }
                        date={dateStartContractUse}
                      />
                    </div>
                    <div>
                      <TimePicker
                        onChange={(e: any) => setValueTimeUse(e)}
                        value={valueTimeUse}
                        format={"HH:mm:ss"}
                        hourPlaceholder="HH"
                        minutePlaceholder="mm"
                        secondPlaceholder="ss"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-[16px] font-semibold opacity-70">
                    Ngày hết hạn
                  </h2>
                  <div className="flex gap-[10px] mt-2">
                    <div className="w-[47%]">
                      <ScheduleCommon
                        onChange={(e: any) =>
                          setDateStartContractExport(e.target.value)
                        }
                        date={dateStartContractExport}
                      />
                    </div>
                    <div>
                      <TimePicker
                        onChange={(e: any) => setValueTimeExport(e)}
                        value={valueTimeExport}
                        format={"HH:mm:ss"}
                        hourPlaceholder="HH"
                        minutePlaceholder="mm"
                        secondPlaceholder="ss"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="price-ticket">
                <h2 className="text-[16px] font-semibold opacity-70">
                  Giá vé áp dụng
                </h2>

                <div className="flex items-center gap-2 mt-2">
                  <div className="form-group">
                    <input
                      type="checkbox"
                      id="oddticket"
                      checked={oddticket}
                      onChange={handleThirdPartyTicketOnChange}
                    />
                    <label htmlFor="oddticket">Vé lẻ (vnđ/vé) với giá</label>
                  </div>
                  <div className="flex gap-2 items-center">
                    <input
                      className="bg-[#c0d6f3] rounded-[8px] px-[10px] py-[6px] outline-none w-[148px]"
                      type="number"
                      placeholder="Giá vé"
                      value={priceOdd}
                      onChange={(e: any) => setPriceOdd(e.target.value)}
                    />
                    <label>/ vé</label>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-3">
                  <div className="form-group">
                    <input
                      type="checkbox"
                      id="comboticket"
                      checked={oddticketCombo}
                      onChange={handleThirdPartyComboTicketOnChange}
                    />
                    <label htmlFor="comboticket">Combo vé với giá</label>
                  </div>
                  <div className="flex gap-2 items-center">
                    <input
                      className="bg-[#F1F4F8] rounded-[8px] px-[10px] py-[6px] outline-none w-[148px]"
                      type="number"
                      placeholder="Giá vé"
                      value={priceCombo}
                      onChange={(e: any) => setPriceCombo(e.target.value)}
                    />
                    <label>/</label>
                    <input
                      className="bg-[#F1F4F8] rounded-[8px] px-[10px] py-[6px] outline-none w-[120px]"
                      type="number"
                      placeholder="Số vé"
                      value={numberTicket}
                      onChange={(e: any) => setNumberTicket(e.target.value)}
                    />
                    <label>vé</label>
                  </div>
                </div>
              </div>

              <div className="mt-[25px]">
                <h2 className="text-[16px] font-semibold opacity-70">
                  Tình trạng
                </h2>
                <select
                  onChange={(e: any) => {
                    setStatus(e.target.value);
                  }}
                  value={status}
                  className="border border-[#A5A8B1] py-[8px] px-[12px] rounded-[8px] outline-none mt-2"
                >
                  {Options_ControlStatus.map((option) => (
                    <option value={option.value} key={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <p className=" italic mt-[10px]">
                <span className="text-red-500 mr-1 opacity-100 text-[16px] font-semibold">
                  *
                </span>
                <span className="text-[12px] opacity-40 font-normal ">
                  là thông tin bắt buộc
                </span>
              </p>
              <div className="flex items-center justify-center gap-4 mt-4">
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
}

export default UpdateTicketModal;
