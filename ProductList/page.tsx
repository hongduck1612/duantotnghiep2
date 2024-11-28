"use client";

import { useState } from "react";
import Image from "next/image";
import anhsanpham from "../public/image/hinh-anh-ly-ca-phe-dep-nhat-8.jpg"; 
import productImage1 from "../public/image/hinh-anh-ly-ca-phe-dep-nhat-8.jpg"; 
import productImage2 from "../public/image/hinh-anh-ly-ca-phe-dep-nhat-8.jpg"; 
import productImage3 from "../public/image/hinh-anh-ly-ca-phe-dep-nhat-8.jpg"; 

type SizeType = "S" | "M" | "L" | "XL";
type SugarType = "Đường" | "Ít đường" | "Không đường";

export default function Productlist() {
  const [selectedSize, setSelectedSize] = useState<SizeType | null>(null);
  const [selectedSugar, setSelectedSugar] = useState<SugarType | null>(null);
  const [quantity, setQuantity] = useState(1);
  const price = 50000;

  const handleSizeClick = (size: SizeType) => {
    setSelectedSize(size);
  };

  const handleSugarClick = (sugar: SugarType) => {
    setSelectedSugar(sugar);
  };

  const handleQuantityChange = (type: "increment" | "decrement") => {
    if (type === "increment") {
      setQuantity((prev) => prev + 1);
    } else if (type === "decrement" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const totalPrice = price * quantity;

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="container mx-auto">
        <div className="bg-white shadow-md rounded-lg p-6 md:flex md:gap-6">
          <div className="md:w-1/2 flex justify-center items-center">
            <Image
              src={anhsanpham}
              alt="Sản phẩm"
              width={420}
              height={420}
              className="rounded-lg mx-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Salted Egg Coffee
            </h1>
            <p className="text-gray-600 mb-4">
              Đây là một món đồ chất lượng cao, tốt cho sức khỏe, phù hợp cho
              nhiều mục đích giải trí.
            </p>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Kích cỡ</h3>
              <div className="flex gap-2">
                {["S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    onClick={() => handleSizeClick(size as SizeType)}
                    className={`px-4 py-2 border rounded-lg to-blue-500:bg-gray-100 ${
                      selectedSize === size
                        ? "bg-blue-500 text-white"
                        : "bg-white text-gray-800"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {selectedSize && (
                <p className="text-green-500 mt-2">
                  Bạn đã chọn kích cỡ: {selectedSize}
                </p>
              )}
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Đường</h3>
              <div className="flex gap-2">
                {["Đường", "Ít đường", "Không đường"].map((sugar) => (
                  <button
                    key={sugar}
                    onClick={() => handleSugarClick(sugar as SugarType)}
                    className={`px-4 py-2 border rounded-lg to-blue-500:bg-gray-100 ${
                      selectedSugar === sugar
                        ? "bg-blue-500 text-white"
                        : "bg-white text-gray-800"
                    }`}
                  >
                    {sugar}
                  </button>
                ))}
              </div>
              {selectedSugar && (
                <p className="text-green-500 mt-2">
                  Bạn đã chọn: {selectedSugar}
                </p>
              )}
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Số lượng</h3>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => handleQuantityChange("decrement")}
                  className="bg-black text-white px-3 py-2 rounded-lg hover:bg-gray-800"
                >
                  -
                </button>
                <span className="text-black text-xl font-bold">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange("increment")}
                  className="bg-black text-white px-3 py-2 rounded-lg hover:bg-gray-800"
                >
                  +
                </button>
              </div>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Tổng tiền:{" "}
                <span className="text-red-500">{totalPrice.toLocaleString()}₫</span>
              </h3>
            </div>
            <div className="mt-6">
              <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600">
                Thêm vào giỏ hàng
              </button>
              <button className="bg-orange-900 text-white py-2 px-6 rounded-lg ml-4 hover:bg-orange-900">
                Thanh toán
              </button>
            </div>
          </div>
        </div>

        {/* New Product Images Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Các sản phẩm khác</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[productImage1, productImage2, productImage3].map((src, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                <Image
                  src={src}
                  alt={`Sản phẩm ${index + 1}`}
                  width={250}
                  height={250}
                  className="rounded-lg mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Salted Egg Coffee {index + 1}
                </h3>
                <p className="text-xl font-bold text-red-500">{price.toLocaleString()}₫</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
