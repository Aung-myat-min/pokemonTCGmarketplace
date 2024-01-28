import { PropsWithChildren } from "react";

const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="w-full max-w-[1072px] px-[24px] mx-auto pt-[45px]">
      {children}
    </main>
  );
};

export default Container;
