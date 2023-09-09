import React, { useState } from "react";
import Labels from "./Labels";
import Menu from "./Menu";
import { useBill } from "../context/PassengerContext";
import { IoIosArrowDown, IoIosArrowDropdown } from "react-icons/io";

const Home = () => {
  const { selectedMeals, selectedDrink } = useBill();
  const [isOpen, setIsOpen] = useState(false);
  //  let tot=0
  let mealPrice = 0;
  selectedMeals.map((item) => {
    mealPrice += item.price;
  });
  const totalPrice = mealPrice + (selectedDrink ? selectedDrink.price : 0);

  return (
    <>
      <div className="flex bg-gray-200 py-3 px-14 min-h-screen font-mono">
        <div className="bg-white w-[65%] rounded-xl">
          <Labels />

          <Menu />
        </div>
        <div className="fixed w-[30%] h-screen top-0 right-6">
          <div className=" text-2xl font-semibold px-6 py-3">Select meal</div>
          <div className="">
            <div className=" rounded-md border-2 border-l-8 border-b-2 border-[#6169a9] flex justify-between px-6 h-16 items-center">
              <div>
                <div className=" font-semibold">Mumbai - Delhi</div>
                <div className=" text-slate-400 text-sm">
                  Flight duration 2h 30m
                </div>
              </div>
              <div onClick={()=>{setIsOpen(!isOpen)}} className=" cursor-pointer">
                <IoIosArrowDown className={`text-xl ${isOpen&& 'rotate-180'}`} />
              </div>
            </div>
            <div className={`${!isOpen&& 'hidden'}`}>
              <div className="rounded-md  border-x-2 border-[#6169a9] flex justify-between px-6 h-16 items-center pl-12 font-medium">
                <div>Adult Passenger1</div>
                <div>Select Meal</div>
              </div>
              <div className="rounded-md border-2 pl-12 border-[#6169a9] flex justify-between px-6 h-16 items-center font-medium">
                <div>Adult Passenger2</div>
                <div>Select Meal</div>
              </div>
            </div>
          </div>
          <div className=" text-lg font font-semibold pt-6">
            Total for all passengers : {totalPrice.toFixed(2)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
