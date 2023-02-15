import React from "react";
import Button from "./Button";

const list = ["All", "Live","Movies", "Entertainment", "Gaming", "Songs", "Soccer", "Cricket", "Valentines","Cooking"];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((item,i) => <Button key={i} name={item} />)}
    </div>
  );
};

export default ButtonList;
