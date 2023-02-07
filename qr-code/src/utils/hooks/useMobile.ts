// packages
import { useMediaQuery } from "react-responsive";

/**
 * Checks the window width and returns true when size is below 720px
 * @returns {boolean}  True if window width belo 720px for mobile view
 */
const useMobile = (): boolean => {
    const isMobile: boolean = useMediaQuery({ maxWidth: 720 });
    return isMobile;
};

export default useMobile;
