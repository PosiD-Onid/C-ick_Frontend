// import * as S from "./CorrectionPage.style";
import * as S from "./CorrectionPage.style";

const CorrectionPage = () => {
  return (
    <S.FullScreenColor>
      <div>
        <div>
          <S.Title>
            <span>*</span> 수행평가 제목
          </S.Title>
          <S.TieleI placeholder="수행평가 제목" type="text" />{" "}
        </div>
        <div>
          <S.Title>
            <span className="red">*</span> 수행평가 일정 입력
          </S.Title>
          <S.DayI placeholder="날짜" type="text"></S.DayI>
          <S.TimeI placeholder="시간" type="text"></S.TimeI>
          <S.DayI placeholder="날짜" type="text"></S.DayI>
          <S.TimeI placeholder="시간" type="text"></S.TimeI>
        </div>
        <div>
          <S.Title>
            <span className="red">*</span> 수행평가 대상 학급
          </S.Title>
          <S.GradeI placeholder="학년" type="text"></S.GradeI>
          <S.ClassI placeholder="반" type="text"></S.ClassI>
        </div>
        <div>
          <S.Title>
            <span className="red">*</span> 수행평가 과목
          </S.Title>
          <S.SubjectI placeholder="과목" type="text"></S.SubjectI>
          <S.TitleB>수행평가 장소</S.TitleB>
          <S.PlaceI placeholder="장소" type="text"></S.PlaceI>
          <S.Title>
            <span className="red">*</span> 수행평가 내용
          </S.Title>
          <S.DetailI placeholder="내용" type="text"></S.DetailI>
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
