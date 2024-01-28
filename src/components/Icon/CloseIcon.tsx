import cn from "@/utils/style/cn";
import { SVGProps } from "react";

const CloseIcon = (props: SVGProps<SVGSVGElement> & { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth={3}
    viewBox="0 0 24 24"
    {...props}
    className={cn("w-4 h-4", props.className)}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18 18 6M6 6l12 12"
    />
  </svg>
);
export default CloseIcon;
