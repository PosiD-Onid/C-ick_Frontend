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

    const onClickIdCheck = () => {
        // 아이디 중복 확인하기...
    }

    const onClickSignup = () => {
        password !== passwordCheck ? alert("비밀번호를 다시 입력해 주세요")
        : alert("회원가입 성공") /** 페이지 라우팅... */;
    }   

    return(
        <div>
            <h2 className="text">회원가입</h2>
            <p>* 도담도담 아이디</p>
            <input type="text"  name='userId' value={userId} onChange={onChangeInput} placeholder="아이디" className="input"></input><br />
            <button type="submit" name="IdCheck" onClick={onClickIdCheck}>중복 확인</button><br />
            <p>* 도담도담 비밀번호</p>
            <input type="password" name='password' value={password} onChange={onChangeInput} placeholder="비밀번호" className="input"></input><br />
            <p>* 비밀번호 확인</p>
            <input type="passwordCheck" name='passwordCheck' value={passwordCheck} onChange={onChangeInput} placeholder="비밀번호" className="input"></input><br />
            <p>* 과목명</p>
            <input type="text"  name='subject' value={subject} onChange={onChangeInput} placeholder="과목" className="input"></input><br/>
            <button type="submit" className="Signupbtn"
            onClick={onClickSignup}
            >회원가입</button>
            <p className="tip" onClick="location.href=''">이미 회원가입을 진행 하셨나요?</p>
        </div>
    );
}

export default Signup;