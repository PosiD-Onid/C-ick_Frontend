import "../../styles/Header.css";
import "./teacherHeader.css";
import logo from "../../assets/img/logo.png";
import schedule from "../../assets/img/addSchedule.png";
import write from "../../assets/img/write.png";
import alarm from "../../assets/img/alarm.png";

const TeacherHeader = () => {
  return (
    <div class="header">
      <img src={logo} alt="logo" class="logo" />
      <input
        type="image"
        src={schedule}
        alt="Abutton"
        class="addSchedule button" />
      <input type="image" src={write} alt="Wbutton" class="writebutton" />
      <img src={alarm} alt="alarm" class="alarm" />
    </div>
  );
};

export default TeacherHeader;