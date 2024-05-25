import "./Signup.css";
import React, { useState } from "react";

const type = {
    userId: "",
    password: "",
    subject: "",
  };
  
  
function Signup() {
    const [data, setData] = useState(type);
    const {userId, password, subject} = data;

    const onChangeInput = (e) => {
        const {value, name: inputName} = e.target;
        setData({...data, [inputName]: value});	//spread 연산자

        console.log(data)
    }
    
    return(
        <div>
            <h2 className="text">회원가입</h2>
            <p>* 도담도담 아이디</p>
            <input type="text"  name='userId' value={userId} onChange={onChangeInput} placeholder="아이디" className="input"></input><br />
            <p>* 도담도담 비밀번호</p>
            <input type="password" name='password' value={password} onChange={onChangeInput} placeholder="비밀번호" className="input"></input><br />
            <p>* 담당 과목명</p>
            <input type="text" name='subject' value={subject} onChange={onChangeInput} placeholder="담당 과목" className="input"></input><br />
            <button className="Signupbtn"
            // onClick={location.href='http://127.0.0.1:3002/teacherPage/teacherPage.html'}
            >회원가입</button>
            <p className="tip" onClick="location.href=''">이미 회원가입을 진행 하셨나요?</p>
        </div>
    );
}

export default Signup;