import React from "react";
import Button from "./Button";

const list = [{id: 1, name: 'All'}, {id: 2, name:"Live"},{id:3, name:"Movies"}, {id:4, name:"Cooking"}, {id:5,name:"Gaming"}, {id:6, name:"Songs"}, {id:7, name:"Soccer"}];

const ButtonList = () => {

  return (
    <div className="flex">
      {list.map((item) => <Button key={item.id} listItem={item} />)}
    </div>
  );
};

export default ButtonList;
