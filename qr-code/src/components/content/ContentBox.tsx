import useDesktop from "../../utils/hooks/useDesktop";
import { contentBoxStyle } from "./ContentBox.styles";
import ContentFooter from "./contentFooter/ContentFooter";
import QrCode from "./qrCode/QrCode";

const ContentBox = () => {
    const isDesktop = useDesktop();
    const sizeBox = isDesktop ? "575px" : "325px";

    return (
        <div role={"content"} style={contentBoxStyle(sizeBox)}>
            <QrCode />
            <ContentFooter />
        </div>
    );
};

export default ContentBox;
