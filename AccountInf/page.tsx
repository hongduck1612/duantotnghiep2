"use client";
import React from "react";

const AccountInfo = () => {
  return (
    <div className="bg-gray-100 py-10 min-h-screen">
      <div className="container mx-auto flex min-h-screen">
        {/* Sidebar */}
        <aside className="sidebar p-6 bg-white w-1/4 border-r border-gray-200 min-h-screen">
          <h3 className="text-green-700 text-xl font-semibold mb-6">Tài khoản</h3>
          <ul className="list-none p-0 text-black space-y-4">
            <li className="hover:text-green-700 transition-colors cursor-pointer">
              <a href="/AccountInf">Thông tin cá nhân</a>
            </li>
            <li className="hover:text-green-700 transition-colors cursor-pointer">
              <a href="/OrderTracking">Đơn hàng</a>
            </li>
            <li className="hover:text-green-700 transition-colors cursor-pointer">
              <a href="/OrderDetail">Chi tiết đơn hàng</a>
            </li>
            <li className="hover:text-green-700 transition-colors cursor-pointer">
              <a href="/ChangePassword">Thay đổi mật khẩu</a>
            </li>
            <li className="hover:text-green-700 transition-colors cursor-pointer">
              <a href="#">Đăng xuất</a>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="main-content flex-1 p-6 text-black space-y-10 min-h-screen">
          {/* Personal Information Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Thông tin cá nhân</h2>
            <h3 className="text-lg text-gray-600 mb-4">Thông tin cá nhân của bạn</h3>
            <div className="space-y-4">
              <div className="flex justify-between space-x-4">
                <p className="font-semibold text-gray-700">Họ và tên:</p>
                <p className="text-gray-600">Nguyễn Minh Anh</p>
              </div>
              <div className="flex justify-between space-x-4">
                <p className="font-semibold text-gray-700">Email:</p>
                <p className="text-gray-600">minhanh@example.com</p>
              </div>
              <div className="flex justify-between space-x-4">
                <p className="font-semibold text-gray-700">Số điện thoại:</p>
                <p className="text-gray-600">0901234567</p>
              </div>
              <div className="flex justify-between space-x-4">
                <p className="font-semibold text-gray-700">Địa chỉ:</p>
                <p className="text-gray-600">123 Đường ABC, Quận 1, TP.HCM</p>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button className="bg-green-700 text-white py-2 px-6 rounded-lg hover:bg-green-800 transition-colors">
                Chỉnh sửa thông tin
              </button>
            </div>
          </div>

          {/* Shipping Address Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 mt-10">Địa chỉ giao hàng</h2>
            <h3 className="text-lg text-gray-600 mb-4">Địa chỉ của bạn</h3>
            <div className="space-y-4">
              <div className="flex justify-between space-x-4">
                <p className="font-semibold text-gray-700">Địa chỉ chính:</p>
                <p className="text-gray-600">123 Đường ABC, Quận 1, TP.HCM</p>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button className="bg-green-700 text-white py-2 px-6 rounded-lg hover:bg-green-800 transition-colors">
                Thêm địa chỉ mới
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AccountInfo;
