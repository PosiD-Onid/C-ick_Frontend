import "./teacherHeader.css";
import logo from "./img/logo.png";
import schedule from "./img/addSchedule.png";
import w from "./img/w.png";
import alarm from "./img/alarm.png";

const teacherHeader = () => {
  return (
    <div class="header">
      <img src={logo} alt="logo" class="logo" />
      <input
        type="image"
        src={schedule}
        alt="Abutton"
        class="addSchedule button" />
      <input type="image" src={w} alt="Wbutton" class="writebutton" />
      <img src={alarm} alt="alarm" class="alarm" />
    </div>
  );
};

export default teacherHeader;