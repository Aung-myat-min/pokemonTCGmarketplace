import cn from "@/utils/style/cn";

const WhiteShadowUp: React.FC<{ className?: string }> = ({ className }) => {
  return <div className={cn("w-full white-shadow-up h-[64px]", className)}></div>;
};
export default WhiteShadowUp;
