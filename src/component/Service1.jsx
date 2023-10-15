import image from "/src/assets/67f06e5036e07ad622b190ce3f168729.jpg";

export default function Service1() {
  return (
    <div className="p-0">
      <div className="bg-white md:grid flex-col  grid-cols-11 md:h-full h-64 font-Lato">
        <div className="md:grid col-span-6 flex-col md:p-36 p-20 justify-center items-center">
          <div className="md:text-5xl text-xl font-semibold text-lime-800" >
            Steps into the<br />Experience intelligent<br />living in your smart home
          </div>
          <div
            className="flex mb-24 md:text-xl text-sm mt-2 md:mt-5 font-mono md:w-80 md:h-10 w-60 h-10 gap-2"
         
          >
            <button className="bg-lime-300 md:w-48 w-44 h-8 md:h-10 p-2 rounded-xl">CHECK NOW</button>
            <button className="hidden md:block text-xl">SEND ME EMAIL</button>
          </div>
        </div>
        <div className="hidden grid md:block col-span-5">
          <img src={image} className="w-full" alt="Smart Home" />
        </div>
      </div>
    </div>
  );
}
