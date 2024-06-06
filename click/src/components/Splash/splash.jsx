import './splash.css';
import splash from '../../assets/img/splash.png';
import splash2 from '../../assets/img/splash2.png';
import logo from "../../assets/img/logo.png";
import DAuth from "../../assets/img/input.png";

const Splash = () => {

    const a = () => {
        
    }
    return(
        <div>
            <img src={splash} className="splash splash1" />
            <img src={splash2} className="splash splash2" />
            <div>
                <img src={logo} alt="logo" className="logo" />
                <div className="text-box">
                    <p className="text">단 한 번의 C!ick으로 수행평가 일정을 손쉽게,<br/>수행평가 관리 플랫폼 C!ick</p>
                </div>
                <input type='image' src={DAuth} className="signUp" onClick={a} />
                
            </div>
        </div>
    );
}

export default Splash;

