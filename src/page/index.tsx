import { Route, Routes } from "react-router-dom";
import Home from "./Home";
function CMSTicketApp() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default CMSTicketApp;
