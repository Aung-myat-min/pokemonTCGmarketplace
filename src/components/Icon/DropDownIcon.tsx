import cn from "@/utils/style/cn";
import { SVGProps } from "react";

const DropDownIcon = (
  props: SVGProps<SVGSVGElement> & { className?: string }
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 11 11"
    fill="none"
    {...props}
    className={cn(props.className)}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.5 8a.742.742 0 0 1-.503-.199L.283 3.515a.911.911 0 0 1-.1-1.207.742.742 0 0 1 1.106-.11l4.22 3.837 4.213-3.699a.742.742 0 0 1 1.104.13.912.912 0 0 1-.119 1.206L5.993 7.811A.746.746 0 0 1 5.5 8Z"
      clipRule="evenodd"
    />
  </svg>
);
export default DropDownIcon;
