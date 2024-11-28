import React from "react";
import Image from "next/image";
import logo from "../public/image/logo.png";
const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Main Content */}
      <div className="container mx-auto py-8 px-4 lg:px-24 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Logo */}
        <div className="mb-6 md:mb-0">
        <Image
                className="h-auto"
                src={logo}
                alt="Phê-La Logo"
                width={200}
                height={100}
              />
        </div>

        {/* About Us */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Về Chúng Tôi</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-gray-400">
                Cửa hàng
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Về Brothers Coffee
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Hệ thống cửa hàng
              </a>
            </li>
          </ul>
        </div>

        {/* Company Address */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Địa chỉ công ty</h3>
          <ul className="text-sm space-y-2">
            <li>
              Trụ sở chính: 289 Đinh Bộ Lĩnh, phường 26, quận Bình Thạnh, TP Hồ
              Chí Minh
            </li>
            <li>
              Chi nhánh Đà Lạt: 7 Nguyễn Chí Thanh, phường 1, thành phố Đà Lạt,
              tỉnh Lâm Đồng
            </li>
            <li>
              Chi nhánh Hà Nội: Lô 04–9A Khu công nghiệp Vĩnh Hoàng, phường
              Hoàng Văn Thụ, quận Hoàng Mai, Hà Nội
            </li>
          </ul>
        </div>

        {/* Subscription */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Nhận thông tin từ Brothers Coffee</h3>
          <p className="text-sm mb-4">
            Xin vui lòng để lại địa chỉ email, chúng tôi sẽ cập nhật những tin tức
            mới nhất của Brothers Coffee
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Nhập email của bạn..."
              className="px-4 py-2 rounded-l bg-gray-800 text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-white text-black rounded-r hover:bg-gray-300"
            >
              Gửi
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-sm text-gray-400 py-4 px-4 lg:px-24 border-t border-gray-700">
        <p>
          ©2020 bản quyền này thuộc về Công Ty Cổ Phần Brothers Coffee
        </p>
      </div>
    </footer>
  );
};

export default Footer;
