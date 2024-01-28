import cn from "@/utils/style/cn";
import { PropsWithChildren } from "react";

interface TextPlaceholderProps {
  tag?: "p" | "span" | "div";
  className?: string;
}

const TextPlaceholder: React.FC<PropsWithChildren<TextPlaceholderProps>> = ({
  children,
  tag = "span",
  className = "",
}) => {
  const DynamicTextComponent = tag;

  return (
    <DynamicTextComponent className={cn("text-input flex flex justify-center items-center", className) + " text-placeholder"}>
      {children}
    </DynamicTextComponent>
  );
};
export default TextPlaceholder;
