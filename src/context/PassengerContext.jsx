import React, { createContext, useContext, useState } from "react";

const BillContext = createContext();

export const useBill = () => {
  return useContext(BillContext);
};
export const PassengerContext = ({ children }) => {
  const [tag, setTag] = useState("");
  const [selectedMeals, setSelectedMeals] = useState([]);
  const [selectedDrink, setSelectedDrink] = useState(0);

  const handleSelectedMeal = (id, price, title) => {
    const mealIndex = selectedMeals.findIndex((item) => item.id === id);
    if (mealIndex === -1) {
      setSelectedMeals([...selectedMeals, { id, title, price }]);
    } else {
      const updated = selectedMeals.filter((meal) => meal.id !== id);
      setSelectedMeals(updated);
    }
  };
  

  const handleSelectedDrink = (id, price, title) => {
    if (selectedDrink.id === id) {
      setSelectedDrink(0);
    } else {
      setSelectedDrink({ title: title, id: id, price: price });
    }
  };

  return (
    <BillContext.Provider
      value={{
        tag,
        setTag,
        selectedMeals,
        setSelectedMeals,
        handleSelectedMeal,
        setSelectedDrink,
        selectedDrink,
        handleSelectedDrink,
      }}
    >
      {children}
    </BillContext.Provider>
  );
};

