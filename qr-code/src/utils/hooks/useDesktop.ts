import { useMediaQuery } from "react-responsive";

const useDesktop = () => {
    const isDesktop = useMediaQuery({ minWidth: 1224 });
    return isDesktop;
};

export default useDesktop;
