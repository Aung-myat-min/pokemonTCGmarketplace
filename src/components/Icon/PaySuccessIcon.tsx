import { SVGProps } from "react";

const PaymentSuccessIcon = (
  props: SVGProps<SVGSVGElement> & { className?: string }
) => (
  <svg
    width="110"
    height="110"
    viewBox="0 0 110 110"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M110 55C110 85.3757 85.3757 110 55 110C24.6243 110 0 85.3757 0 55C0 24.6243 24.6243 0 55 0C85.3757 0 110 24.6243 110 55ZM85.4536 42.6485C88.2971 39.6366 88.1606 34.8898 85.1487 32.0463C82.1367 29.2027 77.39 29.3393 74.5465 32.3512L44.1716 64.5248L34.7934 56.7315C31.6077 54.0842 26.8791 54.5207 24.2317 57.7064C21.5844 60.8922 22.0209 65.6208 25.2066 68.2681L39.9991 80.5606C43.0432 83.0902 47.529 82.819 50.2461 79.941L85.4536 42.6485Z"
      fill="#5DDD48"
    />
  </svg>
);
export default PaymentSuccessIcon;
