import { Route, Routes } from "react-router-dom";
import DeviceManager from "./DeviceManager";
import Home from "./Home";
import ListEvent from "./ListEvent";
import ServicePackage from "./ServicePackage";
import SettingPage from "./SettingPage";
import TicketControl from "./TicketControl";
import TicketManager from "./TicketManager";
function CMSTicketApp() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/quan-ly-ve" element={<TicketManager />}></Route>
        <Route path="/doi-soat-ve" element={<TicketControl />}></Route>
        <Route path="/danh-sach-su-kien" element={<ListEvent />}></Route>
        <Route path="/quan-ly-thiet-bi" element={<DeviceManager />}></Route>
        <Route path="/cai-dat" element={<SettingPage />}></Route>
        <Route path="/goi-dich-vu" element={<ServicePackage />}></Route>
      </Routes>
    </>
  );
}

export default CMSTicketApp;
