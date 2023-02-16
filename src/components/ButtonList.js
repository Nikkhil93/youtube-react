import React from "react";
import Button from "./Button";

const list = ["All", "Live","Movies", "Cooking", "Gaming", "Songs", "Soccer"];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((item,i) => <Button key={i} name={item} />)}
    </div>
  );
};

export default ButtonList;
