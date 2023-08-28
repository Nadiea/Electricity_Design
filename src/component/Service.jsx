import "animate.css";

export default function Service() {
  return (
    <div className="bg-black ">
      <div className="w-9/12 mx-auto p-4  ">
        <h1 className=" animate__animated animate__fadeInLeft flex justify-center text-white font-serif  text-xl mb-5 pt-14"  style={{ fontFamily: "'Comic Neue', cursive" }}>
          Service
        </h1>

        <p
          className="animate__animated animate__bounce animate__repeat-5 5 flex justify-center items-center text-xl md:text-7xl leading-[60px] pb-10 text-white "
          style={{ fontFamily: "'Comic Neue', cursive" }}
        >
          What can I do for you!
        </p>

        <div
          className="  grid md:grid-cols-8 grid-cols-2 gap-4  "
          style={{ fontFamily: "'Comic Neue', cursive" }}
        >
          <div className=" grid col-span-5  ">
            <div>
              {" "}
              <div className=" relative hover:bg-lime-600   bg-lime-400 w-full  h-72  rounded-br-[50px] p-2">
                {" "}
                <div className=" font-bold  text-2xl" >INTROVERT</div>
                <div className="  md:mt-[170px] mt-[162px]    md:text-2xl font-bold text-xl">
                  Modern Smart home system for your home and more1
                </div>
              </div>
              <div className=" absolute top-[927px] left-[736px] hidden md:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="yellow"
                  viewBox="0 0 24 24"
                  strokeWidth="3"
                  stroke="currentColor"
                  className="w-14 h-14 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
              
            </div>

            <div>
              <div className="  hover:bg-slate-300 bg-slate-100 w-full h-72  mt-4 rounded-br-[50px] relative">
                {" "}
                <div className="md:pt-52 pt-48 p-2    md:text-2xl font-bold text-xl">
                  Modern Smart home system for your home and more.
                </div>
              </div>
              <div className=" absolute top-[1232px] left-[737px] hidden md:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="yellow"
                  viewBox="0 0 24 24"
                  strokeWidth="3"
                  stroke="currentColor"
                  className="w-14 h-14 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className=" grid col-span-3 md:block hidden ">
            <div>
              {" "}
              <div className=" hover:bg-slate-300  bg-slate-100 w-full  rounded-br-[50px] p-2  relative h-[590px]">
                {" "}
                <div className=" font-bold  text-2xl">INTROVERT1</div>
                <div className=" mt-[470px]    md:text-2xl font-bold text-xl">
                  Modern Smart home system for your home and more
                </div>
              </div>
              <div className=" absolute top-[927px] left-[1110px] hidden md:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="yellow"
                  viewBox="0 0 24 24"
                  strokeWidth="3"
                  stroke="currentColor"
                  className="w-14 h-14 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
