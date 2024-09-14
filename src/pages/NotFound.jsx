import React from "react";
import { NavLink } from "react-router-dom";
const NotFound = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen text-4xl ">
        <h1 className="font-bold">ไม่พบกีตาร์ที่ต้องการ</h1>
        <NavLink to='/'>กลับหน้าหลัก</NavLink>
      </div>
    </>
  );
};

export default NotFound;
