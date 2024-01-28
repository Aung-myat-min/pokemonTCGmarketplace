import cn from "@/utils/style/cn";
import { PropsWithChildren } from "react";

interface TextTitleProps {
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
}

const TextTitle: React.FC<PropsWithChildren<TextTitleProps>> = ({
  children,
  tag = "h1",
  className = "",
}) => {
  const DynamicTextComponent = tag;

  return (
    <DynamicTextComponent className={cn("text-title", className)}>
      {children}
    </DynamicTextComponent>
  );
};
export default TextTitle;
