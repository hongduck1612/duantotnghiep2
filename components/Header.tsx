"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../public/image/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white text-black">
      {/* Navigation Bar */}
      <nav className="w-full">
        <div className="flex justify-between items-center lg:px-20 py-4 w-full">
          {/* Container to center the navigation and logo */}
          <div className="flex justify-center items-center space-x-8 w-full">
            {/* Navigation Links (Left side) */}
            <ul className="flex space-x-8 text-sm font-medium uppercase">
              <li>
                <a href="/" className="hover:text-gray-300 text-lg font-bold">
                  Trang chủ
                </a>
              </li>
              <li>
                <a href="/User/Menu" className="hover:text-gray-300 text-lg font-bold">
                  Menu
                </a>
              </li>
              <li>
                <a href="/story" className="hover:text-gray-300 text-lg font-bold">
                  CÂU CHUYỆN THƯƠNG HIỆU
                </a>
              </li>
            </ul>

            {/* Logo (Centered) */}
            <div className="flex justify-center mx-4">
              <Image
                className="h-auto"
                src={logo}
                alt="Phê-La Logo"
                width={100}
                height={100}
              />
            </div>

            {/* Additional Navigation Links (Right side) */}
            <ul className="flex space-x-8 text-sm font-medium uppercase">
              <li>
                <a href="/store" className="hover:text-gray-300 text-lg font-bold">
                  CỬA HÀNG
                </a>
              </li>
              <li>
                <a href="/recruitment" className="hover:text-gray-300 text-lg font-bold">
                  TUYỂN DỤNG
                </a>
              </li>
              <li className="relative">
                <form action="/search" method="get">
                <input
  type="text"
  name="query"
  placeholder="Tìm kiếm sản phẩm"
  className="border-2 border-black rounded-full px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring font-bold"
/>


                </form>
              </li>
            </ul>
          </div>

          {/* Login and Cart Section */}
          <div className="flex items-center space-x-4 ml-auto">
            {/* Tài khoản */}
            <div className="relative group">
              <button
                className="text-black flex items-center hover:text-gray-500 whitespace-nowrap"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 14a7 7 0 100-14 7 7 0 000 14zm0 0c-4.418 0-8 1.79-8 4v3m16-7v3c0-2.21-3.582-4-8-4z"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isMenuOpen && (
                <div className="absolute top-8 right-auto w-48 bg-white shadow-lg rounded-lg py-2">
                  <a
                    href="/Login"
                    className="block px-4 py-2 text-black hover:bg-gray-100"
                  >
                    Đăng nhập
                  </a>
                  <a
                    href="/Register"
                    className="block px-4 py-2 text-black hover:bg-gray-100"
                  >
                    Đăng ký
                  </a>
                </div>
              )}
            </div>

            {/* Cart */}
            <a
              href="/Cart"
              className="text-black flex items-center hover:text-gray-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m1.6 8a2 2 0 100 4 2 2 0 000-4zm10 0a2 2 0 100 4 2 2 0 000-4z"
                />
              </svg>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
