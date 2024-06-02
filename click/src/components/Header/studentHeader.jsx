import "./studentHeader.css";
import logo from "./img/logo.png";
import alarm from "./img/alarm.png";


const studentHeader = () => {
    return(
        <div class="header">
            <img src={logo} alt="logo" class="logo" />
            <img src={alarm} alt="alarm" class="alarm" />
        </div>
    );
}

export default studentHeader;