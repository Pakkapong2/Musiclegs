import React from "react";

const GuitarCard = (props) => {
  return (
    <div className="max-w-sm bg-gray-300 shadow-xl">
      <img src={`./pic/product/${props.pic}`} alt="" />
      <div className="p-3 bg-white">
        <h1 className="text-2xl font-bold mt-2">{props.name}</h1>
        <div className="flex justify-between">
          <h1>ราคา {props.price} บาท</h1>
          <button className="px-4 py-2 text-center bg-red-600 text-white flex gap-2 rounded-full">
            + สั่งซื้อ
          </button>
        </div>
      </div>
    </div>
  );
};

export default GuitarCard;
