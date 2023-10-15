import News from "./News";
import Question from "./Question";
import Service from "./Service";
import Service1 from "./Service1";
import image from "/src/assets/black_car_in_black_background_hd_black_background.jpg";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className=" bg-black">
      {" "}
      <div className="relative md:w-12/12 mx-auto  p-4 md:p-0  opacity-80">
        <img
          className="w-full h-screen object-cover"
          src={image}
          alt="Ecology"
        />
        <div
          className="flex justify-center font-Lato text-white font-bold absolute top-1/3 md:top-40 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:block hidden"

        >
          DISCOVER A MODERN OPPORTUNITY RELATED TO ECOLOGY
        </div>
        <div className="absolute md:top-40 top-36 md:left-[348px] ">
          <div
            className="flex justify-center items-center font-Lato md:text-2xl text-lg md:leading-[60px] text-white font-bold mt-12"
          
          >
            <TypeAnimation
              sequence={["  WELCOME TO OUR COMPANY", 1000]}
              wrapper="span"
              speed={40}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </div>
          <div className="mt-10 md:ml-10  md:flex justify-center rounded-xl  items-center border absolute  md:top-36 top-20  md:left-56 " >
            <button className="bg-transparent hover:bg-blue-500 rounded-xl text-slate-100 font-semibold hover:text-white py-2 px-3 border border-white hover:border-transparent ">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <Service />
      <Service1 />
      <News />
      <Question />
    </div>
  );
}
