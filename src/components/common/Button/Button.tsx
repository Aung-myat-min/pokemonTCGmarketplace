"use client";

import cn from "@/utils/style/cn";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  color?: "yellow" | "black" | "blue";
}

export type ButtonRef = HTMLButtonElement;

const buttonStyle = {
  container: "min-h-[48px] w-full max-w-[218px] rounded-full",
  alignment: "flex text-center justify-center items-center",
  spacing: "px-[24px] py-[8px]",
  shadow: "drop-shadow-poke outline-none",
  yellow: "bg-[#FDCE29]",
  black: "bg-[#1D1C1C] text-white",
  blue: "bg-active text-white",
  interaction: "hover:opacity-90",
};

const Button = forwardRef<ButtonRef, ButtonProps>(function MyButton(
  { className, color = "yellow", ...restProps },
  ref
) {
  return (
    <button
      ref={ref}
      className={cn(
        buttonStyle.container,
        buttonStyle.alignment,
        buttonStyle.shadow,
        buttonStyle.spacing,
        buttonStyle.interaction,
        buttonStyle[color],
        className
      )}
      {...restProps}
    />
  );
});

export default Button;
