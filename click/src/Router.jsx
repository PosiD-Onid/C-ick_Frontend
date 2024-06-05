import React from "react";
import { Routes, Route } from "react-router-dom";

import TeacherPage from "./components/TeacherPage/TeacherPage";
import ScheduleInquiryPage from "./components/SchedulelnquiryPage/SchedulelnquiryPage";
import CorrectionPage from "./components/CorrectionPage/CorrectionPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<TeacherPage />} />
      <Route path="/ScheduleInquiryPage" element={<ScheduleInquiryPage />} />
      <Route path="/CorrectionPage" element={<CorrectionPage />} />
    </Routes>
  );
}

export default Router;
