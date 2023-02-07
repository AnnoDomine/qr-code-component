// custom hooks
import useMobile from "../../../utils/hooks/useMobile";

const QrCode = () => {
    const isMobile = useMobile();
    const size = isMobile ? "325px" : "375px";

    return <img src="./image-qr-code.png" alt="qr-code" style={{ borderRadius: "10px", width: size, height: size }} />;
};

export default QrCode;
