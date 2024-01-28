import cn from "@/utils/style/cn";
import { PropsWithChildren } from "react";

interface TextInputProps {
  tag?: "p" | "span" | "div";
  className?: string;
}

const TextInput: React.FC<PropsWithChildren<TextInputProps>> = ({
  children,
  tag = "span",
  className = "",
}) => {
  const DynamicTextComponent = tag;

  return (
    <DynamicTextComponent
      className={cn("text-input flex justify-center items-center", className)}
    >
      {children}
    </DynamicTextComponent>
  );
};
export default TextInput;
