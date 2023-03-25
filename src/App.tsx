import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import NotFound from "./components/NotFound";

const CMSTicketApp = React.lazy(() => import("./page"));

function App() {
  return (
    <div className="cms-ticket-app">
      <Suspense>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to={"/insight"} />}></Route>
            <Route path="/insight" element={<CMSTicketApp />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
