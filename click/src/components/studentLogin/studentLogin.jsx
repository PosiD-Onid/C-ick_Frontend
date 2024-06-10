import React, { useState } from "react";
import "./studentLogin.css";

const type = {
  userId: "",
  password: "",
};

function studentLogin () {
    const [data, setData] = useState(type);
    const {userId, password} = data;

    const onChangeInput = (e) => {
        const {value, name: inputName} = e.target;
        setData({...data, [inputName]: value});	//spread 연산자

        console.log(data)
    }

    const onClickLogin = () => {
    }

    const onClickNotYet = () => {
        // return < />
    }

    return(
        <div>
            <h2 className="text">로그인</h2>
            <p>도담도담 아이디</p>
            <input type="text" name='userId' value={userId} onChange={onChangeInput} placeholder="아이디" className="input"></input><br />
            <p>도담도담 비밀번호</p>
            <input type="password" name='password' value={password} onChange={onChangeInput} placeholder="비밀번호" className="input"></input><br />
            <button className="Loginbtn"
            onClick={onClickLogin}
            >로그인</button>
            <p className="tip" onClick={onClickNotYet}>Tip! c!ick이 처음이시라면? 회원가입을 먼저 진행해주세요</p>
            {/* <p className="tip" onClick="location.href='localhost:3002//studentSignup'">Tip! c!ick이 처음이시라면? 회원가입을 먼저 진행해주세요</p> */}
        </div>
    );
};

export default studentLogin;