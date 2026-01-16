import React from "react";

interface ButtonProps {
  title: string;
  type: "primary" | "secondary";
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ title, type, icon }) => {
  return (
    <button
      className={`${
        type === "primary"
          ? "bg-earth-light-ash text-earth-dark-ash"
          : "bg-earth-dark-ash text-white"
      } py-3 px-6 flex items-center gap-1 font-inter tracking-wider rounded cursor-pointer text-[13px] xl:text-lg`}
    >
      {title}
      {icon && icon}
    </button>
  );
};

export default Button;
