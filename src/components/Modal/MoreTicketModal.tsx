import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { removeModal } from "../../reducers/modal/moreTicketModalSlice";
import CommonInput from "../InputCommon/CommonInput";
import TimePicker from "react-time-picker";
import "./MoreTicketModalStyles.scss";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import ScheduleCommon from "../InputCommon/ScheduleCommon";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebase-config";
import { v4 as uuid } from "uuid";

function MoreTicketModal() {
  const comboTicketRef = collection(db, "comboticket");

  const [valueTimeUse, setValueTimeUse] = useState(new Date()); //new Date()
  const [valueTimeExport, setValueTimeExport] = useState(new Date());
  const dispatch = useAppDispatch();
  const { title, rightButtonText } =
    useAppSelector((state) => state.moreTicketModal) || {};
  console.log("check titile", title, rightButtonText);

  const [nameTicket, setNameTicket] = useState("");
  const [dateStartContractUse, setDateStartContractUse] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [dateStartContractExport, setDateStartContractExport] = useState(
    new Date().toISOString().split("T")[0]
  );

  const [oddticket, setOddticket] = useState(false);
  const [priceOdd, setPriceOdd] = useState<number>(0);
  const priceOddRef = useRef<number>(0);

  const [oddticketCombo, setOddticketCombo] = useState(false);
  const [priceCombo, setPriceCombo] = useState<number>(0);
  const [numberTicket, setNumberTicket] = useState<number>(0);
  const priceComboRef = useRef<number>(0);
  const numberTicketRef = useRef<number>(0);

  const [error, setError] = useState({
    nameTicket: "",
  });

  const isValidated = () => {
    let validated = true;
    let _error = {
      nameTicket: "",
    };
    if (nameTicket === "") {
      validated = false;
      _error.nameTicket = "Vui lòng nhập tên vé";
    }

    setError(_error);
    return validated;
  };

  const handleCloseModal = () => {
    dispatch(removeModal(null));
  };

  // console.log("Chekc time ", value);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!isValidated()) return;

    await addDoc(comboTicketRef, {
      idCombo: uuid(),
      nameTicket: nameTicket,
      dateStartContractUse: dateStartContractUse,
      valueTimeUse: valueTimeUse,
      dateStartContractExport: dateStartContractExport,
      valueTimeExport: valueTimeExport,
      priceOdd: priceOddRef.current,
      priceCombo: priceComboRef.current,
      numberTicket: numberTicketRef.current,
    });
  };

  const handleThirdPartyTicketOnChange = () => {
    if (!oddticket) {
      priceOddRef.current = 0;
    } else {
      priceOddRef.current = priceOdd;
    }
    setOddticket(!oddticket);
    console.log("Check oddticket", priceOddRef.current, oddticket);
  };

  const handleThirdPartyComboTicketOnChange = () => {
    if (!oddticketCombo) {
      priceComboRef.current = 0;
      numberTicketRef.current = 0;
    } else {
      priceComboRef.current = priceCombo;
      numberTicketRef.current = numberTicket;
    }
    setOddticketCombo(!oddticketCombo);
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
        className={`animate__animated animate__bounceIn fixed top-0 right-0 left-0 bottom-0 m-auto z-50 w-full xl:w-[758px] h-[628px]`}
      >
        <div className="relative w-full h-full">
          <div className="relative bg-white h-full rounded-[16px] px-[20px]">
            <form onSubmit={handleSubmit}>
              <h2 className="text-[24px] text-center font-bold pt-[24px]">
                {title}
              </h2>
              <div className="w-[45%] my-[30px]">
                <CommonInput
                  name="nameTicket"
                  field="Tên gói vé"
                  value={nameTicket}
                  onChange={(e: any) => setNameTicket(e.target.value)}
                  maxLength={100}
                  placeholder="Nhập tên gói vé"
                  error={error.nameTicket}
                  required
                />
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
                <select className="border border-[#A5A8B1] py-[8px] px-[12px] rounded-[8px] outline-none mt-2">
                  <option value={0}>Đang áp dụng</option>
                  <option value={1}>Tắt</option>
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

export default MoreTicketModal;
