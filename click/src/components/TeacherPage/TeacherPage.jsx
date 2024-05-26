import React from "react";
import * as T from "./teacherPage.style";

function TeacherPagePage() {
  return (
    <>
      <T.FullScreenColor>
        <div>
          <div>
            <T.Title>
              <span className="red">*</span> 수행평가 제목
            </T.Title>
            <T.TieleI placeholder="수행평가 제목" type="text" />{" "}
          </div>
          <div>
            <T.Title>
              <span className="red">*</span> 수행평가 일정 입력
            </T.Title>
            <T.DayI placeholder="날짜" type="text"></T.DayI>
            <T.TimeI placeholder="시간" type="text"></T.TimeI>
            <T.DayI placeholder="날짜" type="text"></T.DayI>
            <T.TimeI placeholder="시간" type="text"></T.TimeI>
          </div>
          <div>
            <T.Title>
              <span>*</span> 수행평가 대상 학급
            </T.Title>
            <T.GradeI placeholder="학년" type="text"></T.GradeI>
            <T.ClassI placeholder="반" type="text"></T.ClassI>
          </div>
          <div>
            <T.Title>
              <span>*</span> 수행평가 과목
            </T.Title>
            <T.SubjectI placeholder="과목" type="text"></T.SubjectI>
            <T.TitleB>수행평가 장소</T.TitleB>
            <T.PlaceI placeholder="장소" type="text"></T.PlaceI>
            <T.Title>
              <span>*</span> 수행평가 내용
            </T.Title>
            <T.DetailI placeholder="내용" type="text"></T.DetailI>
          </div>
          <div>
            <T.CancelB>작성 취소</T.CancelB>
            <T.CompleteB>작성 완료</T.CompleteB>
          </div>
        </div>
      </T.FullScreenColor>
    </>
  );
}

export default TeacherPagePage;
