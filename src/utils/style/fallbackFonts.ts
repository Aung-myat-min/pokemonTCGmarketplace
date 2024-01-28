import { Poppins } from "next/font/google";

const fallbackFonts = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["devanagari"],
});

export default fallbackFonts;
