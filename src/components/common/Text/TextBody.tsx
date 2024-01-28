import cn from "@/utils/style/cn";
import { PropsWithChildren } from "react";

interface TextBodyProps {
  tag?: "p" | "span" | "div";
  className?: string;
}

const TextBody: React.FC<PropsWithChildren<TextBodyProps>> = ({
  children,
  tag = "p",
  className = "",
}) => {
  const DynamicTextComponent = tag;

  return (
    <DynamicTextComponent className={cn("text-body flex flex-wrap", className)}>
      {children}
    </DynamicTextComponent>
  );
};
export default TextBody;
