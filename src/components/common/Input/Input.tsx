import cn from "@/utils/style/cn";
import { forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export type InputRef = HTMLInputElement;

const Input = forwardRef<InputRef, InputProps>(function MyInput(
  { className, ...restProps },
  ref
) {
  return (
    <input
      ref={ref}
      className={cn(
        "h-[35px] items-center outline-none px-[24px] text-center md:text-left drop-shadow-poke md:drop-shadow-none",
        className
      )}
      {...restProps}
    />
  );
});

export default Input;
