import "./studentHeader.css";
import "../../styles/Header.css";
import logo from "../../assets/img/logo.png";
import alarm from "../../assets/img/alarm.png";


const StudentHeader = () => {
    return(
        <div class="header">
            <img src={logo} alt="logo" class="logo" />
            <img src={alarm} alt="alarm" class="alarm" />
        </div>
    );
}

export default StudentHeader;