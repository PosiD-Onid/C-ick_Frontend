// import * as S from "./SchedulelnquiryPage.style";
import * as S from "./SchedulelnquiryPage.style";

const ScheduleInquiryPage = () => {
  return (
    <S.FullScreenColor>
      <div>
        <div>
          <S.List>내가 작성한 글</S.List>
          <S.Line />
          <S.Select>선택</S.Select>
          <S.Title>제목</S.Title>
        </div>
        {/* <ScheduleStateContext.Provider>
          <ScheduleDispatchContext.Provider>
            <ScheduleList />
          </ScheduleDispatchContext.Provider>
        </ScheduleStateContext.Provider> */}
        <S.LineG />
        <S.Delete>삭제</S.Delete>
      </div>
    </S.FullScreenColor>
  );
};

export default ScheduleInquiryPage;
