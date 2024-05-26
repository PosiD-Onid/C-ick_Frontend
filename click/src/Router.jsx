import React from "react";
import { Routes, Route } from "react-router-dom";
import TeacherPage from "./components/TeacherPage/TeacherPage";
import ScheduleInquiryPage from "./components/ScheduleInquiryPage/";
import CorrectionPage from "./components/CorrectionPage/";

function Router() {
  return (
    <Routes>
      <Route exact path="/TeacherPage" element={<TeacherPage />}></Route>
      <Route
        exact
        path="/ScheduleInquiryPage"
        element={<ScheduleInquiryPage />}
      ></Route>
      <Route exact path="/CorrectionPage" element={<CorrectionPage />}></Route>
    </Routes>
  );
}

export default Router;
