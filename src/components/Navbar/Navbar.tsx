import Image from "next/image";
import cn from "@/utils/style/cn";
import TextTitle from "@/components/common/Text/TextTitle";

// Options: we can change navbar style
const navBarStyle = {
  height: "h-[77px]",
  // Custom DropShadlow classes inside tailwind config
  dropShadow: "drop-shadow-poke",
};

const logoStyle = {
  bgCircle:
    "absolute w-[52px] h-[51px] -bottom-[20px] bg-white rounded-full z-0",
  container: "absolute w-[68px] h-[42px] -bottom-[14px] ",
};

const Navbar = () => {
  return (
    <div
      className={cn(
        "flex flex-row justify-center items-center relative bg-white sticky top-0 z-50",
        navBarStyle.height,
        navBarStyle.dropShadow
      )}
    >
      <div className={cn(logoStyle.bgCircle, navBarStyle.dropShadow)} />

      <div className={cn(logoStyle.container)}>
        <Image
          src={"/images/logo.png"}
          alt="Logo Image"
          width={68}
          height={42}
        />
      </div>

      <TextTitle className="relative z-10">TGC Marketplace</TextTitle>
    </div>
  );
};
export default Navbar;
