"use client";

import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

import product1 from "./public/image/bac xiu.webp"; // Ensure this is the correct image path
import banner1 from "./public/image/banner1.webp";

import banner3 from "./public/image/banner1.webp";

export default function Home() {
  const [, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth >= 375 && window.innerWidth <= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const productsCategory1 = [
    { image: product1, name: "Bạc Xỉu", price: "50.000 đ" },
    { image: product1, name: "Matcha Latte", price: "60.000 đ" },
    { image: product1, name: "Caramel Macchiato", price: "65.000 đ" },
    { image: product1, name: "Cacao Nóng", price: "55.000 đ" },
    { image: product1, name: "Trà Sữa", price: "50.000 đ" },
  ];

  const productsCategory2 = [
    { image: product1, name: "Soda Trái Cây", price: "55.000 đ" },
    { image: product1, name: "Phô Mai Tươi", price: "60.000 đ" },
    { image: product1, name: "Trà Ô Long Dâu", price: "50.000 đ" },
    { image: product1, name: "Dâu Phô Mai", price: "55.000 đ" },
    { image: product1, name: "Nho Phô Mai", price: "55.000 đ" },
  ];

  return (
    <div className="bg-gray-100">
      <section className="flex mb-5">
        <div className="w-full p-4">
          <Image
            className="w-full h-[500px] object-cover"
            src={banner1}
            alt="Banner"
            width={1920}
            height={200}
          />
        </div>
      </section>

      <div className="container max-w-7xl mx-auto flex">
        <main className="main-content flex-3 p-5 text-black">
          <h2 className="text-2xl mb-5">Sản phẩm bán chạy </h2>
          <section className="product-section mb-10">
            <div className="product-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
              {productsCategory1.map((product, index) => (
                <div
                  key={index}
                  className="product-card bg-white border border-gray-300 p-4 text-center rounded-lg transition-all hover:scale-105 flex flex-col justify-between"
                >
                  <Image
                    className="w-full mb-3 lg:w-[150px] lg:h-auto mx-auto"
                    src={product.image}
                    alt={product.name}
                    width={150}
                    height={50}
                  />
                  <h3 className="text-lg mb-2">{product.name}</h3>
                  <p className="text-gray-700 mb-2">{product.price}</p>
                  <button className="bg-green-700 text-white p-2 rounded-lg">
                    🛒 Đặt mua
                  </button>
                </div>
              ))}
            </div>
          </section>

          <h2 className="text-2xl mb-5">Sản phẩm mới</h2>
          <section className="product-section mb-10">
            <div className="product-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
              {productsCategory2.map((product, index) => (
                <div
                  key={index}
                  className="product-card bg-white border border-gray-300 p-4 text-center rounded-lg transition-all hover:scale-105 flex flex-col justify-between"
                >
                  <Image
                    className="w-full mb-3 lg:w-[150px] lg:h-auto mx-auto"
                    src={product.image}
                    alt={product.name}
                    width={150}
                    height={50}
                  />
                  <h3 className="text-lg mb-2">{product.name}</h3>
                  <p className="text-gray-700 mb-2">{product.price}</p>
                  <button className="bg-green-700 text-white p-2 rounded-lg">
                    🛒 Đặt mua
                  </button>
                </div>
              ))}
            </div>
          </section>

          <Image
            className="w-full mb-5 h-[200px] object-cover mx-auto"
            src={banner3}
            alt="Banner"
            width={1920}
            height={200}
          />
          <section className="flex mb-5">
            <div className="w-full sm:w-1/2 p-4">
              <p>
                HCM SIGNATURE by The Coffee House Nhà tin rằng “cuộc hẹn cà phê”
                luôn có cho mình những tiêu chuẩn, phiên bản khác nhau, chúng
                luôn biến hoá mỗi ngày. Và SIGNATURE by The Coffee House là nơi
                bạn tìm thấy phiên bản đặc biệt của Cuộc hẹn tròn đầy giữa những
                ngày hối hả.Hôm nay bạn có hẹn chưa? Mình cà phê nhé!
              </p>
            </div>

            <div className="w-full sm:w-1/2 p-4">
              <Image
                className="w-full h-[200px] object-cover"
                src={banner1}
                alt="Banner"
                width={1920}
                height={200}
              />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
