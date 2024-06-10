import React, { useState } from "react";
import "../../styles/Login.css";

const type = {
  userId: "",
  password: "",
};


function StudentLogin () {
    const [data, setData] = useState(type);
    const {userId, password} = data;

    const onChangeInput = (e) => {
        const {value, name: inputName} = e.target;
        setData({...data, [inputName]: value});	//spread 연산자

        console.log(data)
    }

    const onClickLogin = () => {
        // 회원가입할 때 기입한 정보랑 같은지 확인하고 같으면 페이지 라우팅
    }

    const onClickTip = () => {
        // 페이지 라우팅... --> 회원가입으로
    }

    return(
        <div className="login">
            <h2 className="text">로그인</h2>
            <p>도담도담 아이디</p>
            <input type="text" name='userId' value={userId} onChange={onChangeInput} placeholder="아이디" className="input"></input><br />
            <p>도담도담 비밀번호</p>
            <input type="password" name='password' value={password} onChange={onChangeInput} placeholder="비밀번호" className="input"></input><br />
            <button type="submit" className="Loginbtn"
            onClick={onClickLogin}>로그인</button>
            <h6 className="tip" onClick={onClickTip}>Tip! c!ick이 처음이시라면? 회원가입을 먼저 진행해주세요</h6>
        </div>
    );
}

export default StudentLogin;