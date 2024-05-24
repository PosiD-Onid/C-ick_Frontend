import React from "react";
import { Routes, Route } from "react-router-dom";
import Tpage from "./components/TeacherPage/TeacherPage";
import ListPage from "./components/ScheduleInquiryPage/scheduleInquiryPage";
import Correction from "./components/CorrectionPage/CorrectionPage";

function Router() {
  return (
    <Routes>
      <Route exact path="/TPage" element={<Tpage />}></Route>
      <Route exact path="/ListPage" element={<ListPage />}></Route>
      <Route exact path="/Correction" element={<Correction />}></Route>
    </Routes>
  );
}

export default Router;
