import React, { useState } from "react";
import data from "../assets/data.json";
import { useBill } from "../context/PassengerContext";
const Labels = () => {
  const { setTag,tag} = useBill();
  // const [isClick,setIsClick]=useState(false)
  console.log(tag);

  const LabelItem = (props) => {
    return (
      <div
        onClick={() => {
          setTag(props.item.id);
          setIsClick()
        }}
        className=" rounded-full border-slate-300 border-2 px-5 py-2 text-xl cursor-pointer hover:bg-slate-100 hover:border-[#6169a9]"
      >
        {props.item.label}
      </div>
    );
  };
  return (
    <div className="flex gap-4 border-slate-300 border-b-2 p-6 flex-wrap items-center justify-center">
      {data.labels.map((item) => {
        return <LabelItem item={item} key={item.id} />;
      })}
    </div>
  );
};

export default Labels;
