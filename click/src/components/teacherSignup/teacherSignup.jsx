import "../../styles/Signup.css";
import React, { useState } from "react";

const type = {
    name: "",
    userId: "",
    password: "",
    passwordCheck: "",
    subject: "",
  };
  
  
function TeacherSignup() {
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
        <div className="signup">
            <h2 className="text">회원가입</h2>
            <p><span>*</span> 아이디</p>
            <input type="text"  name='userId' value={userId} onChange={onChangeInput} placeholder="아이디" className="input inputId"></input>
            <button type="submit" name="IdCheck" className="IdCheck" onClick={onClickIdCheck}>중복 확인</button><br />
            <p><span>*</span> 비밀번호</p>
            <input type="password" name='password' value={password} onChange={onChangeInput} placeholder="비밀번호" className="input"></input><br />
            <p><span>*</span> 비밀번호 확인</p>
            <input type="passwordCheck" name='passwordCheck' value={passwordCheck} onChange={onChangeInput} placeholder="비밀번호" className="input"></input><br />
            <p><span>*</span> 과목</p>
            <input type="text"  name='subject' value={subject} onChange={onChangeInput} placeholder="과목" className="input"></input><br/>
            <button type="submit" className="Signupbtn"
            onClick={onClickSignup}
            >회원가입</button>
            <h6 className="tip" onClick="location.href=''">이미 회원가입을 진행 하셨나요?</h6>
        </div>
    );
}

export default TeacherSignup;