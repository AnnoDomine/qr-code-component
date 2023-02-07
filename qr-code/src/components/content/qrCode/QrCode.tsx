import useDesktop from "../../../utils/hooks/useDesktop";

const QrCode = () => {
    const isDesktop = useDesktop();
    const size = isDesktop ? "575px" : "325px";

    return <img src="./image-qr-code.png" style={{ borderRadius: "10px", width: size, height: size }} />;
};

export default QrCode;
