"use client"; // Marks this as a client component
import React from "react";
import Image from "next/image";
import product1 from "../public/image/ca ph sua da.webp";

const Checkout = () => {
  return (
    <div className="bg-white text-black min-h-screen">
      {/* Checkout Form Section */}
      <section className="w-full mx-auto p-5 px-4 md:px-10 lg:px-20 xl:px-56 relative overflow-x-hidden">
        {/* Section Title */}
        <h2 className="text-3xl md:text-5xl text-center mb-10 pb-4 font-bold text-red-500">
          Thanh toán
        </h2>

        {/* Shipping Address Section */}
        <div className="bg-gray-100 p-6 rounded-md shadow-lg mb-6">
          <h3 className="text-lg font-semibold mb-4">Địa chỉ nhận hàng</h3>
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-3 md:space-y-0 md:space-x-4">
            <p>Nguyễn Minh Anh (+84) 365920164</p>
            <p>
              Số 33b, Đường Số 44 Phan Huy Ích, Phường 14, Quận Gò Vấp, TP. Hồ
              Chí Minh
            </p>
            <p className="text-red-500 font-semibold">Mặc định</p>
            <button className="text-blue-500 underline">Thay đổi</button>
          </div>
        </div>

        {/* Product Details Section */}
        <div className="bg-gray-100 p-6 rounded-md shadow-lg mb-6">
          <h3 className="text-lg font-semibold mb-4">Sản phẩm</h3>

          {/* Product 1 */}
          <div className="flex items-center justify-between border-b border-gray-300 pb-3 mb-3">
            <div className="w-1/2 flex">
              <Image
                src={product1} // Furniture product image
                width={500}
                height={400}
                alt="Sofa"
                className="w-16 h-16 mr-4 rounded"
              />
              <div>
                <p className="font-semibold">
                  Sofa Da Cao Cấp, Màu Xám, 3 Chỗ Ngồi
                </p>
                <p className="text-sm">Chất liệu: Da, Màu: Xám</p>
              </div>
            </div>
            <div className="text-right">
              <p>₫7.500.000</p>
              <p>Số lượng: 1</p>
              <p>Thành tiền: ₫7.500.000</p>
            </div>
          </div>

          {/* Product 2 */}
          <div className="flex items-center justify-between border-b border-gray-300 pb-3 mb-3">
            <div className="w-1/2 flex">
              <Image
                src={product1} // Furniture product image
                width={500}
                height={400}
                alt="Sofa"
                className="w-16 h-16 mr-4 rounded"
              />
              <div>
                <p className="font-semibold">
                  Bàn Cà Phê Gỗ Sồi Tự Nhiên, Thiết Kế Hiện Đại
                </p>
                <p className="text-sm">Chất liệu: Gỗ Sồi, Màu: Nâu</p>
              </div>
            </div>
            <div className="text-right">
              <p>₫2.000.000</p>
              <p>Số lượng: 1</p>
              <p>Thành tiền: ₫2.000.000</p>
            </div>
          </div>

          {/* Insurance Section */}
          <div className="flex items-center justify-between border-b border-gray-300 pb-3 mb-3">
            <div className="w-1/2 flex">
              <input
                type="checkbox"
                id="checkbox"
                className="form-checkbox h-5 w-5 text-blue-500"
              />
              <div className="ml-2">
                <p className="font-semibold">Bảo hiểm bảo vệ người tiêu dùng</p>
                <p className="text-sm">
                  Giúp bảo vệ bạn khỏi các nguy hiểm, thiệt hại trong quá trình sử dụng.
                </p>
              </div>
            </div>
          </div>

          {/* Gift Section */}
          <div className="flex items-center mb-3">
            <p>
              Quà Tặng: Bộ Dụng Cụ Bảo Quản Nội Thất Chính Hãng - Loại: Màu Ngẫu Nhiên
            </p>
          </div>

          <hr className="border-gray-300 my-4" />

          {/* Shipping Info */}
          <div className="text-right">
            <p className="font-semibold">Phương thức vận chuyển: Nhanh</p>
            <p>Đảm bảo nhận hàng từ 16 Tháng 11 - 18 Tháng 11</p>
            <p>Phí vận chuyển: ₫45.100</p>
          </div>
          <hr className="border-gray-300 my-4" />

          {/* Total Amount */}
          <p className="text-lg text-red-500 font-semibold text-right">
            Tổng số tiền (2 sản phẩm): ₫9.545.100
          </p>
        </div>

        {/* Payment Method */}
        <div className="bg-gray-100 p-6 rounded-md shadow-lg mb-6">
          <h3 className="text-lg font-semibold mb-4">Phương thức thanh toán</h3>
          <div className="flex flex-col gap-2">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="payment"
                className="form-radio text-blue-500"
              />
              <span className="ml-2">VN Pay</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="payment"
                className="form-radio text-blue-500"
              />
              <span className="ml-2">Thanh toán khi nhận hàng</span>
            </label>
          </div>
        </div>

        {/* Total Payment Section */}
        <div className="bg-gray-100 p-6 rounded-md shadow-lg">
          <div className="flex justify-between mb-2">
            <p>Tổng tiền hàng</p>
            <p>₫7.500.000</p>
          </div>
          <div className="flex justify-between mb-2">
            <p>Tổng tiền phí vận chuyển</p>
            <p>₫45.100</p>
          </div>
          <div className="flex justify-between text-lg font-semibold">
            <p>Tổng thanh toán</p>
            <p>₫9.545.100</p>
          </div>
          <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded mt-4 w-full">
            Đặt hàng
          </button>
          <p className="text-xs text-gray-500 mt-4 text-center">
            Nhấn "Đặt hàng" đồng nghĩa với việc bạn đồng ý tuân theo Điều khoản Merraki
          </p>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
