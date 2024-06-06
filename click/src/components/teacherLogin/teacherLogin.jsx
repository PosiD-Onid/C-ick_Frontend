import React, { useState } from "react";
import "../../styles/Login.css";

const type = {
  userId: "",
  password: "",
};


function TeacherLogin () {
    const [data, setData] = useState(type);
    const {userId, password} = data;

    const onChangeInput = (e) => {
        const {value, name: inputName} = e.target;
        setData({...data, [inputName]: value});	//spread 연산자

        console.log(data)
    }



    return(
        <div className="login">
            <h2 className="text">로그인</h2>
            <p>아이디</p>
            <input type="text" name='userId' value={userId} onChange={onChangeInput} placeholder="아이디" className="input"></input><br />
            <p>비밀번호</p>
            <input type="password" name='password' value={password} onChange={onChangeInput} placeholder="비밀번호" className="input"></input><br />
            <button className="Loginbtn"
            // onClick={location.href='http://127.0.0.1:3002/teacherPage/teacherPage.html'}
            >로그인</button>
            <h6 className="tip" onClick="location.href=''">Tip! c!ick이 처음이시라면? 회원가입을 먼저 진행해주세요</h6>
        </div>
    );
}

export default TeacherLogin;