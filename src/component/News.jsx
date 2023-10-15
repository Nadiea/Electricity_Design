import image from "/src/assets/67f06e5036e07ad622b190ce3f168729.jpg";
import image1 from "/src/assets/istockphoto-1218785008-612x612.jpg";
import image2 from "/src/assets/black_car_in_black_background_hd_black_background.jpg";

export default function News() {
  return (
    <div className="bg-black font-Lato" >




      
      <div className=" md:w-12/12 w-12/12 mx-auto bg-white ">
        <h1 className=" flex justify-center font-bold"> News</h1>
        <p
          className=" flex justify-center  md:text-7xl text-2xl font-bold"
      
        >
          {" "}
          How it all works?
        </p>








        <div className=" md:grid grid-cols-6 gap-3 mt-4 p-6 "  >







<div className="grid col-span-2" >
  <div>
    <img src={image} className="h-44 w-full" alt="Smart Home" />
  </div>
  <div className="bg-lime-400 mb-1 mt-2 text-xs  w-16 flex justify-center rounded-xl">
    intern
  </div>
  <div className=" font-semibold mt-2 text-lg">
    Transfrom Your Home into a Smart Haven
  </div>
  <div className="text-xs  md:mb-0 mb-4">
    Steps into the Experience Intelligent Living in Your Smart Home
  </div>
</div>

          <div className=" grid col-span-2">
            <div>
              <img src={image1} className=" h-44 w-full" />
            </div>
            <div className=" bg-lime-400 mt-2 mb-1  w-16 flex justify-center text-xs rounded-xl ">
              intern
            </div>
            <div className="  font-semibold mt-2 text-lg">
              {" "}
              Transfrom Your home into a smart haven
            </div>
            <div className=" text-xs   md:mb-0 mb-4 ">
              {" "}
              Steps into the Experience intelligent living in your smart home
            </div>
          </div>

          <div className=" grid col-span-2">
            <div>
              <img src={image2} className=" h-44 w-full" />
            </div>
            <div className=" bg-lime-400 text-xs mt-2  mb-1  w-16 flex justify-center rounded-xl ">
              intern
            </div>
            <div className="  font-semibold mt-2 text-lg  ">
              {" "}
              Transfrom Your home into a smart haven
            </div>
            <div className=" text-xs   md:mb-0 mb-4 ">
              {" "}
              Steps into the Experience intelligent living in your smart home
            </div>
          </div>
        </div>
       <div className=" flex justify-center items-center mt-5  " 
       > <button className=" mb-14  bg-slate-100 hover:bg-lime-400  w-48 h-10 p-2 rounded-xl     border-slate-400 border mt-2   flex justify-center items-center ">
             Learn More
            </button></div>



      </div>
    </div>
  );
}
