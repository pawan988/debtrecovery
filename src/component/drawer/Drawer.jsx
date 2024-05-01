import React from "react";

export default function Drawer({ isOpen, setIsOpen }) {
  const notification = ["", "", "", ""];

  return (
    <main
      className={
        " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          " w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <article className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
          <div className="flex justify-end pr-8 pt-4 mt-4">
            <label class="inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer" />
              <div
                class="relative w-11 h-6 bg-[#401f78] peer-focus:outline-none peer-focus:ring-4 peer-focus:[#401f78] dark:[#401f78] rounded-full peer dark:[#401f78] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
               peer-checked:after:border-white after:content-[''] 
               after:absolute after:top-[2px] after:start-[2px] after\:[#401f78] 
               after:[#401f78] after:border after:rounded-full after:h-5 after:w-5 after:transition-all 
               dark:[#401f78] peer-checked:[#401f78]"
              ></div>
            </label>
          </div>
          {notification?.map(() => (
            <div className="px-8">
              <div className="pl-3">
                <p className="font-medium">Aashrit Verma</p>
              </div>
              <div className="bg-gray-300 py-6 px-4 mt-4 borde rounded-xl">
                <p className="font-medium">
                  Promise To Pay, Call Status, 2020-5-8, Reminder Date
                </p>
              </div>
            </div>
          ))}
        </article>
        {/* Buttons row */}
        <div className="absolute bottom-3 left-0 right-0">
          <div className="flex justify-center flex-col items-center mb-10">
            <div>
              <p>
                <span className="font-3xl text-xl">Loan ID: </span>380UUIORHO90
              </p>
              <p>
                <span className="font-3xl text-xl">Customer Name: </span>
                Gaurav
              </p>
              <p>
                <span className="font-3xl text-xl">Remark </span>
              </p>
            </div>
          </div>
          <div className="flex px-8 py-4 gap-8">
            <button
              className="w-[150px] h-[50px] bg-primary text-white font-medium py-2 px-4 rounded-2xl text-lg"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Close
            </button>
            <button className="w-[150px] h-[50px] bg-primary text-white font-medium py-2 px-4 rounded-2xl text-lg">
              Save
            </button>
          </div>
        </div>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
}
