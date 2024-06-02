import 'studentMain.css';
import Header from './Header/studentHeader';

const studentMain = () => {
    const [date, setDate] = useState(new Date());
    const yearMonthRef = useRef(null);
    const datesRef = useRef(null);
    const modalRef = useRef(null);
  
    useEffect(() => {
      renderCalendar();
    }, [date]);
  
    const renderCalendar = () => {
      const viewYear = date.getFullYear();
      const viewMonth = date.getMonth();
  
      if (yearMonthRef.current) {
        yearMonthRef.current.textContent = `${viewYear}년 ${viewMonth + 1}월`;
      }
  
      const prevLast = new Date(viewYear, viewMonth, 0);
      const thisLast = new Date(viewYear, viewMonth + 1, 0);
  
      const PLDate = prevLast.getDate();
      const PLDay = prevLast.getDay();
  
      const TLDate = thisLast.getDate();
      const TLDay = thisLast.getDay();
  
      const prevDates = [];
      const thisDates = [...Array(TLDate + 1).keys()].slice(1);
      const nextDates = [];
  
      if (PLDay !== 6) {
        for (let i = 0; i < PLDay + 1; i++) {
          prevDates.unshift(PLDate - i);
        }
      }
  
      for (let i = 1; i < 7 - TLDay; i++) {
        nextDates.push(i);
      }
  
      const dates = prevDates.concat(thisDates, nextDates);
      const firstDateIndex = dates.indexOf(1);
      const lastDateIndex = dates.lastIndexOf(TLDate);
  
      const formattedDates = dates.map((date, i) => {
        const condition = i >= firstDateIndex && i < lastDateIndex + 1 ? "this" : "other";
        return `<div class="date"><span class="${condition}">${date}</span></div>`;
      });
  
      if (datesRef.current) {
        datesRef.current.innerHTML = formattedDates.join("");
      }
  
      const today = new Date();
      if (viewMonth === today.getMonth() && viewYear === today.getFullYear()) {
        const todayElement = datesRef.current.querySelector('.this.today');
        if (todayElement) {
          todayElement.classList.remove('today');
        }
        const todayDates = datesRef.current.querySelectorAll(".this");
        for (let date of todayDates) {
          if (+date.innerText === today.getDate()) {
            date.classList.add("today");
            break;
          }
        }
      }
    };
  
    const prevMonth = () => {
      setDate(new Date(date.getFullYear(), date.getMonth() - 1));
    };
  
    const nextMonth = () => {
      setDate(new Date(date.getFullYear(), date.getMonth() + 1));
    };
  
    const goToday = () => {
      setDate(new Date());
    };
  
    const openModal = () => {
      console.log('open')
      if (modalRef.current) {
        modalRef.current.classList.add('on');
      }
      setModalOpen(true)
    };
  
    const closeModal = () => {
      if (modalRef.current) {
        modalRef.current.classList.remove('on');
      }
    };
  
    const [modalOpen, setModalOpen] = useState(false);
  
    const eventModalOpen = () => {
      setModalOpen(!modalOpen);
    }

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

export default studentMain;