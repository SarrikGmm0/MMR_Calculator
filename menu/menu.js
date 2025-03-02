import React from "react";
import { Button } from "@/components/ui/button";

const Menu = ({ onClose }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-2xl p-8 shadow-lg grid gap-4">
        <Button className="w-full" onClick={() => console.log("Настройки")}>Настройки</Button>
        <Button className="w-full" onClick={() => console.log("О нас")}>О нас</Button>
        <Button className="w-full" onClick={() => console.log("Выход")}>Выход</Button>
        <Button className="w-full" onClick={onClose}>Закрыть</Button>
      </div>
    </div>
  );
};

export default Menu;
