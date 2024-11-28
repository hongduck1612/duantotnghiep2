import React from "react";
import Image from "next/image";
import forgotPasswordImg from "../public/image/img-dangky.jpg"; // Update the image file accordingly

const ForgotPassword = () => {
  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="flex flex-1 justify-center items-center bg-white">
        <Image
          src={forgotPasswordImg}
          alt="Forgot Password Illustration"
          width={600}
          height={600}
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Right Section */}
      <div className="flex flex-1 flex-col justify-center items-start px-10 bg-white">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Quên mật khẩu</h2>
        <p className="text-sm text-gray-600 mb-5">
          Vui lòng nhập email của bạn để nhận liên kết đặt lại mật khẩu.
        </p>
        <form className="w-full max-w-md">
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email của bạn"
              required
              className="w-full px-4 py-3 text-sm border-b-2 border-gray-300 focus:outline-none focus:border-yellow-400"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-3 text-sm font-bold text-white bg-yellow-400 rounded-md hover:bg-yellow-500 focus:outline-none"
          >
            Gửi liên kết
          </button>
        </form>
        <div className="mt-5 text-center w-full">
          <p className="text-sm text-gray-600">
            <a href="#" className="text-yellow-500 font-bold hover:underline">
              Trở về
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
