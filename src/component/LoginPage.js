import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../assets/css/LoginBox.css';

function LoginPage() {
  const { isLogin, setIsLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    setIsLogin(true);
  };

  useEffect(() => {
    if (isLogin) {
      navigate('/main');
    }
  }, [isLogin, navigate]);

  return (
    <div className="login_container">
      <h2 className="welcome-text">Se-MaPyeon에 오신 것을 환영합니다</h2>
      <div className="login-form">
        <h2>로그인</h2>
        <p>(세종대학교 포털 <strong>ID/PW</strong>와 동일)</p>
        {/* 로그인 form */}
        <form onSubmit={handleLogin}>
          <div className="input-container">
            <input type="text" id="id" name="id" placeholder="ID" />
          </div>
          <div className="input-container">
            <input type="password" id="pw" name="pw" placeholder="PW" />
          </div>
          <button type="submit" className="login-button">로그인</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;