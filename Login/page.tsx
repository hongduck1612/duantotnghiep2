import React from "react";
import Image from "next/image"; // Sử dụng Next.js Image
import "./Login.css";
import loginimg1 from "../public/image/img-dangnhap.jpg";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-left">
        <Image
          src={loginimg1}
          alt="Login Illustration"
          width={600}
          height={600}
          className="image-center"
        />
      </div>

      <div className="login-right">
        <h2>Đăng nhập</h2>
        <p className="login-message">Vui lòng nhập thông tin đăng nhập</p>
        <form>
          <div className="form-group">
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Nhập số điện thoại"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Nhập mật khẩu"
              required
            />
          </div>
          <button type="submit" className="btn-login">
            Đăng nhập
          </button>
        </form>

        <div className="login-links">
          <a href="/forgot-password" className="forgot-password">
            Quên mật khẩu?
          </a>
          <p>
            Chưa có tài khoản?{" "}
            <a href="/register" className="register-link">
              Đăng ký ngay
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;