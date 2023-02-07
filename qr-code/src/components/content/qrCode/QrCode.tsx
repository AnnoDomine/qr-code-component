// custom hooks
import useMobile from "../../../utils/hooks/useMobile";

const QrCode = () => {
    const isMobile = useMobile();
    const size = isMobile ? "325px" : "575px";

    return <img src="./image-qr-code.png" style={{ borderRadius: "10px", width: size, height: size }} />;
};

export default QrCode;
