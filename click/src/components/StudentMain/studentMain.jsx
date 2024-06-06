import './studentMain.css';
import Header from "../Header/studentHeader";

const StudentMain = () => {

    return(
        <div>
            <Header />
            <div className="calendar">
                <div className='title'>
                <div className="year-month"></div>
                <div className="nav">
                    <button className="nav-btn go-prev">&lt;</button>
                    <button className="nav-btn go-today">오늘</button>
                    <button className="nav-btn go-next">&gt;</button>
                </div>
                </div>
                <div className="main">
                <div className="days">
                    <div className="day">일</div>
                    <div className="day">월</div>
                    <div className="day">화</div>
                    <div className="day">수</div>
                    <div className="day">목</div>
                    <div className="day">금</div>
                    <div className="day">토</div>
                </div>
                <div className="dates"role="button"></div>
                </div>
            </div>
        </div>
    );
}

export default StudentMain;