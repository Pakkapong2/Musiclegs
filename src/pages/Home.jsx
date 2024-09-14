import React from "react";
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <Layout>
      <div className="home-bg">
        <div className="flex justify-between items-center container ">
          <div className="bg-blend-darken bg-black bg-opacity-70 h-screen w-1/3 hidden sm:flex md:flex lg:flex items-center">
            <img className="h-2/3" src="./pic/home.png" alt="" />
          </div>
          <div className="flex items-center flex-col justify-between h-72 mt-56 sm:mt-0 md:mt-0 lg:mt-0">
            <div className="text-white">
              <h1 className="font-bold text-4xl text-center ">
                ยินดีต้อนรับสู่ร้าน Music Legs
              </h1>
              <h2 className="text-2xl text-center ">
                ร้านขายกีตาร์โปร่งมือหนึ่งของโลก
              </h2>
            </div>
            <div className="text-white text-center">
              <h1 className="font-bold text-4xl ">สินค้าแนะนำ</h1>
              <h2 className="text-2xl text-center ">
                การต้าร์รุ่นนิยมเหมาะกับทุกวัย สนใจเลือกดูสินค้าด้านล่าง
              </h2>
              <center>
                <NavLink
                  className="bg-amber-300 block w-fit text-white p-3.5 px-10 rounded-full mt-5"
                  to="/product"
                >
                  ดูสินค้า
                </NavLink>
              </center>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
