// external components
import ContentFooter from "./contentFooter/ContentFooter";
import QrCode from "./qrCode/QrCode";
// styles
import { contentBoxStyle } from "./ContentBox.styles";
//custom hooks
import useMobile from "../../utils/hooks/useMobile";

const ContentBox = () => {
    const isMobile = useMobile();
    const sizeBox = isMobile ? "325px" : "375px";

    return (
        <div role={"content"} style={contentBoxStyle(sizeBox)}>
            <QrCode />
            <ContentFooter />
        </div>
    );
};

export default ContentBox;
