import React from "react";
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto max-w-5xl">
        <div className="flex justify-center mt-10">
          <h1 className="text-5xl font-bold underline">ประวัติกีต้าร์โปร่ง</h1>
        </div>
        <div className=" mt-10 flex flex-col items-center justify-center text-wrap text-base md:text-lg lg:text-xl xl:text-2xl">
          <div className="leading-10">
            <p>
              มีประวัติยาวนานและวิวัฒนาการมาจากเครื่องดนตรีหลากหลายชนิดในยุโรปและตะวันออกกลาง
              กีต้าร์โปร่งในรูปแบบที่เราคุ้นเคยในปัจจุบันเริ่มพัฒนาในช่วงปลายศตวรรษที่
              18 และต้นศตวรรษที่ 19 ในประเทศสเปน
              โดยกีต้าร์มีแปลงคลาสสิกได้กลายมาเป็นต้นแบบของกีต้าร์โปร่งสมัยใหม่
            </p>
            <br />
            <p>
              เครื่องดนตรีนี้มีลักษณะเป็นกล่องเสียง (Sound Box)
              ที่ช่วยขยายเสียงของสายที่ทำจากไนลอนหรือโลหะ ปกติแล้วมี 6 สาย
              แต่ก็มีแบบ 12 สายด้วย กีต้าร์โปร่งถูกใช้ในหลากหลายแนวเพลงดนตรี
              เช่น โฟล์ค, บลูส์, คันทรี และร็อค
              เพราะให้เสียงที่ไพเราะและอิสระในการแสดงออกจากวงดนตรี
            </p>
            <br />
            <p>
              ปัจจุบันกีต้าร์โปร่งเป็นหนึ่งในเครื่องดนตรีที่ได้รับความนิยมมากที่สุดในโลก
              ด้วยการเล่นที่หลากหลายและเหมาะสำหรับทั้งนักดนตรีมือใหม่และมืออาชีพ
            </p>
          </div>
        </div>
      </div>
      <div className=" flex justify-end">
        <img className="w-1/2" src="./pic/about/bg.png" alt="" />
      </div>
    </Layout>
  );
};

export default About;
