import React from "react";
import Image from "next/image"; // Sử dụng Next.js Image
import "./Register.css";
import registerImg from "../public/image/img-dangky.jpg";

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-left">
        <Image
          src={registerImg}
          alt="Register Illustration"
          width={600}
          height={600}
          className="image-center"
        />
      </div>

      <div className="register-right">
        <h2>Đăng ký</h2>
        <p className="register-message">Vui lòng nhập thông tin để tạo tài khoản</p>
        <form>
          <div className="form-group">
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Số điện thoại"
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
          <div className="form-group">
            <input
              type="repassword"
              id="repassword"
              name="repassword"
              placeholder="Xác nhận mật khẩu"
              required
            />
          </div>
          
          <button type="submit" className="btn-register">
            Đăng ký ngay
          </button>
        </form>

        <div className="register-links">
          <p>
            Trở về
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;