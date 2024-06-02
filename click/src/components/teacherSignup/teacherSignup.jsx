import "./teacherSignup.css";
import React, { useState } from "react";

const type = {
    userId: "",
    password: "",
    passwordCheck: "",
    subject: "",
};
  
function Signup() {
    const [data, setData] = useState(type);
    const {userId, password, passwordCheck, subject} = data;

    const onChangeInput = (e) => {
        const {value, name: inputName} = e.target;
        setData({...data, [inputName]: value});	//spread 연산자

        console.log(data)
    }

    const onClickSignUp = () => {
        password !== passwordCheck ? alert("올바른 비밀번호를 입력해 주세요") : alert("회원가입 성공")
    }

    const onClickAlready = () => {

    }
    
    const onClickIdCheck = () => {

    }
    return(
        <div>
            <h2 className="text">회원가입</h2>
            <p>* 도담도담 아이디</p>
            <input type="text" name='userId' value={userId} onChange={onChangeInput} placeholder="아이디" className="inputId"></input>
            <button className="idCheck" onClick={onClickIdCheck}>중복 확인</button><br />
            <p>* 도담도담 비밀번호</p>
            <input type="password" name='password' value={password} onChange={onChangeInput} placeholder="비밀번호" className="input"></input><br />
            <p>* 비밀번호 확인</p>
            <input type="passwordCheck" name='passwordCheck' value={passwordCheck} onChange={onChangeInput} placeholder="비밀번호 확인" className="input"></input><br />
            <p>* 담당 과목명</p>
            <input type="text" name='subject' value={subject} onChange={onChangeInput} placeholder="담당 과목" className="input"></input><br />
            <button className="Signupbtn"
            onClick={onClickSignUp}
            >회원가입</button>
            <p className="tip" onClick={onClickAlready}>이미 회원가입을 진행 하셨나요?</p>
            {/* <p className="tip" onClick="location.href='localhost:3002//teacherLogin'">이미 회원가입을 진행 하셨나요?</p> */}
        </div>
    );
}

export default Signup;