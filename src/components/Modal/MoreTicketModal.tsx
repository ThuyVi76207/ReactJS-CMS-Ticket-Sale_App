import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { removeModal } from "../../reducers/modal/moreTicketModalSlice";
import CommonInput from "../InputCommon/CommonInput";
import TimePicker from "react-time-picker";
import "./MoreTicketModalStyles.scss";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import ScheduleCommon from "../InputCommon/ScheduleCommon";

function MoreTicketModal() {
  const [value, setValue] = useState(); //new Date()
  const dispatch = useAppDispatch();
  const { title, rightButtonText } =
    useAppSelector((state) => state.moreTicketModal) || {};
  console.log("check titile", title, rightButtonText);

  const [nameTicket, setNameTicket] = useState("");
  const [dateStartContract, setDateStartContract] = useState();
  //new Date().toISOString().split("T")[0]
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

  console.log("Chekc time ", value);

  //   const handleRightButtonOnClick = async () => {
  //     if (!isValidated()) return;

  //     let data = {
  //       email: email,
  //       imageBase64: showImg,
  //       doctorId: patient.doctorId,
  //       patientId: patient.patientId,
  //       timeType: patient.timeType,
  //       language: language,
  //       patientName: patient.patientData.firstName,
  //     };

  //     setLoading(true);

  //     try {
  //       let res = await postSendPrescription(data);
  //       // console.log("Chwck ", res)
  //       if (res && res.errCode === 0) {
  //         setLoading(false);
  //         dispatch(
  //           addSuccessMessage({
  //             title: "Xác nhận thành công",
  //             content: "Đã khám bệnh nhân!!!!",
  //           })
  //         );
  //         window.location.reload();
  //       }
  //     } catch (error) {
  //       alert("Đã có lỗi xảy ra vui lòng thử lại sau!!!");
  //       console.log("Faild to get API send prescription");
  //     }
  //     handleCloseModal();
  //   };

  //   const convertBase64 = (file) => {
  //     return new Promise((resolve, reject) => {
  //       const fileReader = new FileReader();
  //       fileReader.readAsDataURL(file);

  //       fileReader.onload = () => {
  //         resolve(fileReader.result);
  //       };

  //       fileReader.onerror = (error) => {
  //         reject(error);
  //       };
  //     });
  //   };

  //   const handleImageUpload = async (e) => {
  //     if (e.target.files.length > 0) {
  //       const image = e.target.files[0];
  //       const base64 = await convertBase64(image);
  //       setShowImg(base64);
  //     }
  //   };
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
          </div>
        </div>
      </div>
    </>
  );
}

export default MoreTicketModal;
