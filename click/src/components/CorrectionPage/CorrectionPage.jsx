import * as S from "./CorrectionPage.style";

const CorrectionPage = () => {
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
          <S.MiniI placeholder="날짜" type="text"></S.MiniI>
          <S.MiniI placeholder="시간" type="text"></S.MiniI>
          <S.MiniI placeholder="날짜" type="text"></S.MiniI>
          <S.MiniI placeholder="시간" type="text"></S.MiniI>
        </div>
        <div>
          <S.Title>
            <S.Span>*</S.Span> 수행평가 대상 학급
          </S.Title>
          <S.MiniI placeholder="학년" type="text"></S.MiniI>
          <S.MiniI placeholder="반" type="text"></S.MiniI>
        </div>
        <div>
          <S.Title>
            <S.Span>*</S.Span> 수행평가 과목
          </S.Title>
          <S.BigI placeholder="과목" type="text"></S.BigI>
          <S.Title>수행평가 장소</S.Title>
          <S.BigI placeholder="장소" type="text"></S.BigI>
          <S.Title>
            <S.Span>*</S.Span> 수행평가 내용
          </S.Title>
          <S.BigI placeholder="내용" type="text"></S.BigI>
        </div>
        <div>
          <S.CancelB>작성 취소</S.CancelB>
          <S.CompleteB>작성 완료</S.CompleteB>
        </div>
      </div>
    </S.FullScreenColor>
  );
};

export default CorrectionPage;
