import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../hooks";
import CommonInput from "../InputCommon/CommonInput";
import TimePicker from "react-time-picker";
import "./MoreTicketModalStyles.scss";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import ScheduleCommon from "../InputCommon/ScheduleCommon";
import { removeUpdateModal } from "../../reducers/modal/updateTicketModalSlice";

function UpdateTicketModal() {
  const [value, setValue] = useState(); //new Date()
  const dispatch = useAppDispatch();
  const { title, rightButtonText } =
    useAppSelector((state) => state.updateTicketModal) || {};
  console.log("check titile", title, rightButtonText);

  const [idEvent, setIdEvent] = useState("");
  const [nameEvent, setNameEvent] = useState("");
  const [dateStartContract, setDateStartContract] = useState();
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

  console.log("Chekc time ", value);

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
                        setDateStartContract(e.target.value)
                      }
                      date={dateStartContract}
                    />
                  </div>
                  <div>
                    <TimePicker
                      onChange={(e: any) => setValue(e)}
                      value={value}
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
                        setDateStartContract(e.target.value)
                      }
                      date={dateStartContract}
                    />
                  </div>
                  <div>
                    <TimePicker
                      onChange={(e: any) => setValue(e)}
                      value={value}
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
                  <input type="checkbox" id="oddticket" />
                  <label htmlFor="oddticket">Vé lẻ (vnđ/vé) với giá</label>
                </div>
                <div className="flex gap-2 items-center">
                  <input
                    className="bg-[#F1F4F8] rounded-[8px] px-[10px] py-[6px] outline-none w-[148px]"
                    type="number"
                    placeholder="Giá vé"
                  />
                  <label>/ vé</label>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-3">
                <div className="form-group">
                  <input type="checkbox" id="comboticket" />
                  <label htmlFor="comboticket">Combo vé với giá</label>
                </div>
                <div className="flex gap-2 items-center">
                  <input
                    className="bg-[#F1F4F8] rounded-[8px] px-[10px] py-[6px] outline-none w-[148px]"
                    type="number"
                    placeholder="Giá vé"
                  />
                  <label>/</label>
                  <input
                    className="bg-[#F1F4F8] rounded-[8px] px-[10px] py-[6px] outline-none w-[120px]"
                    type="number"
                    placeholder="Số vé"
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
                <option value={1}>Chưa áp dụng</option>
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
              <div className="cursor-pointer text-[18px] font-bold py-[10px] rounded-[8px] px-[20px] w-[160px] text-center text-white bg-[#FF993C]">
                Lưu
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateTicketModal;
