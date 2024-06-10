import { useNavigate, useParams } from "react-router-dom";
import { DiaryDispatchContext } from "../../App";
import { React, useContext, useEffect } from "react";
import useDiary from "../../hooks/useDiary";
import * as L from "./ScheduleInquiryPage.style";
// import List from "../../hooks/List";

const ScheduleInquiryPage = () => {
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
  const { id } = useParams();
  const data = useDiary(id);
  const navigate = useNavigate();
  const onClickDelete = () => {
    if (window.confirm("일정을 정말 삭제할까요? 다시 복구되지 않아요!")) {
      onDelete(id);
      navigate("/", { replace: true });
    }
  };
  return (
    <>
      <L.FullScreenColor>
        <div>
          <div>
            <L.List>내가 작성한 글</L.List>
            <L.Line />
            <L.Select>선택</L.Select>
            <L.Title>제목</L.Title>
          </div>
          <L.LineG />
          <L.Delete type={"negative"} onClick={onClickDelete}>
            삭제하기
          </L.Delete>
        </div>
      </L.FullScreenColor>
    </>
  );
};

export default ScheduleInquiryPage;
