import React from "react";
import Layout from "../components/Layout";

const Cart = () => {
  return (
    <Layout>
    <div className="flex items-center justify-center mt-32">
      <div className="bg-gray-300 w-96 h-96 rounded-2xl shadow-lg flex flex-col items-center justify-center p-6">
        <div className="text-gray-500 mb-4">
          <img src="./pic/cart/cart.png" alt="" />
        </div>
        <div className="text-center text-gray-600">
          <p className="mb-2">ถึงเวลา: ไม่ว่าง แต่เรา ว่าง อยู่นะ</p>
          <p>กรุณาเลือกสินค้า ที่ท่านชื่นชอบใส่รถเข็นได้เลย</p>
        </div>
        <button className="mt-6 px-4 py-2 bg-orange-400 text-white text-sm font-bold rounded-lg hover:bg-orange-500 transition duration-300">
          เลือกสินค้าที่นี่!
        </button>
      </div>
    </div>
    </Layout>
  );
};

export default Cart;
