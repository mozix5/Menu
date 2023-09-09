import React, { useState } from "react";
import data from "../assets/data.json";
import { useBill } from "../context/PassengerContext";
const Menu = () => {
  const {
    tag,
    selectedMeals,
    handleSelectedMeal,
    selectedDrink,
    handleSelectedDrink,
    setSelectedDrink
  } = useBill();

  const DrinkItem = () => {
    return (
      <>
        <img className="h-10 w-10 object-cover" src={props.image}></img>
      </>
    );
  };
  console.log(selectedMeals);
  console.log(selectedDrink);

  const MenuItem = (props) => {
    const isSelected = selectedMeals.some((meal) => meal.id === props.id);
    console.log(isSelected);

    return (
      <div className=" px-6">
        <div className="flex border-slate-300 border-b-2 py-6">
          <div className=" ">
            <img className="w-96 h-56 object-cover" src={props.image}></img>
          </div>
          <div className=" pl-6 flex-1 flex flex-col justify-between">
            <div className=" text-2xl font-semibold">
              {props.title} + Drinks
            </div>

            <div>
              <div className="text-lg"><span className=" font-semibold">Starter</span> : {props.starter}</div>
              <div className="text-lg"><span className=" font-semibold">Dessert</span> : {props.dessert}</div>
              <div className="text-lg">
                <span className=" font-semibold">Selected Drink</span> : {selectedDrink.title}
              </div>
            </div>
            <div className="flex flex-col ">
              <div className="flex justify-between">
                <div className="flex gap-4">
                  {props.drinks.map((item) => {
                    return (
                      <button
                        src={item.title}
                        onClick={() =>
                          handleSelectedDrink(item.id, item.price, item.title)
                        }
                        className={` border-2 border-slate-200  ${
                          isSelected ? "hover:border-[#6169a9]" : "disabled opacity-50 "
                        }`}
                        key={item.id}
                        disabled={!isSelected}
                      >
                        <img
                          className="h-16 w-16 object-cover"
                          src={item.image}
                        ></img>
                      </button>
                    );
                  })}
                </div>
                <div>
                  <div className=" text-lg font-semibold">{props.price}</div>
                  <button
                    onClick={() => {
                      handleSelectedMeal(props.id, props.price, props.title);
                      
                    }}
                    className={`px-4 border-[#6169a9] rounded-md border-2 py-1 text-[#6169a9] ${
                      isSelected ? "bg-slate-100 " : ""
                    }`}
                  >
                    {isSelected ? "Deselect" : "Select"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="bg-white">
      {/* <MenuItem /> */}

      {(tag
        ? data.meals.filter((item) => item.labels.includes(tag))
        : data.meals
      ).map((item) => {
        return (
          <MenuItem
            key={item.id}
            id={item.id}
            title={item.title}
            starter={item.starter}
            dessert={item.desert}
            price={item.price}
            image={item.img}
            drinks={item.drinks}
          />
        );
      })}
    </div>
  );
};

export default Menu;
