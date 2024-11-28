"use client";
import React from "react";

const OrderDetail = () => {
  return (
    <div className="bg-gray-100 py-10 min-h-screen">
      <div className="container mx-auto flex">
        {/* Sidebar */}
        <aside className="sidebar p-6 bg-white w-1/4 border-r border-gray-200">
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
        <main className="main-content flex-1 p-6 text-black">
          {/* Order Details Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">Chi tiết đơn hàng</h2>

            {/* Order Info */}
            <div className="border-b border-gray-200 pb-6">
              <div className="flex justify-between mb-4">
                <p className="font-semibold text-gray-700">Mã đơn hàng:</p>
                <p className="text-gray-600">#123456789</p>
              </div>
              <div className="flex justify-between mb-4">
                <p className="font-semibold text-gray-700">Trạng thái:</p>
                <p className="text-gray-600">Đang giao hàng</p>
              </div>
              <div className="flex justify-between">
                <p className="font-semibold text-gray-700">Ngày đặt hàng:</p>
                <p className="text-gray-600">20/11/2024</p>
              </div>
            </div>

            {/* Product Details */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Sản phẩm</h3>
              <div className="space-y-4">
                {/* Product 1 */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">Đồng hồ ABC</p>
                    <p className="text-sm text-gray-600">Số lượng: 1</p>
                  </div>
                  <p className="text-gray-600">₫2.000.000</p>
                </div>
                {/* Product 2 */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">Đồng hồ XYZ</p>
                    <p className="text-sm text-gray-600">Số lượng: 1</p>
                  </div>
                  <p className="text-gray-600">₫3.000.000</p>
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Địa chỉ giao hàng</h3>
              <p className="text-gray-600">123 Đường ABC, Quận 1, TP.HCM</p>
            </div>

            {/* Payment Method */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Phương thức thanh toán</h3>
              <p className="text-gray-600">Thanh toán khi nhận hàng</p>
            </div>

            {/* Cost Breakdown */}
            <div className="border-t border-gray-200 pt-6">
              <div className="flex justify-between mb-4">
                <p className="text-gray-600">Tổng tiền sản phẩm:</p>
                <p className="text-gray-600">₫5.000.000</p>
              </div>
              <div className="flex justify-between mb-4">
                <p className="text-gray-600">Phí vận chuyển:</p>
                <p className="text-gray-600">₫50.000</p>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <p>Tổng thanh toán:</p>
                <p className="text-green-700">₫5.050.000</p>
              </div>
            </div>

            <div className="flex justify-end">
              <button className="bg-green-700 text-white py-2 px-6 rounded-lg hover:bg-green-800 transition-colors">
                Hủy đơn hàng
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default OrderDetail;
