// import * as T from "./TeacherPage.style";
import * as S from "./TeacherPage.style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TeacherPage = ({ initData, onSubmit }) => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    contentName: "",
    contentNumber: "",
  });

  const handleChangeDate1 = (e) => {
    setState({
      ...state,
      date1: e.target.value,
    });
  };

  const handleChangeTime1 = (e) => {
    setState({
      ...state,
      time1: e.target.value,
    });
  };

  const handleChangeDate2 = (e) => {
    setState({
      ...state,
      date2: e.target.value,
    });
  };

  const handleChangeTime2 = (e) => {
    setState({
      ...state,
      time2: e.target.value,
    });
  };

  const handleChangeGrade = (e) => {
    setState({
      ...state,
      grade: e.target.value,
    });
  };

  const handleChangeClass = (e) => {
    setState({
      ...state,
      class: e.target.value,
    });
  };

  const handleChangeSubject = (e) => {
    setState({
      ...state,
      subject: e.target.value,
    });
  };

  const handleChangePlace = (e) => {
    setState({
      ...state,
      place: e.target.value,
    });
  };

  const handleChangeDetail = (e) => {
    setState({
      ...state,
      detail: e.target.value,
    });
  };

  const handleSubmit = () => {
    onSubmit(state);
  };

  const handleOnGoBack = () => {
    navigate("/ScheduleInquiryPage");
  };

  return (
    <S.FullScreenColor>
      <div>
        <div>
          <S.Title>
            <S.Span>*</S.Span> 수행평가 제목
          </S.Title>
          <S.BigI placeholder="수행평가 제목" type="text" />{" "}
        </div>
        <div>
          <S.Title>
            <S.Span>*</S.Span> 수행평가 일정 입력
          </S.Title>
          <S.MiniI
            value={state.date1}
            onChange={handleChangeDate1}
            placeholder="날짜"
            type="number"
          ></S.MiniI>
          <S.MiniI
            value={state.time1}
            onChange={handleChangeTime1}
            type="number"
            placeholder="시간"
          ></S.MiniI>
          <S.MiniI
            value={state.date2}
            onChange={handleChangeDate2}
            placeholder="날짜"
            type="number"
          ></S.MiniI>
          <S.MiniI
            value={state.time2}
            onChange={handleChangeTime2}
            type="number"
            placeholder="시간"
          ></S.MiniI>
        </div>
        <div>
          <S.Title>
            <S.Span>*</S.Span> 수행평가 대상 학급
          </S.Title>
          <S.MiniI
            value={state.grade}
            onChange={handleChangeGrade}
            placeholder="학년"
            type="number"
          ></S.MiniI>
          <S.MiniI
            value={state.class}
            onChange={handleChangeClass}
            placeholder="반"
            type="number"
          ></S.MiniI>
        </div>
        <div>
          <S.Title>
            <S.Span>*</S.Span> 수행평가 과목
          </S.Title>
          <S.BigI
            value={state.subject}
            onChange={handleChangeSubject}
            placeholder="과목"
            type="text"
          ></S.BigI>
          <S.Title>수행평가 장소</S.Title>
          <S.BigI
            value={state.place}
            onChange={handleChangePlace}
            placeholder="장소"
            type="text"
          ></S.BigI>
          <S.Title>
            <S.Span>*</S.Span> 수행평가 내용
          </S.Title>
          <S.BigI
            value={state.detail}
            onChange={handleChangeDetail}
            placeholder="내용"
            type="text"
          ></S.BigI>
        </div>
        <div>
          <S.CancelB onClick={handleOnGoBack}>작성 취소</S.CancelB>
          <S.CompleteB onClick={handleSubmit}>작성 완료</S.CompleteB>
        </div>
      </div>
    </S.FullScreenColor>
  );
};

export default TeacherPage;
