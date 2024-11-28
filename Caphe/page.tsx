"use client";
import React from "react";
import Image from "next/image";
import product1 from "../public/image/ca ph sua da.webp";
import product2 from "../public/image/bac xiu.webp";
import product3 from "../public/image/duong den sua da.webp";

const Caphe = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto flex">
        <aside className="sidebar p-6 bg-white w-1/4 border-r border-gray-200">
        <h3 className="text-green-700 text-xl font-semibold mb-4">Tất cả</h3>
  
  <h4 className="text-green-700 text-lg font-medium mb-3">Thức uống</h4>
  <ul className="list-none p-0 text-black space-y-2">
  <li className="hover:text-green-700 transition-colors cursor-pointer">
    <a href="Caphe">Cà phê</a>
  </li>
  <li className="hover:text-green-700 transition-colors cursor-pointer">
    <a href="Bestseller">Best seller</a>
  </li>
  <li className="hover:text-green-700 transition-colors cursor-pointer">
    <a href="Daxay">Trà đã xây</a>
  </li>
  <li className="hover:text-green-700 transition-colors cursor-pointer">
    <a href="#">Trà sữa</a>
  </li>
  <li className="hover:text-green-700 transition-colors cursor-pointer">
    <a href="#">Kem silky</a>
  </li>
          </ul>
          <h4 className="text-green-700 text-lg font-medium mt-6 mb-3">Bánh</h4>
        </aside>

        <main className="main-content flex-3 p-5 text-black">
          <h2 className="text-2xl mb-5">Cà phê</h2>
          <section className="product-section mb-10">
            <div className="product-grid grid grid-cols-3 gap-5">
              <div className="product-card bg-white border border-gray-300 p-4 text-center rounded-lg transition-all hover:scale-105 flex flex-col justify-between">
                <Image
                  className="w-full mb-3 lg:w-[150px] lg:h-auto mx-auto"
                  src={product1}
                  alt="Phuc Long Logo"
                  width={150}
                  height={50}
                />
                <h3 className="text-lg mb-2">Đường đen sữa đá</h3>
                <p className="text-gray-700 mb-2">65.000 đ</p>
                <button className="bg-green-700 text-white p-2 rounded-lg">
                  🛒 Đặt mua
                </button>
              </div>

              <div className="product-card bg-white border border-gray-300 p-4 text-center rounded-lg transition-all hover:scale-105 flex flex-col justify-between">
                <Image
                  className="w-full mb-3 lg:w-[150px] lg:h-auto mx-auto"
                  src={product2}
                  alt="Phuc Long Logo"
                  width={150}
                  height={50}
                />
                <h3 className="text-lg mb-2">Bạc sỉu</h3>
                <p className="text-gray-700 mb-2">65.000 đ</p>
                <button className="bg-green-700 text-white p-2 rounded-lg">
                  🛒 Đặt mua
                </button>
              </div>

              <div className="product-card bg-white border border-gray-300 p-4 text-center rounded-lg transition-all hover:scale-105 flex flex-col justify-between">
                <Image
                  className="w-full mb-3 lg:w-[150px] lg:h-auto mx-auto"
                  src={product3}
                  alt="Phuc Long Logo"
                  width={150}
                  height={50}
                />
                <h3 className="text-lg mb-2">Cà phê sửa đá</h3>
                <p className="text-gray-700 mb-2">65.000 đ</p>
                <button className="bg-green-700 text-white p-2 rounded-lg">
                  🛒 Đặt mua
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Caphe;
