import { useMediaQuery } from "react-responsive";

const smMobile = "(max-width: 24rem)"; //384px
const mobile = "(max-width: 30rem)"; //480px
const tablet = "(max-width: 48rem)"; //768px
const laptop = "(max-width: 64rem)"; //1024px
const largeLaptop = "(max-width: 90rem)"; //1440px

export const useQuery = () => ({
  isSmMobile: useMediaQuery({ query: smMobile }),
  isMobile: useMediaQuery({ query: mobile }),
  isTablet: useMediaQuery({ query: tablet }),
  isLargeLaptop: useMediaQuery({ query: largeLaptop }),
  isLaptop: useMediaQuery({ query: laptop }),
});
